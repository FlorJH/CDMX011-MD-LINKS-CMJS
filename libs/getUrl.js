const fs = require('fs');
const { get } = require('http');

const findUrl= (contentFiles, pathFile)=>{
    let urlToAnalise = [];
    let marckdownUlr = /\[(.*)\]\((https?)\:\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?\)/gi;
    let urlTittle = /\[(.*)\]/gi;//obtener title
    let urlPath = /(https?)\:\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gi;//obtener path
    let getUrl=[] ;
    let arrayFilterUrl=[];

    contentFiles.forEach(arrayValues=>{
        // console.log(arrayValues)
        let obj={}
        obj['UrlInfo']=arrayValues.contentFile.match(marckdownUlr);
        obj['pathFile']=arrayValues.filePath;
        //  getUrl.push(arrayValues.contentFile.match(marckdownUlr));
        getUrl.push(obj)
      })

// console.log(getUrl)
    getUrl.forEach(arr=>{
        
        if (arr.UrlInfo !== null) {
       
            arr.UrlInfo.forEach(path=>{
        let urlObject = {};
        urlObject['Title'] = path.match(urlTittle).toString();
        urlObject['Url'] = path.match(urlPath).toString();
        urlObject['Path'] = arr.pathFile;
        // console.log(urlObject)
        arrayFilterUrl.push(urlObject)
            })
    }
    })

       
        // getUrl.forEach(individualValues=>{
            
        //     if (individualValues.path !== null) {
            
        //     let urlObject = {};
        //     urlObject['Title'] = individualValues.match(urlTittle).toString();
        //     urlObject['Url'] = individualValues.match(urlPath).toString();
        //     urlObject['Path'] = pathFile;
        // arrayFilterUrl.push(urlObject)
    
        // }})





return arrayFilterUrl;

    // return urlToAnalise
    // return arrayFilterUrl
}

exports.findUrl= findUrl;