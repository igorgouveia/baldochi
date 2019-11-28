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
    execSQLQuery('SELECT * FROM bookauthorsbooks', res);
};


exports.getById = (req, res) => {
    let filter = '';
    if (req.params.id) filter = ` WHERE AuthorID = '${parseInt(req.params.id)}' OR b.ISBN = '${req.params.id}'`;
    execSQLQuery("SELECT bd.title, bd.ISBN, bd.price, concat(SUBSTRING(bd.description, 1, 200),'...') as description FROM bookauthorsbooks b inner join bookdescriptions bd on bd.ISBN = b.ISBN" + filter, res);
};



exports.post = (req, res, next) => {
    const ISBN = req.body.ISBN.substring(0, 20);
    const AuthorID = req.body.AuthorID.substring(0, 20);
    execSQLQuery(`INSERT INTO bookauthorsbooks(ISBN, AuthorID) VALUES('${ISBN}','${AuthorID}')`, res);
};


exports.patch = (req, res, next) => {
    const oldISBN = req.body.oldISBN.substring(0, 20);
    const oldAuthorID = req.body.oldAuthorID.substring(0, 20);
    const newISBN = req.body.newISBN.substring(0, 20);
    const newAuthorID = req.body.newAuthorID.substring(0, 20);
    execSQLQuery(`UPDATE bookauthorsbooks SET ISBN = '${newISBN}', AuthorID = '${parseInt(newAuthorID)}' WHERE AuthorID = '${parseInt(oldAuthorID)}' AND ISBN = '${oldISBN}'`, res);

};

exports.delete = (req, res, next) => {
    const ISBN = req.body.ISBN.substring(0, 20);
    const AuthorID = req.body.AuthorID.substring(0, 20);
    execSQLQuery(`DELETE FROM bookauthorsbooks WHERE AuthorID= '${AuthorID}' AND ISBN = '${ISBN}'`, res);
};