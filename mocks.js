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
    validateFalse: [
        {
            url: 'https://es.wikipedia.org/wiki/Markdown',
            texto: 'Markdown',
            carpeta: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\carpeta-uno\\archivo.md'
        },
        {
            url: 'https://nodejs.org/',
            texto: 'Node.js',
            carpeta: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\carpeta-uno\\archivo.md'
        },
        {
            url: 'https://www.tbe.com/watch?v=EOO6Ze9_lDY',
            texto: 'youtube',
            carpeta: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\texto.md'
        },
        {
            url: 'https://github.com/Laura9426/BOG005-social-network',
            texto: 'google',
            carpeta: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\texto.md'
        },
        {
            url: 'https://github.com/Laura9426/BOG005-social-network',
            texto: 'google',
            carpeta: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\texto.md'
        }
    ],
    statsTrue: { Total: 5, Unique: 4 },
    statsAndValidate: { Total: 5, Unique: 4, Broken: 1 },

}

module.exports = { mocksConCarpeta }
