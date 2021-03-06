const express = require("express");
const booksRouter = express.Router();
function router(nav){
    var books = [
        {
            title: 'Pride and Prejudice ',
            author: 'Jane Austen',
            genre: 'Romance',
            img: "pride-B.jpg"
        },
        {
            title: 'The Lord of the Rings',
            author: 'J. R. R. Tolkien',
            genre: 'Fantasy Fiction',
            img: "lord-B.jpg"  
        },
        {
            title: 'Moby Dick',
            author: 'Herman Melville',
            genre: 'Fantasy Fiction',
            img: "moby-B.jpg"
        }
    ]
    booksRouter.get('/',function(req,res){
        res.render("books",
        {
            nav,
            title:'Library',
            books
        }
        );
    });
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('book',{
        nav,
        title:'Library',
        book: books[id]
        });
    
    });

    return booksRouter;
}


module.exports = router;