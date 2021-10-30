const fs= require('fs');
const chalk = require('chalk') ;
const figlet = require('figlet') ;
const convertPath=require('./libs/route');


let pathConvertida=convertPath.absolutePath('index.js');//convierte la path capturada en absoluta


console.log(pathConvertida)
module.exports = () => {
  // ...
};


console.log(chalk.blue(figlet . textSync ( 'Md-Links' ,  { 
  font: 'Ghost',
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width: 100,
  whitespaceBreak : true 
} ) ));