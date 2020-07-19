const express=require('express');
const debug=require('debug')('app');
const morgan=require('morgan');
const path=require('path')

const app=express();

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname,'public')));
app.use('/css', express.static(path.join(__dirname,'node_module/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname,'node_module/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname,'node_module/jquery/dist')));


app.get('/',function(req,res){
res.sendFile(path.join(__dirname,'views/index.html'));
})

app.listen(3000, function(){
    debug('listenig on port 3000');
});