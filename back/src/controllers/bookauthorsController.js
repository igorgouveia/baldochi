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
    execSQLQuery('SELECT * FROM bookauthors', res);
};


exports.getById = (req, res) => {
    let filter = '';
    if (req.params.id) filter = ' WHERE AuthorID=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM bookauthors' + filter, res);
};



exports.post = (req, res, next) => {
    const nameF = req.body.nameF.substring(0, 20);
    const nameL = req.body.nameL.substring(0, 20);
    execSQLQuery(`INSERT INTO bookauthors(nameF, nameL) VALUES('${nameF}','${nameL}')`, res);
};


exports.patch = (req, res, next) => {
    const nameF = req.body.nameF.substring(0, 20);
    const nameL = req.body.nameL.substring(0, 20);
    execSQLQuery(`UPDATE bookauthors SET nameF = '${nameF}', nameL = '${nameL}' WHERE AuthorID = ${parseInt(req.params.id)}`, res);

};

exports.delete = (req, res, next) => {
    execSQLQuery('DELETE FROM bookauthors WHERE AuthorID=' + parseInt(req.params.id), res);
};