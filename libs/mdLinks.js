const convertPath=require('./route');
const chalk = require('chalk') ;
const filterMd = require('./mdExtractionFiles.js');
const readContetn= require('./readFilesMd.js');



const mdLinksAsync =async (pathFromCli) => {
 if(pathFromCli){
    const convertedRoute=convertPath.absolutePath(pathFromCli);//convierte la path capturada en absoluta
    let arrayPathsMd = filterMd.tofilterMd(convertedRoute)//para filtrar solo files.md

    let readFiles= readContetn.readFiles(arrayPathsMd).then(fileReading=> fileReading).catch(error=>error);
    //leerarchivo y se le pasa pathsMD
   //  console.log(readFiles)
     return readFiles


}else{
   throw chalk.red.bold('\n\n A path is required');
  }
  
  };

  
exports.mdLinksAsync= mdLinksAsync;