# Trabajando con VITE

## Obtener el template

sh 
npm create vite@lateste . # Al colocar el punto se los va a copiar en el directorio actual

## Instalar las dependencias (package.js)

npm i
npm install

## Levantar el servidor de desarrollo

npm run dev

## Para detener el servidor de desarrollo

Ctrl + C

## Para construir el proyecto para subirlo a la nube

npm run build


# Empezar  a desarrollar con SASS
1. Cambiar el nombre del archivo

```
css/style.css => scss/style.scss
```

2. Vuelvo a importar el archivo en el punto de entrada **main.js**

```
import './css/style.css' // =>>>>> import './scss/style.scss'
```

3. Instalo las dependencias

```
npm i scss -D
```