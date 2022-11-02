const { mdLinks } = require('./index.js');

const args = process.argv.slice(2);
const ruta = args[0];
const opciones = {
    validate: args.includes('--validate'),
    stats: args.includes('--stats'),
};

mdLinks(ruta, opciones);
