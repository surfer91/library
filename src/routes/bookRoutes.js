const express = require('express');
const bookRouter=express.Router();
function router(nav){
const books=[{title:'War and Peace', genre:'Historic', author:'Mickiewicz', read:false},
{title:'The time machine', genre:'Science', author:'Well', read:true}];


bookRouter.route('/').get((req, res) => {
  res.render('bookListView', {nav, title:'Library',books});})

  
bookRouter.route('/:id').get((req, res) => {
   const {id}= req.params;
 res.render('bookView', {nav,title:'Library',book:books[id]});})

return  bookRouter
}




  module.exports=router;