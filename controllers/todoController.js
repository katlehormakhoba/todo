const express = require('express');
const router = express.Router();

const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "todo"
});


//check connection status
con.connect((err) => {
    if(err){
        console.log('connection to MySql failed');
        return;
    }
    console.log('connected to MySql successfully');
    return;
})


//create user
router.post('/add',(req, res) => {
    
   
    let list = req.body.list;
    
    const sql  = 'INSERT INTO list SET ?';
    let sql = "INSERT INTO TODO (list) VALUES ?";

    con.query(sql, [list], (err, result) => {
        if(err){
            console.log('we have an error');
            throw err;
        }else{
            console.log(result);
            res.send('list added');
        }
    });
});

module.exports = router;