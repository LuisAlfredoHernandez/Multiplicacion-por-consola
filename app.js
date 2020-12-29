const { createFile, listTable } = require('./multiplicar');
const { argv } = require('./config/yargs')
const colors = require('colors');

let commmand = argv._[0];

switch (commmand) {
    case 'listar':
        listTable(argv.base, argv.limite)
            .then(result => console.log(result.green))
            .catch(err => console.log(err.red));
        break;
    case 'crear':
        createFile(argv.base, argv.limite)
            .then(result => console.log(`Archivo creado: ${result.green}`))
            .catch(err => console.log(err.red));
        break;
    default:
        console.log('Comando desconocido!'.yellow);
}

// throw the variable through the terminal as --base='value'
// let base = process.argv[2].split('=')[1];