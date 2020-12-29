let fs = require('fs');
const colors = require('colors');

let data = '';


let listTable = async(base, limit) => {

    console.log('-----------------------------'.blue);
    console.log(`La tabla del ${base} al ${limit}`.yellow);
    console.log('-----------------------------'.blue);

    for (let i = 1; i <= limit; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }
    return data;
}

let createFile = async(base, limite) => {
    if (!Number(base)) {
        return `La base "${base}" no es un numero!`
    }

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`Tablas/Tabla del ${base} al ${limite}.txt`, data, () => {
        //callback after creating the file goes here.
    })
    return message = `Tabla del ${base} al ${limite}.txt`;
}


module.exports = {
    createFile,
    listTable
}