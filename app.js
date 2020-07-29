var express=require('express');
var todoController=require('./controllers/todoController');
var app=express();
//set up ejs
app.set('view engine','ejs');
//static files (middleware)
app.use(express.static('./public'));
//fire controller
todoController(app);
//listen to port
app.listen(3000);
console.log("You are listening to port 3000");
