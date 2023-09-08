# Portafolio de trabajo web

Este programa es desarrollado completamente con HTML, CSS y JS.

El objetivo es una página que ofresza información personal sobre mí y que muestre cosas como contacto, mis habilidades, portafolio de trabajo, etc.

Con esto se busca poner en práctica las habilidades en maquetación, por lo cual no tendrá funcionalidades adicionales.


Trataremos de seguir los siguientes pasos

* Obetener las medidas a raiz de una imagen previa del proyecto.
* Creacion de los archivos html.
* Maquetación con CSS.



## Primer paso: Usar una imagen ya hecha de referencia para obtener las medidas reales del proyecto

Para este proyecto contamos con imagenes de referencia de cómo va a quedar el proyecto, por ello la ingesaremos en un index.html para poderla medir y asi hacerla lo más fiel posible.

Si la imagen es muy grande no nos servirá de mucho asi que haremos unas redimenciones y ajustes rapidos en el el DOM.

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style type="text/css">
        *{ 
            margin: 0;
            padding: 0;
        }
        img{
            width: 100%;
        }
        body{
            overflow: hidden;
        }
    </style>
</head>
```


Agregamos tambien un titulo a la página que será solo para ver el diseño así como un icono en la pestaña para que sirva solo para diferenciar la pestaña de muestra de la página real donde vamos a trabajar.

```html
    <link rel="icon" type="image/png" href="imagenes_referencia/04-portafolio.png">
    <title>DISEÑO</title>
```

<p> ... </p>
<p> ... </p>

# Iniciamos la maquetación web

Ademas de nuestro archivo HTML en nuestros proyectos siempre intentaremos crear una carpeta llamada assets con todos los recursos que necesitaremos para nuestra página web.
Entre ellos no pueden faltar

* fonts
* css
* img
* js

Tambien agregamos los archivos que usaremos para los iconos encontrados en la carpeta assets. Recordemos que los iconos siempre los podremos descargar de la página Google Font Awesome.

Recordemos que la clase con min.css es una que pesa menos y carga más rapido en los navegadores.

```html
    <link rel="stylesheet" href="assets/fonts/fontawesome-free-6.1.2-web/css/all.min.css">
    <link rel="stylesheet" href="assets/css/styles.css">
```

Ahora podemos llamar un icono para probar en el html. Los archivos de icono y tipo SVG son considerados de fuente no de imagen. Por tanto al hacerlos más grandes no se pixelean.

```html
 <body>
    <h1>Portafolio</h1>
    <i class="fa-regular fa-star" font-size="250px"></i>
</body>
```

## Añadir una fuente de texto a mi proyecto

Si descargamos una fuente de texto alterna de google fonts y queremos agregarla al proyecto de manera local. Primero colocamos el archivo .ttf descargado en la carpeta de assets. En este ejemplo el archivo .ttf está en una carpeta llamada poppins dentro de la carpeta assets.

No queremos añadir el texto en el archivo principal de css para mantener el proyecto limpio. entonces en la carpeta poppins añadimos un nuevo archivo llamado en este caso **poppins.css**
En este arvhico añadiremos el siguiente codigo.

```css
@font-face {
    font-family: "Poppins";
    src: url("./Poppins-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
}
```
Solo queda llamar el documento desde el html:

```css
    <link rel="stylesheet" href="assets/fonts/poppins/poppins.css">
```

