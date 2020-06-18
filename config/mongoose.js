// require lib
const mongoose = require("mongoose");

// connect to database
mongoose.connect("mongodb://localhost/contact_list_db",{useNewUrlParser: true});

//getting the connection 
const db = mongoose.connection ;

// checking error
db.on('error', console.error.bind(console , 'connection error'));

// up and running then print the message
db.once('open',function(){
    console.log("successfully opened the connection. ");
});