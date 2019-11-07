const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
var routes=require('./router/routes.js');


//setup express app
const app = express();

//connection to db
const connectionString='mongodb+srv://wingify-project:wingify-project@wingify-project-syuva.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(connectionString)
.then( () => console.log("connected to mongodb"))
.catch( (err) => (console.log("couldn't connect to mongodb", err)) );
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(cors());

app.use('/api',routes);


//error handling middleware
app.use( (err, req,res,next)=> {
    res.status(422).send({error: err.message});
});

//listening request
var port = process.env.port || 3000;
app.listen(port, () => {
    console.log("server running");
});