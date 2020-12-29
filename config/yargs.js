const propiedades = {
    base: {
        alias: 'b',
        demand: true
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', propiedades)
    .command('crear', 'Crea em un archivo la tabla de multiplicar', propiedades)
    .help()
    .argv;

module.exports = {
    argv
}