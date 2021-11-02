const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const htttpRequest =async (objectUrls) => {//retornara una promesa
    let objToanAlice=[...objectUrls];
    // return new Promise ((resolve, reject)=>{
        
        return await Promise.all(objToanAlice.map( async (objectToAnalice) => {
           return await fetch(objectToAnalice.Url)
            .then( (response) =>{
                objectToAnalice.Status=response.status;
                objectToAnalice.StatusText=response.statusText;
                return objectToAnalice
            })
            .catch(()=>{
                // console.log(error)
                objectToAnalice.Status=400;
                objectToAnalice.StatusText='Not found';
                
                return objectToAnalice
            })
        
        })
        )
    
       
    
 }


exports.htttpRequest = htttpRequest;