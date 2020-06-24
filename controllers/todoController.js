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

//create user
router.get('/list', (req, res) => {

    let sql = "SELECT * FROM list";

    con.query(sql, (err, result) => {
        if (err) {
            console.log('we have an error');
            throw err;
        } else {
            let add = req.query.task;
            if(add){
                let sqlAdd = `INSERT INTO list (task) VALUES ('${add}')`;
                con.query(sqlAdd, function(err,result){
                    if(err) throw err;
                    console.log("1 record inserted, ID: " + result.insertId);
                    res.render('todo');

                });
               // console.log('we are in within');
            }
            //console.log(result);
            res.render('todo', { todos: result });
        }
    });

    

    // let insert = `INSERT INTO list (task) VALUES ('get dog')`;
    // con.query(insert, function(err, result){
    //     if(err) throw err;
    //     console.log("1 record inserted, ID: " + result.insertId);
    // });

});





module.exports = router;