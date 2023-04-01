const fs = require('fs')
const express = require("express")
const path = require('path')

fs.rmdir(path.join(__dirname,'.git'),{recursive : true},()=>{
    console.log("success")
})

const app = express();

app.listen(8000,()=>{
    console.log("success")
})