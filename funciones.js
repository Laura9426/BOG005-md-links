const fs = require('fs');
const path = require('path');
const lineReader = require('line-reader');
const axios = require('axios');

// convertir ruta a absoluta
const convertirRuta = (ruta) => {
    let rutaAbsoluta = ruta
    if (!ruta.isAbsolute) {
        rutaAbsoluta = path.resolve(ruta)
    }
    return rutaAbsoluta;
};

const verificarLinks = (enlaces) => {
    enlaces.forEach(url => {
        axios.get(url)
          .then((data) => {
            console.log(url, data.status);
          })
          .catch((error) => {
            console.log(url, 'fallo');
          })
      });
}

const obtenerLinks = (ruta) => {
    return new Promise((resolve, reject) => {

        let linksVerificacion = [];
        let contador = 0;
        ruta.forEach(archivos => {
            fs.readFile(archivos, 'utf8', (err, linea) => {
                let palabras = linea.replaceAll('\r', ' ').replaceAll('\n', '').split(' ');
                palabras = palabras.filter((item) => {
                    return item.includes('http');
                })
                linksVerificacion = linksVerificacion.concat(palabras);
                contador++;
                
                if(contador == ruta.length){
                    resolve(linksVerificacion);
                }
            });
        });
    });
};

/* const obtenerLinks = (ruta) => {
    return new Promise((resolve, reject) => {

        let linksVerificacion = [];
        let contador = 0;
        ruta.forEach(archivos => {

            lineReader.eachLine(archivos, (linea) => {
                let palabras = linea.split(' ');

                palabras.forEach(encontrarLinks => {
                    if (encontrarLinks.substring(0, 4) == 'http') {
                        linksVerificacion.push(encontrarLinks);
                        console.log(linksVerificacion)
                    }
                });
                contador++;
                
                if(contador == ruta.length){
                    resolve(linksVerificacion);
                }
            });
            
        });
        resolve(linksVerificacion);
    });
}; */

const recorrerDirectorios = (ruta, realizado) => {
    let archivosMD = [];
    let carpeta = fs.readdirSync(ruta);
    let contenido = carpeta.length;

    if (contenido === 0) return archivosMD;

    carpeta.forEach(archivos => {
        archivos = path.resolve(ruta, archivos);

        let doc = fs.statSync(archivos)

        if (doc.isFile()) {
            const tipoExtension = path.extname(archivos);
            if (tipoExtension == '.md') {
                archivosMD.push(archivos);
            }
            contenido--
            if (contenido == 0) realizado(null, archivosMD);

        } else {
            recorrerDirectorios(archivos, (err, resultado) => {
                archivosMD = archivosMD.concat(resultado);
                if (!--contenido) realizado(null, archivosMD);
            });
        };
    });
};


module.exports = { convertirRuta, recorrerDirectorios, obtenerLinks, verificarLinks };
