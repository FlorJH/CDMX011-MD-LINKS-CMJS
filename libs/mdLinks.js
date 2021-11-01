const convertPath=require('./route');
const chalk = require('chalk') ;
const filterMd = require('./mdExtractionFiles.js');
const readContetn= require('./readFilesMd.js');
const getUrls= require("./getUrl.js");
const request=require('./httpRequest.js');
const metricas=require('./metricas.js');



const mdLinksAsync =async (pathFromCli, cliComand) => {
 if(pathFromCli){
    const convertedRoute=convertPath.absolutePath(pathFromCli);//convierte la path capturada en absoluta
    let arrayPathsMd = filterMd.tofilterMd(convertedRoute);//para filtrar solo files.md
    let contentFiles= readContetn.readFiles(arrayPathsMd);//arreglo de contenidos string//intentar convertir a promesa
    let getUrlToAnalice=getUrls.findUrl(contentFiles);//filtra info por contenido intentar convertir a promesa
    let httpRequests=request.htttpRequest(getUrlToAnalice);

    let metrica= await httpRequests.then((data)=>{
     if(cliComand.comando1=='validate:false' && cliComand.comando2== undefined){
     return  metricas.validateFalse(data);
      //  console.log('hola')
     }if(cliComand.comando1=='validate:true' && cliComand.comando2== undefined || cliComand.comando1=='--validate' && cliComand.comando2== undefined ){
        return data
     }
     if(cliComand.comando1=='--stats' && cliComand.comando2== undefined){
     return metricas.statusOption(data)
     
     }
     if(cliComand.comando1=='--stats' && cliComand.comando2== "--validate" || cliComand.comando2 =='--validate' && cliComand.comando2== "--stats"){
        return metricas.validateAndStatus(data);
     }
     else{
      return  metricas.validateFalse(data);
     }
    }).catch(error=>{
      return error}
    )
    
   
    //  return 
    // return 1
return metrica

}else{
   throw chalk.red.bold('\n\n A path is required');
  }
  
  };

  
exports.mdLinksAsync= mdLinksAsync;