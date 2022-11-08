const obtenerLinks = require('../obtenerLinks')
const { mocksObtenerLink, mocksConvertirRuta, mocksLeerArchivo, mocksRecorrerDirectorios } = require('../mocks')
const fs = require('fs');

jest.spyOn(fs, 'readFile').mockImplementation((path, options, callback) => {
  return {};
});

describe('convertirRuta', () => {

  it('convertirRuta sea una funcion', () => {
    expect(typeof obtenerLinks.convertirRuta).toBe('function');
  });

  it('convertirRuta de una carpeta', () => {
    expect(obtenerLinks.convertirRuta(mocksConvertirRuta.rutaCarpeta))
      .toBe(mocksConvertirRuta.rutaAbsolutaCarpeta);
  });

  it('convertirRuta de un archivo MD', () => {
    expect(obtenerLinks.convertirRuta(mocksConvertirRuta.rutaAbsolutaArchivo))
      .toBe(mocksConvertirRuta.rutaAbsolutaArchivo);
  });
});

describe('obtenerLinks', () => {

  it('obtenerLinks sea una funcion', () => {
    expect(typeof obtenerLinks.obtenerLinks).toBe('function');
  });

  it('obtenerLinks retorna array con los objetos', () => {
    obtenerLinks.obtenerLinks(mocksObtenerLink.rutas).then((data) => {
      expect(data).toMatchObject(mocksObtenerLink.rutas);
    })
  });
});

describe('leerArchivo', () => {

  it('leerArchivo sea una funcion', () => {
    expect(typeof obtenerLinks.leerArchivo).toBe('function');
  });

  it('leerArchivo retorna array con objeto', () => {

    obtenerLinks.leerArchivo(mocksLeerArchivo.ruta).then((data) => {
      expect(data).toMatchObject(mocksLeerArchivo.respuesta);
    })
  });
});

describe('recorrerDirectorios', () => {

  it('recorrerDirectorios sea una funcion', () => {
    expect(typeof obtenerLinks.recorrerDirectorios).toBe('function');
  });

  it('recorrerDirectorios retorna un array con rutas absolutas', () => {
    obtenerLinks.recorrerDirectorios(mocksRecorrerDirectorios.ruta, (error, data) => {
      expect(data).toMatchObject(mocksRecorrerDirectorios.respuesta);
    })
  });
});
