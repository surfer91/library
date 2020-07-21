const express = require('express');
const bookRouter=express.Router();


const books=[{title:'War and Peace', genre:'Historic', author:'Mickiewicz', read:false},
{title:'The time machine', genre:'Science', author:'Well', read:true}];


bookRouter.route('/').get((req, res) => {
  res.render('bookListView', {nav:[{link:'/books',title:'Books'},{link:'/authors',title:'Author'}],title:'Library',books});})

  
bookRouter.route('/:id').get((req, res) => {
   const {id}= req.params;
 res.render('bookView', {nav:[{link:'/books',title:'Books'},{link:'/authors',title:'Author'}],title:'Library',book:books[id]});})

  module.exports=bookRouter;