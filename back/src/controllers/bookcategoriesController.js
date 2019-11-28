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
    execSQLQuery('SELECT * FROM bookcategories', res);
};


exports.getById = (req, res) => {
    let filter = '';
    if (req.params.id) filter = ` WHERE CategoryID = '${parseInt(req.params.id)}'`;
    execSQLQuery('SELECT * FROM bookcategories' + filter, res);
};



exports.post = (req, res, next) => {
    const CategoryName = req.body.CategoryName.substring(0, 20);
    execSQLQuery(`INSERT INTO bookcategories(CategoryName) VALUES('${CategoryName}')`, res);
};


exports.patch = (req, res, next) => {
    const CategoryName = req.body.CategoryName.substring(0, 20);
    execSQLQuery(`UPDATE bookcategories SET CategoryName = '${CategoryName}' WHERE CategoryID = '${parseInt(req.params.id)}'`, res);

};

exports.delete = (req, res, next) => {
    execSQLQuery(`DELETE FROM bookcategories WHERE CategoryID= '${parseInt(req.params.id)}'`, res);
};