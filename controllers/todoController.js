const express = require('express');
const router = express.Router();

//-----------midle ware
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });


const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "todo"
});


//check connection status
con.connect((err) => {
    if (err) {
        console.log('connection to MySql failed');
        return;
    }
    console.log('connected to MySql successfully');
    return;
})

//GETTING FROM MY DB
router.get('/todo', (req, res) => {

    let sql = "SELECT * FROM list";

    con.query(sql, (err, result) => {
        if (err) {
            console.log('we have an error');
            throw err;
        } else {

            //console.log(result);
            res.render('todo', { todos: result });
        }
    });

});

// ADDING TO MY DB
router.post('/todo', urlencodedParser, function(req, res){

    let add = req.body.task;
    //console.log(req.body.task);

        let sqlAdd = `INSERT INTO list (task) VALUES ('${add}')`;
        con.query(sqlAdd, function(err,result){
            if(err) throw err;
            console.log("1 record inserted, ID: " + result.insertId);
           // res.render('todo');  
        });
       // console.log('we are in within');
       res.redirect('/todo');

});


// DELETING TO MY DB
router.get('/todo/:item', function(req,res){
    
    let del = req.params.item;
    let sqlDel = `DELETE FROM list WHERE task = '${del}'`;
    //console.log(del);
    con.query(sqlDel, function(err,result){
        if(err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
    res.redirect('/todo');
});









module.exports = router;