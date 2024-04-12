const express = require("express")
const app= express()
const bcrypt= require("bcrypt")//importing bcrypt

app.use(express.urlencoded({extended :false}))
app.post('/register', async(req, res)=> {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,


        })
        console.log(users); //display newley registered users in the console
        res.redirect('/login')
    } catch(e){
        console.log(e)
        res.redirect("/register")

    }
})

const users =[]

app.get("/", (req, res)=> {
    res.send("index.ejs")
})
app.get('/login', (req, res)=> res.render("login.ejs"))
app.get('/register', (req, res)=> res.render("register.ejs"))



app.listen(3000)