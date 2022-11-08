const { mdLinks } = require('../index.js')
const { mocksConCarpeta } = require('../mocks')
const fs = require('fs');

jest.spyOn(fs, 'readFile').mockImplementation((path, options, callback) => {
  return {};
});


describe('mdLinks', () => {

  it('mdLinks sea una funcion', () => {
    expect(typeof mdLinks).toBe('function');
  });

  it('mdLinks con validate en false', () => {
    const opciones = {
      validate: true,
      stats: false
    }
    mdLinks(mocksConCarpeta.ruta, opciones).then((data) => {
      expect(data).toMatchObject(mocksConCarpeta.validateTrue)
    })
  });

});



