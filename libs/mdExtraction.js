
 const toReadContent= (pathFromCli) => {
    fs.stat(pathFromCli, (err, stats) => {
        if (err) {
          return console.log(err.message);
        }
        let filesMD = []
      
        if (stats.isFile()) {
          console.log('file')
          const pathExt = path.extname(pathFromCli);//para saber la extencion del archivo
          
          toReadFile(pathCli) 
        } else {
            
            // fs.readdir(pathFromCli, function callback(err, list) {
            //   if (err) return console.error(err)
        
              
        //  });
        }
      });



   


}