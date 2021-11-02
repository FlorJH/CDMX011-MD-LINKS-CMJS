const path = require('path');

// let rute;
const absolutePath = (pathFromCli) => {

        return path.isAbsolute(pathFromCli) ? pathFromCli : path.resolve(pathFromCli);
}

exports.absolutePath = absolutePath;