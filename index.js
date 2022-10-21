const { convertirRuta, recorrerDirectorios, obtenerLinks, verificarLinks } = require('./funciones')
const fs = require('fs');
const { url } = require('inspector');

// Recibir y guardar argumento desde posicion 3 para eso es el slice
const args = process.argv.slice(2);

const mdLinks = (ruta, opciones) => {

  const rutaAbsoluta = convertirRuta(ruta[0]);
  let archivosMD;

  try {
    const stat = fs.statSync(rutaAbsoluta);

    if (stat.isFile()) {
      archivosMD = [];
      archivosMD.push(rutaAbsoluta);
      obtenerLinks(archivosMD)
        .then((enlaces) => {
          verificarLinks(enlaces)
        })

    } else

      if (stat.isDirectory()) {

        recorrerDirectorios(rutaAbsoluta, (error, data) => {
          if (error) {
            throw error;
          }
          archivosMD = data;
          obtenerLinks(archivosMD)
            .then((enlaces) => {
             verificarLinks(enlaces)
            })
        });
      }
  } catch (error) {
    console.log(`Directorio o archivo NO existe ${error.message}`)
  }
}

mdLinks(args);
