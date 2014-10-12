var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");

mongoose.connect('mongodb://localhost/simple');

var personScheme = {
    firstName:String,
    lastName:String,
    email:String
}

var Person = mongoose.model('Person', personScheme, 'people')

var app = express();
app.use(cors());

app.get('/people', function (req, res) {
    Person.find().select("firstName").exec(function(err, doc) {
        res.send(doc)
    })
})

app.get('/people/:id', function (req, res) {
    Person.findById(req.params.id, function(err, doc) {
        res.send(doc)
    })
})

app.listen(3000);