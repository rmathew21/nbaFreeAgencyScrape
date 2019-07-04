const express = require('express');
const mongoose = require('mongoose');
const expressHandlebars = require('express-handlebars');
const PORT = process.env.PORT || 3000;
const app = express();
const path = require('path'); 
const router = express.Router();

require("./config/routes")(router);

app.use(express.static(path.join(__dirname, "/public")));


// Handlebars
app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(express.urlencoded({
    extended: false
}));
app.use(router);

const db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(db, function(error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("mongoose connection is successful");
    }
});

app.listen(PORT, function() {
    console.log("Listening on port:" + PORT);
});
