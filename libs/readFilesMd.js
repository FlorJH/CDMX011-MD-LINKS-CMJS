const fs = require('fs');


const readFiles = async (arrayPaths) => {
    
    let content = [];
    await arrayPaths.map(element => {
        const contentFile = fs.readFileSync(element, 'utf8')
        content.push({ contentFile })
    });

    return content
}

exports.readFiles = readFiles;