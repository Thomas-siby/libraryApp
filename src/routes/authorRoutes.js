const express = require("express");
const authorsRouter = express.Router();
function router(nav){
var authors = [
    {
        author : "Jane Austen ",
        book : "Pride and Prejudice",
        genre : "Romance",
        img : "pride-A.jpg",
        about : "Jane Austen was an English novelist known primarily for her six major novels, which interpret, critique and comment upon the British landed gentry at the end of the 18th century. Austen's plots often explore the dependence of women on marriage in the pursuit of favourable social standing and economic security."
    },
    {
        author : "J. R. R. Tolkien",
        book : "The Lord of the Rings",
        genre : "Fanstasy Fiction",
        img : "lord-A.jpg",
        about : "John Ronald Reuel Tolkien CBE FRSL was an English writer, poet, philologist, and academic, best known as the author of the high fantasy works The Hobbit and The Lord of the Rings."
    },
    {
        author : "Herman Melville",
        book :"Moby Dick",
        genre : "Fantasy Fiction",
        img : "moby-A.jpg",
        about : "Herman Melville was an American novelist, short story writer, and poet of the American Renaissance period. Among his best-known works are Moby-Dick, Typee, a romanticized account of his experiences in Polynesia, and Billy Budd, Sailor, a posthumously published novella."
    }
]
authorsRouter.get('/',function(req,res){
    res.render("authors",
    {
        nav,
        title:'Library',
        authors
    }
    );
});
authorsRouter.get('/:id',function(req,res){
    const id = req.params.id
    res.render('author',{
    nav,
    title:'Library',
    author: authors[id]
    });

});
return authorsRouter;
}
module.exports = router;