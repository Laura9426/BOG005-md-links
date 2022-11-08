const { convertirRuta, recorrerDirectorios, obtenerLinks } = require('./obtenerLinks');
const fs = require('fs');
const chalk = require('chalk');

const mdLinks = (ruta, opciones = {}) => {
  return new Promise((resolve, reject) => {

    const rutaAbsoluta = convertirRuta(ruta);

    try {
      const stat = fs.statSync(rutaAbsoluta);

      if (stat.isFile()) {

        obtenerLinks(rutaAbsoluta).then((enlaces) => {

          resolve(enlaces)
        });

      } else if (stat.isDirectory()) {

        recorrerDirectorios(rutaAbsoluta, (error, archivosMD) => {

          if (error) throw error;

          obtenerLinks(archivosMD).then((enlaces) => {
            resolve(enlaces)
          });

        });
      }
    } catch (error) {
      console.log(`${chalk.bold.red('Directorio o archivo NO existe')} ${chalk.inverse.gray(` ${rutaAbsoluta} `)} ${error.message}`);
    };
  });
};

module.exports = { mdLinks };
