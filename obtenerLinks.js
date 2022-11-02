const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const { JSDOM } = require("jsdom");

const convertirRuta = (ruta) => {
    let rutaAbsoluta = ruta
    if (!ruta.isAbsolute) {
        rutaAbsoluta = path.resolve(ruta)
    }
    return rutaAbsoluta;
};

const recorrerDirectorios = (ruta, realizado) => {
    let archivosMD = [];
    let carpeta = fs.readdirSync(ruta);
    let contenido = carpeta.length;

    if (contenido === 0) return archivosMD;

    carpeta.forEach(archivos => {
        archivos = path.resolve(ruta, archivos);

        let doc = fs.statSync(archivos);

        if (doc.isFile()) {
            const tipoExtension = path.extname(archivos);

            if (tipoExtension == '.md') archivosMD.push(archivos);

            contenido--;
            if (contenido == 0) realizado(null, archivosMD);

        } else {
            recorrerDirectorios(archivos, (err, resultado) => {
                archivosMD = archivosMD.concat(resultado);
                if (!--contenido) realizado(null, archivosMD);
            });
        };
    });
};

const obtenerLinks = (links) => {
    return new Promise((resolve) => {
        if (typeof links == 'string') {
            leerArchivo(links).then((resultado) => {
                resolve(resultado);
            });
        } else {
            let promesas = [];
            links.forEach((item) => {
                promesas.push(leerArchivo(item))
            });
            Promise.all(promesas).then(resultado => {
                resolve(resultado.flat());
            });
        };
    });
};

const leerArchivo = (ruta) => {
    return new Promise((resolve, reject) => {

        fs.readFile(ruta, 'utf8', (err, data) => {

            const md = new MarkdownIt();
            const htmlMD = md.render(data);

            const dom = new JSDOM(htmlMD);
            const nodeList = dom.window.document.querySelectorAll('a');

            let enlaces = [];

            nodeList.forEach((link) => {

                if (link.href.indexOf('http') != -1) {
                    enlaces.push({
                        url: link.href,
                        texto: link.textContent,
                        carpeta: ruta,
                    });
                };
            });
            resolve(enlaces);
        });
    });
};


module.exports = { convertirRuta, recorrerDirectorios, obtenerLinks };
