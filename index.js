const express = require('express');
const app = express();

app.listen(3003, () => console.log("Listening on 3003"));

const multiples = require('./js/multiples.js');

app.get("/", (req, res)=>{
    res.send(multiples.print_out_numbers(5))
})