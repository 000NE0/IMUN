const express = require("express")
const { appendFile } = require("fs")
const mongoose = require("mongoose")
const engine = require("ejs-mate")
const path = require("path")

const app = express();
app
app.engine('ejs', engine);
 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.listen(3000, () => {
    console.log("the port is opened on 3000")
})


app.get('/', (req, res, next) => {
    res.render('./boilerplate/home')
})


app.get('/admin', (req, res, next){
    
res.sendFile(path.join(__dirname, "/public/admin.html"))

})
