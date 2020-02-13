const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const sassMiddleware = require("node-sass-middleware");

const todoRouter = require("./router/todoRouter");
const config = require("./config/config");

const app = express();

//middleware
app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}));


// app.use(sassMiddleware({
//     src: path.join(__dirname, "scss"), 
//     dest: path.join(__dirname, "public"),
//     debug: true
//  }))
// app.use(express.static(path.join(__dirname + "public")));
app.use('/public', express.static(path.join(__dirname, 'public')))
// app.use(express.static(__dirname + '/public'));


//routes
app.use(todoRouter)

//port

const port = process.env.PORT || 8080;
const options ={
    useUnifiedTopology: true,
    useNewUrlParser: true
}
mongoose.connect(config.databaseURL,options).then(()=>{
    console.log("Connected to DB and server running on port 8080")
    app.listen(port);
})