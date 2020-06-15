const express = require('express');

const path = require('path');
const port = 8000;

const app = express() ;

app.set('view engine' , 'ejs');
// app.set('views' , path.join(__dirname,'views'));
// console.log(__dirname);

app.use(express.urlencoded({extended: true}));
app.use(express.static('assets'));

// app.use(function(req,res,next){
//     req.name = "Martin";
//     console.log(req);
//     console.log("middleware 1 called "); 
//     next();
// });

// app.use(function(req,res,next){
//     console.log(req.name);
//     console.log("middleware 2 called "); 
//     next();
// });


contacts = [
    {
        name: "Prady",
        phone: "11111111111"
    },
    {
        name: "martin",
        phone: "22222222222"
    },
    {
        name: "lex",
        phone: "33333333333"
    }
];


app.get('/',function(req,res){
    // console.log(__dirname);

    return res.render('home',{
        title : 'My Contact',
        contact_list: contacts 
    
    });

});


app.post('/contact-list',function(req, res){
    console.log(req.body);
    contacts.push({
        name: req.body.name,
        phone: req.body.number
    })
    // contacts.push(req.body);
    return res.redirect('back');
});


app.get('/practice',function(req,res){
    // console.log(res);
    return res.render('practice',{
        title : 'Play with ejs'
    });
});

app.listen(port,function(error){
    if(error) {console.log(error);}
    console.log("My express server is running on ", port);
});