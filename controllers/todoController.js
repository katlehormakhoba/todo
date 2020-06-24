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

            //console.log(result);
            res.render('todo', { todos: result });
        }
    });

});


router.post('/add', urlencodedParser, function(req, res){

    let add = req.body.task;
    //console.log(req.body.task);

        let sqlAdd = `INSERT INTO list (task) VALUES ('${add}')`;
        con.query(sqlAdd, function(err,result){
            if(err) throw err;
            console.log("1 record inserted, ID: " + result.insertId);
           // res.render('todo');  
        });
       // console.log('we are in within');
       res.redirect('/list');

})





module.exports = router;