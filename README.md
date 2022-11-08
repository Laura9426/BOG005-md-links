# Markdown Links

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Diagrama de flujo](#2-diagrama-de-flujo)
* [3. Guía de instalación](#3-guía-de-instalación)
* [4. Líneas de comandos](#4-líneas-de-comandos)

***

## 1. Preámbulo

`md-links-lauragonzalez` es una herramienta que lee y analiza archivos en formato `Markdown`, para verificar los links que contengan y reportar algunas estadísticas.

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...) y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.


## 2. Diagrama de flujo 

![Diagrama de flujo](./Diagrama%20de%20flujo.png)

## 3. Guía de instalación

```sh
npm i md-links-gonzalezlaura
```

```sh
const {mdLinks} = require('md-links-gonzalezlaura')
```

## 4. Líneas de comandos

Debe ejecutarse de la siguiente manera a través de la terminal:

```sh
mdLinks <path-to-file> [options]
```

##### Argumentos

* `path`: Ruta **absoluta** o **relativa** al **archivo** o **directorio**.

* `options`: 
  - `validate`: Determina si se desea validar los links encontrados.
  - `stats`: Obtiene un output con información estadística general.

#### Options

##### `--validate`

```sh
$ mdLinks ./some/example.md --validate
```

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.
* `status`: Código de respuesta HTTP.
* `ok`: Mensaje `❌` en caso de fallo u `OK` en caso de éxito.

##### `--stats`

```sh
$ mdLinks ./some/example.md --stats
Total: 3
Unique: 3
```
##### `--validate --stats`

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ mdLinks ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```
