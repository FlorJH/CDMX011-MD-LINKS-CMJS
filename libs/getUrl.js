

const findUrl=()=>{
    let urlToAnalise = [];
    let marckdownUlr = /\[(.*)\]\((https?)\:\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?\)/gi;
    let urlTittle = /\[(.*)\]/gi;//obtener title 
    let urlPath = /(https?)\:\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gi;//obtener path


    

    let getUrl = content.match(marckdownUlr);

    if (getUrl !== null) {
        getUrl.forEach(elementos => {
            let urlObject = {};
            urlObject['Title'] = elementos.match(urlTittle).toString();
            urlObject['Url'] = elementos.match(urlPath).toString();
            urlObject['Path'] = pathFromCli;
            urlObject['Status']='';
            urlObject['StatusText']='';
            urlToAnalise.push(urlObject);
            
        })}

}