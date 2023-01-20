const EXPRESS = require('express');
const MONGOOSE = require('mongoose');
const APP = EXPRESS();
const PORT = 4000;

const ROUTES_APP = require("./src/routes");

require('dotenv').config();

/*Standard function*/
function show_msg() {
    console.log(`Port ${PORT}`);
}

/*Arrow function */
const ARROW_FUNC = ()=>{console.log(`Port ${PORT} ARROW`)};

/*closure func*/
const CLOSURE_FUNC = function(){console.log(`Port ${PORT} CLOSURE`)};

APP.listen(PORT, ()=>{
    console.log(`Running on Port ${PORT}`);
});
MONGOOSE.set("strictQuery", false);
MONGOOSE.connect(process.env.STRING_CONNECTION)
    .then(()=>{
        console.log("Successful connection to mongodb cluster.")
    })
    .catch((err)=>{
        console.log("Cannot establish connection to mongodb cluster")
    });

APP.use(EXPRESS.json());
ROUTES_APP(APP);