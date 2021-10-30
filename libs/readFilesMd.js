const fs = require('fs');
const chalk = require('chalk') ;


const readFiles = async (arrayPaths) => {
    if(arrayPaths.length != 0){
    let content = [];
    arrayPaths.map(filePath => {
        const contentFile = fs.readFileSync(filePath, 'utf8')
        content.push({ contentFile, filePath })
    });

    return content
}
else{
    throw chalk.red.bold('\n\n The path doesn\'t exist or doesn\'t contain md files');
}
}

exports.readFiles = readFiles;