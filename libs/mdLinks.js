const convertPath=require('./route');
const chalk = require('chalk') ;
const filterMd = require('./mdExtractionFiles.js');
const readContetn= require('./readFilesMd.js');
const getUrls= require("./getUrl.js");
const request=require('./httpRequest.js');



const mdLinksAsync =async (pathFromCli) => {
 if(pathFromCli){
    const convertedRoute=convertPath.absolutePath(pathFromCli);//convierte la path capturada en absoluta
    let arrayPathsMd = filterMd.tofilterMd(convertedRoute)//para filtrar solo files.md
    let contentFiles= readContetn.readFiles(arrayPathsMd)//arreglo de contenidos string//intentar convertir a promesa
    let getUrlToAnalice=getUrls.findUrl(contentFiles)//filtra info por contenido intentar convertir a promesa
    let httpRequest=request.htttpRequest(getUrlToAnalice)
    .then(data=>data)
    .catch();
   
     return httpRequest


}else{
   throw chalk.red.bold('\n\n A path is required');
  }
  
  };

  
exports.mdLinksAsync= mdLinksAsync;