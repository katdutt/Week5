let express = require('express');
let bodyParser=require('body-parser');
let serverl= express(); 
let db = [];

serverl.use(bodyParser.urlencoded({
    extended: false
}));

serverl.use(bodyParser.json());

serverl.engine('html',require('ejs').renderFile); 
serverl.set('view engine','html'); 

serverl.use(express.static('public/images'));
serverl.use(express.static('public/styles'));


serverl.get("/", (_,res)=> {
    res.render('index.html');

});

serverl.get('/addTasks', (_,res)=> {
    res.render('addNewTask.html');

});

serverl.get('/allTasks', (_,res)=> {
    res.render('allTasks.html', {db:db});

});

serverl.post('/newTask', (req,res) => {
    db.push(req.body); 
    console.log(req.push);
    res.render('/views/addNewTask.html',{db:db}); //try remove views/?
}); 

serverl.listen(8080);

//Create account using google cloud platform and redeem coupon

