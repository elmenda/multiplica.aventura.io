# 🌟 Multiplica Aventuras

Aplicación educativa desarrollada en **Angular 20** para practicar y
aprender las **tablas de multiplicar** de una forma sencilla, visual y
divertida.

Está especialmente orientada a alumnado de **4º de Primaria**,
aproximadamente **9 años**, buscando que la práctica de las
multiplicaciones resulte más entretenida que los ejercicios
tradicionales.

La interfaz utiliza un diseño infantil pero moderno y está preparada
para funcionar tanto en **móvil** como en **tablet y escritorio**.

## 🎯 Objetivo

El objetivo de **Multiplica Aventuras** es facilitar el aprendizaje y la
práctica de las tablas de multiplicar mediante pequeños retos y una
experiencia visual adaptada a niños.

La aplicación busca combinar:

-   📚 Aprendizaje.
-   🎮 Juego.
-   ⭐ Recompensas.
-   🔥 Motivación mediante rachas.
-   🎯 Retos de multiplicación.
-   📱 Uso desde cualquier dispositivo.

## ✨ Funcionalidades

Actualmente la aplicación permite:

-   Seleccionar tablas de multiplicar.
-   Practicar las tablas del **2 al 10**.
-   Consultar una tabla completa antes de practicarla.
-   Realizar retos de multiplicaciones.
-   Introducir la respuesta de cada operación.
-   Comprobar automáticamente si la respuesta es correcta.
-   Mostrar feedback visual al acertar o fallar.
-   Acumular puntos y estrellas.
-   Mantener una racha de respuestas correctas.
-   Mostrar el resultado obtenido al finalizar un reto.
-   Volver a practicar y seleccionar otras tablas.

## 👧 Diseño

La aplicación está pensada para niños de aproximadamente **9 años**,
evitando tanto una apariencia demasiado seria como un diseño
excesivamente infantil.

Se utilizan colores vivos y agradables, tarjetas grandes, botones
fácilmente identificables, ilustraciones y emojis, textos cortos y
elementos de gamificación.

## 📱 Responsive

La interfaz está preparada para **móvil, tablet y desktop**,
reorganizando los elementos según el espacio disponible y manteniendo
controles cómodos para pantallas táctiles.

## 🛠️ Tecnologías

-   **Angular 20**
-   **TypeScript**
-   **SCSS**
-   **HTML5**
-   Angular Standalone Components
-   Angular Signals
-   Angular Zoneless Change Detection

No es necesario disponer de backend para ejecutar la aplicación.

## ⚡ Angular Zoneless

La aplicación utiliza Angular sin `Zone.js`.

``` typescript
import { provideZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
  ],
}).catch(console.error);
```

## 📦 Instalación

Es necesario tener instalado **Node.js** y **npm**.

``` bash
npm install
```

## 🚀 Ejecutar el proyecto

``` bash
npm run start
```

La aplicación estará disponible normalmente en:

``` text
http://localhost:4200
```

## 🏗️ Compilar el proyecto

``` bash
npm run build
```

Los archivos compilados se generarán en el directorio `dist/`.

## 📂 Estructura principal

``` text
tablas-candela/
├── public/
├── src/
│   ├── app/
│   │   └── app.component.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
└── README.md
```

## 🚧 Próximas mejoras

-   🏆 Sistema de niveles.
-   🥇 Medallas y logros.
-   ⭐ Sistema de estrellas.
-   🔥 Rachas de varios días.
-   ⏱️ Retos contrarreloj.
-   🎯 Diferentes niveles de dificultad.
-   🔀 Ejercicios mezclando varias tablas.
-   ❤️ Sistema de vidas.
-   🔊 Sonidos al acertar o fallar.
-   🎉 Animaciones y celebraciones.
-   👧 Selección y personalización de avatar.
-   🗺️ Mapa de niveles.
-   📊 Estadísticas de aciertos y errores.
-   📈 Seguimiento del progreso por cada tabla.
-   💾 Persistencia del progreso mediante `localStorage`.
-   🏅 Récord personal.

## 💡 Idea de evolución

Cada tabla de multiplicar podría representar un mundo diferente:

``` text
🌳 Bosque del 2
        ↓
🌊 Océano del 3
        ↓
🏜️ Desierto del 4
        ↓
🏰 Castillo del 5
        ↓
🚀 Espacio del 6
        ↓
🦄 Mundo mágico del 7
        ↓
❄️ Reino helado del 8
        ↓
🌋 Isla volcánica del 9
        ↓
🏆 Gran reto del 10
```

Para desbloquear el siguiente mundo habría que conseguir un determinado
número de estrellas.

## 🎓 Finalidad

**Multiplica Aventuras** es un proyecto educativo cuyo principal
objetivo es ayudar a practicar las tablas de multiplicar de forma
autónoma y entretenida.

## 🚀 Demo

Puedes probar la aplicación aquí:

👉 [Multiplica Aventuras - Demo](https://elmenda.github.io/multiplica.aventura.io/)

> **Aprender + jugar + superar retos = multiplicar puede ser divertido.
> 🚀✨**
