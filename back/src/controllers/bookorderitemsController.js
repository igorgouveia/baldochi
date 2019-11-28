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
    execSQLQuery('SELECT * FROM bookorderitems', res);
};


exports.getById = (req, res) => {
    let filter = '';
    if (req.params.id) filter = ` WHERE orderID = '${parseInt(req.params.id)}' OR ISBN = '${req.params.id}'`;
    execSQLQuery('SELECT * FROM bookorderitems' + filter, res);
};



exports.post = (req, res, next) => {
    const ISBN = req.body.ISBN;
    const orderID = req.body.orderID;
    const qty = req.body.qty;
    const price = req.body.price;
    execSQLQuery(`INSERT INTO bookorderitems(orderID, ISBN, qty, price) VALUES('${orderID}', '${ISBN}', '${qty}', '${price}')`, res);
};


exports.patch = (req, res, next) => {
    const oldISBN = req.body.oldISBN.substring(0, 20);
    const oldorderID = req.body.oldorderID.substring(0, 4);
    const newISBN = req.body.newISBN.substring(0, 20);
    const neworderID = req.body.neworderID.substring(0, 4);
    const qty = req.body.qty.substring(0, 4);
    const price = req.body.price.substring(0, 9);
    execSQLQuery(`UPDATE bookorderitems SET ISBN = '${newISBN}', orderID = '${parseInt(neworderID)}', qty = '${qty}', price = '${price}' WHERE orderID = '${parseInt(oldorderID)}' AND ISBN = '${oldISBN}'`, res);

};

exports.delete = (req, res, next) => {
    const ISBN = req.body.ISBN.substring(0, 20);
    const orderID = req.body.orderID.substring(0, 4);
    execSQLQuery(`DELETE FROM bookorderitems WHERE orderID= '${parseInt(orderID)}' AND ISBN = '${ISBN}'`, res);
};