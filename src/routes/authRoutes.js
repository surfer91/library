const express = require('express');
const authRouter=express.Router();


function router(){
authRouter.route('/signUp')
.post((req,res)=>{
req.login(req.body,()=>{
    res.redirect('/auth/profile')
})



});
authRouter.route('/profile').get((req,res)=>{res.json(req.user)})
return authRouter;
};

module.exports= router;