# GH_Television&Remote

[enlace a la página](https://jesusmatinezclavel.github.io/GeeksHub_SecondAssigment_TV-Remote/)

Este proyecto es el segundo trabajo oficial del BootCamp FullStackDeveloper de GeeksHub, y consiste en la creación de una television y un mando que controle los canales que dicha TV muestra. Otros objetivos eran incluir la hora, la fecha, el volumen y el nombre del canal mostrado. Como objetivos extra podíamos añadir un menú selector y un control parental, de los cuales he podido incluir el control de volumen.

[enlace al repositorio]

![TV&Remote](./img/image.png)

## Tabla de contenidos

1. Sobre el proyecto
2. Sobre el diseño
3. Tecnologías
4. Estructura de archivos

## 1. Sobre el proyecto

Para este proyecto hemos utilizado JavaScript para crear los eventos que controlarían la televisión a través de los botones del mando a distancia.
Para ello he configurado la pantalla para que tenga varios niveles, en los cuales he puesto por encima la pantalla apagada (en `z-index: 5;`) y al pulsar el botón de encendido se muestre el menú, el cual está en el `z-index: 1;`.

![Menú](./img/image2.png)

A partir de aquí configuré las teclas del mando para que, dependiendo del número que se pulse afecte al índice del Array correspondiente al Array de canales para así darles (y quitarles) la clase con el correspondiente `z-index: 2;`.
Los niveles `z-index: 3;` y `z-index: 4;` los he utilizado para el botón de menú y el de info respectivamente, para que podamos ir al menu desde cualquier canal y para mostrar la información (fecha, hora y canal seleccionado) siempre que pulsemos el botón.

![Ejemplo de canal](./img/image3.png)

## 2. Sobre el diseño

Para el diseño he decidido hacer una pantalla sencilla tipo Ipad con un mando a distancia básico.
He añadido algo de profundidad a ambos elementos jugando con los bordes, las sombras y el movimiento, además de apoyar la funcionalidad dada por JavaScript con el pulsado de los botones.

![boton hover](./img/image4.png)     ![boton pulsado](./img/image5.png)