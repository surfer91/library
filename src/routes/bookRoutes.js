const express = require('express');
const bookRouter=express.Router();


const books=[{title:'War and Peace', genre:'Historic', author:'Mickiewicz', read:false},
{title:'The time machine', genre:'Science', author:'Well', read:true}];


bookRouter.route('/').get((req, res) => {
  res.render('books', {nav:[{link:'/books',title:'Books'},{link:'/authors',title:'Author'}],title:'Library',books});})

  
bookRouter.route('/single').get((req, res) => {
  res.send('hello single book');})

  module.exports=bookRouter;