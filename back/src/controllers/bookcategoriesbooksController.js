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
    execSQLQuery('SELECT * FROM bookcategoriesbooks', res);
};


exports.getById = (req, res) => {
    let filter = '';
    if (req.params.id) filter = ` WHERE CategoryID = '${parseInt(req.params.id)}' OR b.ISBN = '${req.params.id}'`;
    execSQLQuery("SELECT  bd.title, bd.ISBN, bd.price, concat(SUBSTRING(bd.description, 1, 200),'...') as description FROM bookcategoriesbooks b inner join bookdescriptions bd on bd.ISBN = b.ISBN" + filter, res);
};



exports.post = (req, res, next) => {
    const ISBN = req.body.ISBN.substring(0, 20);
    const CategoryID = req.body.CategoryID.substring(0, 4);
    execSQLQuery(`INSERT INTO bookcategoriesbooks(ISBN, CategoryID) VALUES('${ISBN}','${CategoryID}')`, res);
};


exports.patch = (req, res, next) => {
    const oldISBN = req.body.oldISBN.substring(0, 20);
    const oldCategoryID = req.body.oldCategoryID.substring(0, 4);
    const newISBN = req.body.newISBN.substring(0, 20);
    const newCategoryID = req.body.newCategoryID.substring(0, 4);
    execSQLQuery(`UPDATE bookcategoriesbooks SET ISBN = '${newISBN}', CategoryID = '${parseInt(newCategoryID)}' WHERE CategoryID = '${parseInt(oldCategoryID)}' AND ISBN = '${oldISBN}'`, res);

};

exports.delete = (req, res, next) => {
    const ISBN = req.body.ISBN.substring(0, 20);
    const CategoryID = req.body.CategoryID.substring(0, 4);
    execSQLQuery(`DELETE FROM bookcategoriesbooks WHERE CategoryID= '${parseInt(CategoryID)}' AND ISBN = '${ISBN}'`, res);
};