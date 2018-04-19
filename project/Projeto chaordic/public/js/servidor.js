const http = require("http");
const express = require("express");
const app = express();
var cons = require('consolidate');
app.use('__dirname/static', express.static('assets'));
app.use('/static', express.static('css'));
app.use('/static', express.static('js'));

app.get('/',function(req,res){
  res.render('index')});
  app.use(express.static(__dirname + '/static'));
 app.use('/js', 
  express.static(__dirname+'/static/js'));
  
app.engine('html', cons.swig);
app.set('view engine','html');
app.set('views',__dirname+'/views');


  
 

http.createServer(app).listen(3000, () => console.log("Servidor rodando local na porta 3000"));