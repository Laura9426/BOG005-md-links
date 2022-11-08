const validarLinks = require('../validarLinks')

describe('statusLink', () => {

    it('statusLink sea una funcion', () => {
        expect(typeof validarLinks.statusLink).toBe('function');
    });

    it('statusLink retorna datos esperados', () => {
        const link = 'https://es.wikipedia.org/wiki/Markdown';
        const respuesta = {
            status: 200,
            ok: 'OK',
        }
        validarLinks.statusLink(link).then((data) => {
            expect(data).toMatchObject(respuesta);
        })
    });

    it('statusLink retorna datos esperados', () => {
        const link = 'https://www.tbe.com/watch?v=EOO6Ze9_lDY';
        const respuesta = {
            status: null,
            ok: '❌',
        }
        validarLinks.statusLink(link).then((data) => {
            expect(data).toMatchObject(respuesta);
        })
    });


});

describe('verificarLinks', () => {

    it('verificarLinks sea una funcion', () => {
        expect(typeof validarLinks.verificarLinks).toBe('function');
    });

    it('verificarLinks retorna datos esperados', () => {
       jest.spyOn(validarLinks, 'statusLink').mockReturnValue({});
    // validarLinks.statusLink

        const enlaces = [
            {
                url: 'https://github.com/Laura9426/BOG005-social-network',
                texto: 'google',
                carpeta: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\texto.md'
            },
            {
                url: 'https://nodejs.org/',
                texto: 'Node.js',
                carpeta: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\carpeta-uno\\archivo.md'
            }];

        const respuesta = [
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
        validarLinks.verificarLinks(enlaces).then((data) => {
            expect(data).toMatchObject(respuesta);
        })

    });

});

describe('statsLink', () => {

    it('statsLink sea una funcion', () => {
        expect(typeof validarLinks.statsLink).toBe('function');
    });

    it('statsLink retorna datos esperados', () => {

        const enlaces = [
            {
                url: 'https://github.com/Laura9426/BOG005-social-network',
                texto: 'google',
                carpeta: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\texto.md'
            },
            {
                url: 'https://nodejs.org/',
                texto: 'Node.js',
                carpeta: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\carpeta-uno\\archivo.md'
            }];

        const respuesta = { Total: 2, Unique: 2 }
        validarLinks.statsLink(enlaces).then((data)=>{
            expect(data).toMatchObject(respuesta);
        })
        
    });
});

describe('statsValidate', () => {

    it('statsValidate sea una funcion', () => {
        expect(typeof validarLinks.statsValidate).toBe('function');
    });

    it('statsValidate sea una funcion', () => {

        const enlaces = [
            {
                url: 'https://github.com/Laura9426/BOG005-social-network',
                texto: 'google',
                carpeta: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\texto.md'
            },
            {
                url: 'https://nodejs.org/',
                texto: 'Node.js',
                carpeta: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\carpeta-uno\\archivo.md'
            }];
        const respuesta = { Total: 2, Unique: 2, Broken: 0 }
        validarLinks.statsValidate(enlaces).then((data)=>{
            expect(data).toMatchObject(respuesta);
        })
    });
});
