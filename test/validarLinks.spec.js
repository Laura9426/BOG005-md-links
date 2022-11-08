const validarLinks = require('../validarLinks')
const { mocksStatusLink, mocksVerificarLinks, mocksStatsLink, mocksStatsValidate } = require('../mocks')


describe('statusLink', () => {

    it('statusLink sea una funcion', () => {
        expect(typeof validarLinks.statusLink).toBe('function');
    });

    it('statusLink retorna HTTP OK', () => {
        validarLinks.statusLink(mocksStatusLink.ok.link).then((data) => {
            expect(data).toMatchObject(mocksStatusLink.ok.respuesta);
        })
    });

    it('statusLink retorna HTTP fail', () => {
        validarLinks.statusLink(mocksStatusLink.fail.link).then((data) => {
            expect(data).toMatchObject(mocksStatusLink.fail.respuesta);
        })
    });
});

describe('verificarLinks', () => {

    it('verificarLinks sea una funcion', () => {
        expect(typeof validarLinks.verificarLinks).toBe('function');
    });

    it('verificarLinks crea objeto con peticion HTTP', () => {
        jest.spyOn(validarLinks, 'statusLink').mockReturnValue({});

        validarLinks.verificarLinks(mocksVerificarLinks.enlaces).then((data) => {
            expect(data).toMatchObject(mocksVerificarLinks.respuesta);
        })
    });
});

describe('statsLink', () => {

    it('statsLink sea una funcion', () => {
        expect(typeof validarLinks.statsLink).toBe('function');
    });

    it('statsLink retorna objeto con estadisticas', () => {
        validarLinks.statsLink(mocksStatsLink.enlaces).then((data) => {
            expect(data).toMatchObject(mocksStatsLink.respuesta);
        })
    });
});

describe('statsValidate', () => {

    it('statsValidate sea una funcion', () => {
        expect(typeof validarLinks.statsValidate).toBe('function');
    });

    it('statsValidate retorna objeto con estadisticas y validacion', () => {
        validarLinks.statsValidate(mocksStatsValidate.enlaces).then((data) => {
            expect(data).toMatchObject(mocksStatsValidate.respuesta);
        })
    });
});
