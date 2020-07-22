const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const bodyParser=require('body-parser');
const passport=require('passport');
const session=require('express-session');
const nav=[{link:'/books',title:'Books'},{link:'/authors',title:'Author'}];
const app = express();
const port=process.env.PORT||3000;
const bookRouter=require('./src/routes/bookRoutes')(nav);
const authRouter=require('./src/routes/authRoutes')(nav);

require('./src/config/passport.js')(app);
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({secret:'library',resave:false,saveUninitialized:false}));



app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_module/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_module/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_module/jquery/dist')));
app.set('views','./src/views');
app.set('view engine','ejs');



  app.use('/books',bookRouter);
  app.use('/auth',authRouter);

app.get('/', (req, res) => {
  res.render('index',{nav:[{link:'/books',title:'Books'},{link:'/authors',title:'Author'}],title:'Library'});
});

app.listen(port, () => {
  debug(`listenig on port ${port}`);
});
