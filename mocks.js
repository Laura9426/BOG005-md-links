const mocksConCarpeta = {
    ruta: './Documentos',
    validateTrue: [
        {
            url: 'https://es.wikipedia.org/wiki/Markdown',
            texto: 'Markdown',
            carpeta: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\carpeta-uno\\archivo.md',
            status: 200,
            ok: 'OK'
        },
        {
            url: 'https://nodejs.org/',
            texto: 'Node.js',
            carpeta: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\carpeta-uno\\archivo.md',
            ok: '❌'
        },
        {
            url: 'https://github.com/Laura9426/BOG005-social-network',
            texto: 'google',
            carpeta: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\texto.md',
            status: 200,
            ok: 'OK'
        },
        {
            url: 'https://github.com/Laura9426/BOG005-social-network',
            texto: 'google',
            carpeta: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\texto.md',
            status: 200,
            ok: 'OK'
        }
    ],

    statsTrue: { Total: 5, Unique: 4 },
    statsAndValidate: { Total: 5, Unique: 4, Broken: 1 },
}

const mocksConvertirRuta = {
    rutaCarpeta: './Documentos',
    rutaAbsolutaCarpeta: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos',
    rutaArchivo: 'Documentos/texto.md',
    rutaAbsolutaArchivo: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\texto.md',
}


const mocksObtenerLink = {
    rutas: [
        'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\carpeta-uno\\archivo.md',
        'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\carpeta-uno\\carpeta-dos\\prueba.md',
    ],
    respuesta: [
        {
            url: 'https://es.wikipedia.org/wiki/Markdown',
            texto: 'Markdown',
            carpeta: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\carpeta-uno\\archivo.md'
        },
    ]
}

const mocksLeerArchivo = {
    ruta: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\texto.md',
    respuesta: [
        {
            url: 'https://www.tbe.com/watch?v=EOO6Ze9_lDY',
            texto: 'youtube',
            carpeta: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\texto.md',
        },
    ]
}

const mocksRecorrerDirectorios = {
    ruta: 'Documentos',
    respuesta: [
        'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\carpeta-uno\\archivo.md',
        'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\carpeta-uno\\carpeta-dos\\prueba.md',
        'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\texto.md',
        'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\texto1.md'
    ]
}

const mocksStatusLink = {

    ok: {
        link: 'https://es.wikipedia.org/wiki/Markdown',
        respuesta: {
            status: 200,
            ok: 'OK',
        }
    },
    fail: {
        link: 'https://www.tbe.com/watch?v=EOO6Ze9_lDY',
        respuesta: {
            status: null,
            ok: '❌',
        }
    }
}

const mocksVerificarLinks = {

    enlaces: [
        {
            url: 'https://github.com/Laura9426/BOG005-social-network',
            texto: 'google',
            carpeta: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\texto.md'
        },
        {
            url: 'https://nodejs.org/',
            texto: 'Node.js',
            carpeta: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\carpeta-uno\\archivo.md'
        }
    ],

    respuesta: [
        {
            url: 'https://github.com/Laura9426/BOG005-social-network',
            texto: 'google',
            carpeta: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\texto.md',
            status: 200,
            ok: 'OK'
        },
        {
            url: 'https://nodejs.org/',
            texto: 'Node.js',
            carpeta: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\carpeta-uno\\archivo.md',
            status: 200,
            ok: 'OK'
        }
    ]
}

const mocksStatsLink = {

    enlaces: [
        {
            url: 'https://github.com/Laura9426/BOG005-social-network',
            texto: 'google',
            carpeta: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\texto.md'
        },
        {
            url: 'https://nodejs.org/',
            texto: 'Node.js',
            carpeta: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\carpeta-uno\\archivo.md'
        }
    ],
    respuesta: { Total: 2, Unique: 2 }
}

const mocksStatsValidate = {

    enlaces: [
        {
            url: 'https://github.com/Laura9426/BOG005-social-network',
            texto: 'google',
            carpeta: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\texto.md'
        },
        {
            url: 'https://nodejs.org/',
            texto: 'Node.js',
            carpeta: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\carpeta-uno\\archivo.md'
        }
    ],
    respuesta: { Total: 2, Unique: 2, Broken: 0 }
}

module.exports = {
    mocksConCarpeta, mocksConvertirRuta, mocksObtenerLink, mocksLeerArchivo,
    mocksRecorrerDirectorios, mocksStatusLink, mocksVerificarLinks, mocksStatsLink,
    mocksStatsValidate,
}

