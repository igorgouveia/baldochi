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
    execSQLQuery('SELECT * FROM bookorders', res);
};


exports.getById = (req, res) => {
    let filter = '';
    if (req.params.id) filter = ` WHERE custID = '${parseInt(req.params.id)}' order by orderID desc`;
    execSQLQuery('SELECT * FROM bookorders' + filter, res);
};



exports.post = (req, res, next) => {
    const custID = req.body.custID;
    const orderdate = req.body.orderdate;
    execSQLQuery(`INSERT INTO bookorders(custID, orderdate) VALUES('${custID}','${orderdate}')`, res);
};


exports.patch = (req, res, next) => {
    const custID = req.body.custID.substring(0, 20);
    const orderdate = req.body.orderdate.substring(0, 20);
    execSQLQuery(`UPDATE bookorders SET custID = '${custID}', orderdate = '${orderdate}' WHERE orderID = ${parseInt(req.params.id)}`, res);

};

exports.delete = (req, res, next) => {
    execSQLQuery(`DELETE FROM bookorders WHERE orderID = '${parseInt(req.params.id)}'`, res);
};