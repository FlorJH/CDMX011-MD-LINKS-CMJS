const convertPath=require('./route');
const chalk = require('chalk') ;
const filterMd=require('./mdExtractionFiles.js')



const mdLinksAsync =async (pathFromCli) => {
 if(pathFromCli){
    let convertedRoute=convertPath.absolutePath(pathFromCli);//convierte la path capturada en absoluta
    
    let valor= filterMd.tofilterMd(convertedRoute)
    
     return valor


}else{
   throw chalk.red.bold('\n\n A path is required');
  }
  
  };

  
exports.mdLinksAsync= mdLinksAsync;