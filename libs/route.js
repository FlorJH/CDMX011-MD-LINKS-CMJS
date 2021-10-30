const path=require('path');

// let rute;
 const absolutePath=(pathFromCli)=>{
  let rute='';
  return path.isAbsolute(pathFromCli) === true ? rute = pathFromCli : rute=path.resolve(pathFromCli);
  
}

exports.absolutePath= absolutePath;