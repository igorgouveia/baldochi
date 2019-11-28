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
    execSQLQuery("SELECT title, ISBN, price, concat(SUBSTRING(description, 1, 200),'...') as description FROM bookdescriptions", res);
};

exports.getRandom = (req, res) => {
    execSQLQuery("SELECT title, ISBN, price, concat(SUBSTRING(description, 1, 200),'...') as description FROM bookdescriptions  order by rand() limit 4", res);
};

exports.getById = (req, res) => {
    let filter = '';
    if (req.params.id) filter = ` WHERE b.ISBN= '${req.params.id}'  group by b.ISBN`;
    execSQLQuery('SELECT * FROM bookdescriptions b inner join bookauthorsbooks a on a.ISBN = b.ISBN inner join bookauthors ba on ba.AuthorID = a.AuthorID ' + filter, res);
};



exports.post = (req, res, next) => {
    const ISBN = req.body.ISBN.substring(0, 15);
    const title = req.body.title.substring(0, 100);
    const description = req.body.description.substring(0, 800);
    const price = req.body.price.substring(0, 7);
    const publisher = req.body.publisher.substring(0, 50);
    const pubdate = req.body.pubdate.substring(0, 25);
    const edition = req.body.edition.substring(0, 5);
    const pages = req.body.pages.substring(0, 5);
    execSQLQuery(`INSERT INTO bookdescriptions(ISBN, title, description, price, publisher, pubdate, edition, pages) VALUES('${ISBN}', '${title}','${description}', '${price}','${publisher}', '${pubdate}','${edition}', '${pages}')`, res);
};


exports.patch = (req, res, next) => {
    const title = req.body.title.substring(0, 20);
    const description = req.body.description.substring(0, 20);
    const price = req.body.price.substring(0, 50);
    const publisher = req.body.publisher.substring(0, 25);
    const pubdate = req.body.pubdate.substring(0, 30);
    const edition = req.body.edition.substring(0, 2);
    const pages = req.body.pages.substring(0, 9);
    execSQLQuery(`UPDATE bookdescriptions SET title = '${title}', description = '${description}', price = '${price}', publisher = '${publisher}', pubdate = '${pubdate}', edition = '${edition}', pages = '${pages}' WHERE ISBN = '${req.params.id}'`, res);

};

exports.delete = (req, res, next) => {
    execSQLQuery(`DELETE FROM bookdescriptions WHERE ISBN= '${req.params.id}'`, res);
};