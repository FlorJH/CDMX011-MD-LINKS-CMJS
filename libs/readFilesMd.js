const fs = require('fs');
const chalk = require('chalk') ;


const readFiles =  (arrayPaths) => {
    if(arrayPaths.length != 0){
    let content = [];
    arrayPaths.map(filePath => {
        const contentFile = fs.readFileSync(filePath, 'utf8')
        content.push({ contentFile, filePath })
    });
// console.log(content)
    return content
}
else{
    // throw chalk.red.bold('\n\n The path is wrong or doesn\'t contain md files');
}
}

exports.readFiles = readFiles;