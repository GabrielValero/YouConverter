
# YouConverter

You Converter es una aplicacion para teléfono integrada con la API de YOUTUBE para buscar canciones, reproducirlos y descargar las canciones.

La aplicación realiza las peticiones para la busqueda de canciones, reproduccion de música y links para descargar la música a una **API aparte, en este repo solo se encuentra el FRONT-END.**
## Demo

Insert gif or link to demo

![Imagen 1 de la demo](/assets/ShowMain.png)
![Imagen 2 de la demo](/assets/ShowPlayer.png)

## Instalación

EL proyecto está hecho con expo pero por el uso de ciertas librerías nativas fue necesario ejectar y generar la carpeta **android**

Por lo tanto es necesario que tenga JAVA 17

Una vez copiado el repositorio ejecute
```bash
  npm install 
  npm prebuild
```
Si no quiere estar haciendo apk's cada vez que agregue una librería nativa tambien puede ejecutar

```bash
  npx expo run:android
```
Pero para esto puede que sea necesario más configuración.
## Variables de Entorno

Para correr el proyecto necesitaras añadir una variable de entorno a un archivo .env, que es el link de la API de donde se sirve la app.

`EXPO_PUBLIC_API_URL`

## Deployment

Para compilar la app en una APK se usa el servicio de [expo EAS](https://expo.dev/eas), se tienen dos perfiles principales para el build en el [eas.json](https://github.com/GabrielValero/YouConverter/blob/master/eas.json):
 
 - **Desarrollo ("development"):** con el apk generado de esta build es necesario instalar en el dispositivo y ejecutar npm start para lanzar el server.
 Para ejecutar el build
 ```bash
  npm run build:dev
```
Una vez instalado en el dispositivo lance el server con 
```bash
  npm start
```
 - **Previa ("preview"):** Con el APK generado solo es necesario ejecutar

```bash
  npm run build:prev
```