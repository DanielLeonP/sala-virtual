﻿# Sala Virtual para ayuda en el Proceso de Conciliación 👾

_El sistema de una sala virtual, busca el apoyo en un entorno virtual para facilitar la conectividad entre personas físicas y que de esta manera el proceso de conciliación se pueda llevar a cabo sin la necesidad de estar presentes físicamente y con la innovación que un entorno virtual puede aportar a un proceso como este_

## Comenzando 🚀

_Para obtener el proyecto en local y que se permita la edición, mejora e innovación, se debe clonar en la máquina local para poder acceder a estos archivos, este proyecto fue realizado con el apoyo de ```Centro de Desarrollo```_

Mira **Despliegue** para conocer como desplegar el proyecto.

### Pre-requisitos ✏️

_Antes de inicializar el proyecto y ejecutarlo, debes tener en cuenta los siguientes puntos_

- El entorno virtual, hace uso de modelos ```GLB``` muy pesados, por ello, se pide paciencia a la hora de inicializarlo para que pueda todo cargar correctamente

- Inicialmente, estos modelos no se encuentran en el repositorio, por ello te pedimos los descargues del enlace proporcionado en la sección **Recursos Adicionales**

- La aplicación hace uso de un archivo ```.env``` en el cual se debe colocar la IP destino del jugador principal donde se conectaran todos los demás sockets, con el nombre de ```REACT_APP_API_URL``` para que funcione la conectividad

## Construido con 🛠️

_Herramientas, lenguajes de programación y demás recursos usados para su construcción_

* [Node.js](https://nodejs.org/en/download/) – (16.6.2 o superior) Entorno de ejecución utilizado para la construcción del entorno virtual
* [Blender](https://www.blender.org/download/) – Aplicación para la construcción de modelos 3D que interactúan dentro del entorno virtual

## Despliegue 📦

_Se demuestra cómo se debe desplegar el proyecto para su correcto funcionamiento_

1. Descarga o clona el proyecto localmente

2. Una vez instalado ```Node.js``` se debe navegar entre los directorios para llegar al directorio raíz del proyecto desde consola

3. Antes de inicializar el proyecto se deben instalar las dependencias utilizadas para el desarrollo del proyecto, para esto ejecutamos el siguiente comando en el directorio raíz
```javascript
npm install
```
con esto se busca instalar todas las dependencias establecidas en el ```package.json```

En caso de que alguna dependencia por el paso del tiempo y/o actualizaciones ya no sea compatible con el proyecto, se debe forzar su instalación con una ```flag```
```javascript
npm install --force
```

4. Ahora bien, esas dependencias se encuentran instaladas, y son las necesarias para ejecutar el entorno virtual, pero además, se deben instalar las dependencias acordes a la conectividad entre usuarios, haciendo uso de ```sockets```, para ello, desde el directorio raíz se deben ejecutar los siguientes comandos
```javascript
cd server
```
```javascript
npm install
```

Con esto, ambas partes, tanto los sockets como el entorno virtual, se podrán ejecutar

5. Para incializar el sistema se debe ejecutar el siguiente comando, desde el directorio raiz, para el entorno virtual
```javascript
npm start
```

Ahora, para los ```sockets```, se deben ejecutar los siguientes comandos en una consola nueva sin cerrar la anterior del entorno virtual, de esta manera ambos entornos se encontrarán en ejecución
```javascript
cd server
```
```javascript
npm run dev
```

6. Una vez ocurrido lo anterior se debería abrir una pestaña del navegador donde empiece a cargar la sala virtual, en caso contrario de que no ocurriese, tú puedes abrir la pestaña y abrir
```
http://localhost:3000/
```

7. Una vez el programa se encuentre corriendo se podrá interactuar y llevar a cabo su funcionalidad

### Notas Adicionales 📋

_Se colocan notas que son de utilidad para la manipulación del proyecto y/o sistema_

- Todos los modelos ya sean ```FBX``` o ```GLB``` que se inserten en la sala virtual se deben colocar en la el directorio ```public/models/```

## Recursos Adicionales 💥

_Documentos, enlaces y más información referente a la construcción del proyecto, sistema o aplicación_

* [Figma](https://www.figma.com/file/bwqEdzaWJvOdvVQMkq6D1K/Procedimiento-de-conciliaci%C3%B3n-al-interior-del-Partido-del-Trabajo?type=design&node-id=0%3A1&mode=design&t=u3Fv4ZXNKUGcvyh8-1) – Modelos y prototipos creados para el entorno virtual
* [Docx](https://docs.google.com/document/d/1Lo86d8u5EDSApfr2x_WbXx_QBd0caNQySdxDMUZP0So/edit?usp=sharing) – Documento informativo y esclarecido sobre el proceso de conciliación, y el flujo del sistema
* [Drive](https://drive.google.com/drive/folders/17Rh61xV5eslLNfciMkhSL_UkjlndLOuk?usp=sharing) – Modelos 3D usados dentro de la sala virtual, para prueba o instanciados
* [Miro](https://miro.com/welcomeonboard/Vm1UN3F5bTluTUtSYnlDRWtrdU1yVkRlM1BJTnowU3liZHRDSTBsOWVVSXlHV0Y0RzlDVEZFa0t2UmVvWEd6aHwzMDc0NDU3MzUzODk0NDE2MzcwfDI=?share_link_id=733962413114) - Diagramas del proceso de conciliación

## Autores ✒️

_Las personas implicadas en el desarrollo del proyecto_

* **Michell García** - [AleGV258](https://github.com/AleGV258)
* **Daniel León** - [DanielLeonP](https://github.com/DanielLeonP)
* **Uriel Baeza** - [OlafGG](https://github.com/OlafGG)
* **Israel Nieto** - [Israelnu](https://github.com/Israelnu)
* **Daniel Aros** - [DanielAros](https://github.com/DanielAros)
