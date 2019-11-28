const mysql = require('mysql');

function execSQLQuery(sqlQry, res) {
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'sandvigbookstore'
    });

    connection.query(sqlQry, function(error, results, fields) {
        if (error)
            res.json(error);
        else
            res.json(results);
        connection.end();
        //console.log('executou!');
    });
}

exports.get = (req, res) => {
    execSQLQuery('SELECT * FROM customer', res);
};


exports.getById = (req, res) => {
    let filter = '';
    if (req.params.id) filter = ' WHERE email=' + req.params.id;
    execSQLQuery('SELECT * FROM customer' + filter, res);
};

exports.getByEmail = (req, res) => {
    let filter = '';
    if (req.params.id) filter = ' WHERE email="' + req.params.id+'"';
    execSQLQuery('SELECT * FROM customer' + filter, res);
};



exports.post = (req, res, next) => {
    const fname = req.body.fname.substring(0, 20);
    const lname = req.body.lname.substring(0, 20);
    const email = req.body.email.substring(0, 50);
    const street = req.body.street.substring(0, 25);
    const city = req.body.city.substring(0, 30);
    const state = req.body.state.substring(0, 2);
    const zip = req.body.zip.substring(0, 9);
    execSQLQuery(`INSERT INTO customer(fname, lname, email, street, city, state, zip) VALUES('${fname}','${lname}', '${email}','${street}', '${city}','${state}', '${zip}')`, res);
};


exports.patch = (req, res, next) => {
    const fname = req.body.fname.substring(0, 20);
    const lname = req.body.lname.substring(0, 20);
    const email = req.body.email.substring(0, 50);
    const street = req.body.street.substring(0, 25);
    const city = req.body.city.substring(0, 30);
    const state = req.body.state.substring(0, 2);
    const zip = req.body.zip.substring(0, 9);
    execSQLQuery(`UPDATE customer SET fname = '${fname}', lname = '${lname}', email = '${email}', street = '${street}', city = '${city}', state = '${state}', zip = '${zip}' WHERE custID = ${parseInt(req.params.id)}`, res);

};

exports.delete = (req, res, next) => {
    execSQLQuery('DELETE FROM customer WHERE custID=' + parseInt(req.params.id), res);
};