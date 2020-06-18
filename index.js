const express = require('express');

const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const Contact = require('./model/contact');

const app = express() ;

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname,'views'));
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

    // return res.render('home',{
    //     title : 'My Contact',
    //     contact_list: contacts 
    // });
    Contact.find({},function(error , contacts){
        if(error){
            console.log("error in fetching from database ");
            return;
        }

        return res.render('home',{
            title : 'My Contact',
            contact_list: contacts 
        });
    });

});

app.get('/delete-contact/',function(req,res){
    // console.log(req.query);
    // let phone = req.query.phone;
    // for( let [i,v] of contacts.entries() ){
    //     if(v.phone == phone){
    //         console.log(i,v);
    //         contacts.splice(i , 1 );
    //     }
    // }
    // return res.redirect('/');

    // get the id 
    let id = req.query.id;

    // find contact with id and delete it from database 
    Contact.findByIdAndDelete(id , function(error){
        if(error){
            console.log("error in deleting ");
            return ;
        }
        return res.redirect('back');
    });

});

app.post('/contact-list',function(req , res) {
    // contacts.push({
    //     name: req.body.name,
    //     phone: req.body.number
    // });
    Contact.create({
        name: req.body.name,
        phone: req.body.number
    } , function(err , newContact){
        if(err){
            console.log("cant create new contact");
            return ;
        }
        console.log("**********", newContact);
        return res.redirect('back');
    });
    // return res.redirect('back');
});


app.get('/practice',function(req,res){
    return res.render('practice',{
        title : 'Play with ejs'
    });
});

app.listen(port,function(error){
    if(error) {console.log(error);}
    console.log("My express server is running on ", port);
});