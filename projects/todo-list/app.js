const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const https = require("https");

var newItems = [];

app.use(express.static("public"));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) =>{
  var today = new Date();
  var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  var day = today.toLocaleDateString('en-us', options);
  res.render("list", {currentDate: day, newItems: newItems});
});

app.post("/", (req, res) => {
var item = req.body.newItem;
  newItems.push(item);
  res.redirect("/");
})


app.listen(3000);
