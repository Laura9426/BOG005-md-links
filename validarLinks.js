const axios = require('axios');
const chalk = require('chalk');

const statusLink = (link) => {
    return new Promise((resolve, reject) => {
        axios.get(link)
            .then((res) => {
                resolve({
                    status: res.status,
                    ok: 'OK',
                });
            })
            .catch((error) => {
                resolve({
                    status: null,
                    ok: '❌',
                });
            })
    })
}

const verificarLinks = (enlaces) => {
   
    return new Promise((resolve, reject) => {
        let promesas = [];
        enlaces.forEach(data => {
            promesas.push(statusLink(data.url));
        });
        Promise.all(promesas).then(resultado => {
            const status = resultado.flat();
            const nuevosEnlaces = enlaces.map((enlace, i) => {
                return Object.assign(enlace, status[i]);
            });
            resolve(nuevosEnlaces);
        });
    });
};

const statsLink = (enlaces) => {
    
    return new Promise((resolve, reject) => {
        let arrayLinks = [];

        enlaces.forEach((link) => {
            arrayLinks.push(link.url)
        })
        let stats = {
            Total: arrayLinks.length,
            Unique: new Set(arrayLinks.map((link) => link)).size
        }
        resolve(stats)
    })
}

const statsValidate = (enlaces) => {
    return new Promise((resolve, reject) => {

        verificarLinks(enlaces)
            .then((nuevosEnlaces) => {
                let arrayLinks = [];

                nuevosEnlaces.forEach((link) => {
                    arrayLinks.push(link.url)
                })
                let stats = {
                    Total: arrayLinks.length,
                    Unique: new Set(arrayLinks.map((link) => link)).size,
                    Broken: nuevosEnlaces.filter(link => link.ok == '❌').length
                }
                resolve(stats)
            })
    })
}

const imprimir = (enlaces, opciones) => {
    const IsValidate = opciones.validate;
    const IsStats = opciones.stats;

    if (!IsValidate & !IsStats) console.log(`${chalk.italic.green('Por favor ingrese algun comando correspondiente:')} ${chalk.inverse.bold.green(' --validate || --stats || --validate --stats ')}`);
    if (IsValidate & !IsStats) verificarLinks(enlaces).then((nuevoEnlace) => console.table(nuevoEnlace))
    
    if (IsStats & !IsValidate) statsLink(enlaces).then((stats) => console.table(stats));
    
    if (IsValidate & IsStats) statsValidate(enlaces).then((stats) => console.table(stats));

}

module.exports = { imprimir, statsValidate, statsLink, verificarLinks, statusLink };