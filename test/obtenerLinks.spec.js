const obtenerLinks = require('../obtenerLinks')
const fs = require('fs');

jest.spyOn(fs, 'readFile').mockImplementation((path, options, callback) => {
    return {};
  });

describe('convertirRuta', () => {

    it('convertirRuta sea una funcion', () => {
      expect(typeof obtenerLinks.convertirRuta).toBe('function');
    });
  
    it('convertirRuta convierte Documentos', () => {
      expect(obtenerLinks.convertirRuta('Documentos')).toBe('C:\\Users\\lmgv9\\BOG005-md-links\\Documentos');
    });
  
    it('convertirRuta convierte Documentos/texto.md', () => {
      expect(obtenerLinks.convertirRuta('Documentos/texto.md')).toBe('C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\texto.md');
    });
  
  });

  describe('obtenerLinks', () => {

    it('obtenerLinks sea una funcion', () => {
      expect(typeof obtenerLinks.obtenerLinks).toBe('function');
    });

    it('obtenerLinks sea una funcion', () => {

        const links = [
            'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\carpeta-uno\\archivo.md',
            'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\carpeta-uno\\carpeta-dos\\prueba.md',
          ]

        const respuesta = [
            {
                url: 'https://es.wikipedia.org/wiki/Markdown',
                texto: 'Markdown',
                carpeta: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\carpeta-uno\\archivo.md'
              },
        ]
          
        obtenerLinks.obtenerLinks(links).then((data)=>{
            expect(data).toMatchObject(respuesta);
        })
        
      });
  
  
  });

  describe('leerArchivo', () => {

    it('leerArchivo sea una funcion', () => {
      expect(typeof obtenerLinks.leerArchivo).toBe('function');
    });

    it('leerArchivo sea una funcion', () => {



        const ruta = 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\texto.md'
        const respuesta = [{
            url: 'https://www.tbe.com/watch?v=EOO6Ze9_lDY',
            texto: 'youtube',
            carpeta: 'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\texto.md',
        }]
        obtenerLinks.leerArchivo(ruta).then((data)=>{
            expect(data).toMatchObject(respuesta);
        })
        
      });
  

  });
  
  describe('recorrerDirectorios', () => {

    it('recorrerDirectorios sea una funcion', () => {
      expect(typeof obtenerLinks.recorrerDirectorios).toBe('function');
    });

    it('recorrerDirectorios sea una funcion', () => {

        const ruta = 'Documentos'
        const respuesta = [
            'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\carpeta-uno\\archivo.md',
            'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\carpeta-uno\\carpeta-dos\\prueba.md',
            'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\texto.md',
            'C:\\Users\\lmgv9\\BOG005-md-links\\Documentos\\texto1.md'
          ]

        obtenerLinks.recorrerDirectorios(ruta, (error, data)=>{
            expect(data).toMatchObject(respuesta);
        })
        
      });


  });
