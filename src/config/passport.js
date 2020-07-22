const passport=require('passport');



module.exports=function passportConfig(app){
    app.use(passport.initialize());
    app.use(passport.session());
    passport.serializeUser((user,done)=>{
done(null,user.id);})
passport.deserializeUser((userId,done)=>{
    done(null,user);

    });

require('./strategies/local.strategy');

}