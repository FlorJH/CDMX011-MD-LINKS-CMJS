const fs = require('fs');
const path = require('path');



let filesMD = [];
const tofilterMd = (pathFromCli) => {

  const pathExt = path.extname(pathFromCli);


  if (!pathExt) {//si es falso entonces es carpeta

    let content = fs.readdirSync(pathFromCli);
      
    content.forEach(file => {
      if (path.extname(file) == '.md' || path.extname(file) == '.markdown') {
        filesMD.push(pathFromCli + '\\' + file);//enviar path de files a array
      }
      //ingnora otras extenciones 
      if (path.extname(file).length == 0) {//se realiza este if para que se asegure que es carpeta ya que si se coloca un else podrian caes los archivos con otra extencion
        let carpeta = (pathFromCli + '\\' + file);
        tofilterMd(carpeta);
      }
    
    })

  } else {//es file

    if (pathExt == '.md' || pathExt == '.markdown') {
      filesMD.push(pathFromCli);//enviar path de files a array
    }
  }
    return filesMD
  
  
}




exports.tofilterMd = tofilterMd;
