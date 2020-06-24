//-----------midle ware
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//-----------------
var express = require('express');
let todoController = require('./controllers/todoController');

var app = express();

//SET UP TEMPLATE ENGINE
app.set('view engine', 'ejs');

//STATIC FILES
app.use(bodyParser.json());
app.use(express.static('./public'));
app.use('/', todoController);


//FIRE CONTROLLERS
//todoController


//------------------------------Mongo Conection
/*var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://katleho:<kat123>@todo-ls9ky.mongodb.net/test');
var todoSchema = new mongoose.Schema({
    item:String
});


var Todo = mongoose.model('Todo', todoSchema);

var itemOne = Todo({item: 'buy flowers'}).save(function(err){
    if(err) throw err;
    console.log('item saved');
});*/
//-----------------------------------------------------


//-----------------------------MySQL Connection
// var mysql = require('mysql');

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "todo"
// });
//                   //---------------ROUTES----------------

// con.connect(function(err){
//     if(err) throw err;
//     console.log('Connection Successfull');
//     //SELECT ALL AND DISPLAY DATA---------
//     con.query("SELECT * FROM list", function (err, result, fields) {
//         if (err) throw err;

//         //DISPLAY DATA NOTE WE USE RENDER
        
//         app.get('/todo', function(req,res){

//             console.log(req.query.item);
//             res.render('todo', {todos: result});
        
//         });
//         console.log(result);
//       });
//     //END------------------- 

// });

//------------------------------------------END OF MySQL Connection



//DATABASE

// var data =[
//     {item: 'get milk'},
//     {item: 'walk dog'},
//     {item: 'eat food'}
// ];

//ROUTES---------------------


// app.post('/todo', urlencodedParser, function(req,res){
//     console.log(req.body);

//     res.render('todo', {}) ;  
// });

// app.delete('/todo/:item', function(req,res){
//     data = data.filter(function(todo){
//         return todo.item.replace(/ /g, '-') !== req.params.item;
//     });
//     res.json(data);
// });

//----------------------------------





//LISTEN TO PORT
app.listen(3000);
console.log('You are listening to PORT:3000');