#!/usr/bin/env node

const chalk = require('chalk') ;
const figlet = require('figlet') ;
const startMdLinks=require('./libs/mdLinks.js')


const pathFromCLi=process.argv[2];
const command={
  comando1:process.argv[3],
  comando2:process.argv[4]
}

console.log(chalk.blue(figlet . textSync ( 'Md-Links' ,  { 
  font: 'Ghost',
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width: 100,
  whitespaceBreak : true 
} ) ));



startMdLinks.mdLinksAsync(pathFromCLi, command)
.then(mdLinksData =>{

  
  console.log(mdLinksData)
} )
.catch((error=>console.log('Revise la sintaxis del comando') ))

