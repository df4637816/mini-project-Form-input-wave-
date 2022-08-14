let express = require('express')

let app = express()

let path = require("path")

let bodyParser = require('body-parser')

let ejs = require('ejs')



app.use(express.static("public"))

app.use(bodyParser.urlencoded({extended:true}))

app.get('/index',(req,res)=>{
    res.sendFile(path.join(__dirname,"/index.html"))
})

app.get('/',(req,res)=>{
    res.send("This is Homepage")
})

app.post('/account',(req,res)=>{
    let {email,password} = req.body
     res.render("post.ejs",{email})
})




app.listen(3000,()=>{
    console.log('start sever')
})