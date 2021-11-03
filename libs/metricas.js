const chalk = require('chalk');
const objReturned = [];


const validateFalse = (data) => {
    // console.log(chalk.white.bgGray.bold('Analyzed path: '));
    data.map(propiedad => {
        let obj = {}
        obj.Title = propiedad.Title;
        obj.Url = propiedad.Url;
        obj.Path = propiedad.Path;
        objReturned.push(obj)
    })
    return objReturned
}

const statusOption = (data) => {

    const arrayUniqueByKey = [...new Map(data.map(item =>
        [item.Url, item])).values()];
    let tamaño = data.length;
    // console.log(data.length)
    let obj = {}
    obj.TotalUrls = tamaño,
        obj.UniquePaths = arrayUniqueByKey.length,
        obj.RepeatedPaths = data.length - arrayUniqueByKey.length

    return obj
}


const validateAndStatus = (data) => {

    const broken = data.filter(fail => fail.StatusText != 'OK').length;

    const arrayUniqueByKey = [...new Map(data.map(item =>
        [item.Url, item]))];

    let obj = {}
    obj.TotalUrls = data.length,
        obj.UniquePaths = arrayUniqueByKey.length,
        obj.BrokenPaths = broken

    return obj
}



exports.validateFalse = validateFalse;
exports.statusOption = statusOption;
exports.validateAndStatus = validateAndStatus;