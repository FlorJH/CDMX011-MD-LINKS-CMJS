const chalk = require('chalk') ;
const figlet = require('figlet') ;
const startMdLinks=require('./libs/mdLinks.js')


const pathFromCLi=process.argv[2]

console.log(chalk.blue(figlet . textSync ( 'Md-Links' ,  { 
  font: 'Ghost',
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width: 100,
  whitespaceBreak : true 
} ) ));



//mdLinks
startMdLinks.mdLinksAsync(pathFromCLi)
.then(mdLinksData => console.log(mdLinksData))
.catch((error=>console.log('Revise la sintaxis del comando') ))

