"use strict";

var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var sassMiddleware = require("node-sass-middleware");

var todoRouter = require("./router/todoRouter");
var config = require("./config/config");

var app = express();

//middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// app.use(sassMiddleware({
//     src: path.join(__dirname, "scss"), 
//     dest: path.join(__dirname, "public"),
//     debug: true
//  }))
// app.use(express.static(path.join(__dirname + "public")));
app.use('/public', express.static(path.join(__dirname, 'public')));
// app.use(express.static(__dirname + '/public'));


//routes
app.use(todoRouter);

//port

var port = process.env.PORT || 8080;
var options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};
mongoose.connect(config.databaseURL, options).then(function () {
    console.log("Connected to DB and server running on port 8080");
    app.listen(port);
});