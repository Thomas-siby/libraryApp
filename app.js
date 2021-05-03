const express = require("express");
const app = new express();

const port = process.env.PORT||6969;
const nav =  [
    {
        link :'/books',name :'Books'
    },
    {
        link :'/authors',name:'Authors'
    },
     {
        link : "/signup",
        name : "SignUp/Login"
    }
    
    

];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const loginRouter = require("./src/routes/loginRoutes")(nav);
const signupRouter = require("./src/routes/signupRoutes")(nav);

app.use(express.static(__dirname+ '/public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);

app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
    }
    );
});



app.listen(port,()=>{console.log("server ready at" + port )});