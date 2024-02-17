# Trabajando con React, app creada con Vite y TailWindCSS

## Instalar extensión.
**ES7+ React/Redux/React-Native snippets**

1. Nos ayuda para crear componentes mas rapidos con `rafc`
2. Los componentes son con Inician con Mayusculas ejemplo `MiComponente.jsx`

## Para crear una aplicacion.

1. npm create vite "nombre-proyecto"
2. accedimos con cd a "nombre-proyecto"

## Instalamos Tailwind en el proyecto

1. [TailWindCss - Documentación](https://tailwindcss.com/docs/guides/vite)

2. Instalamos con `npm install -D tailwindcss postcss autoprefixer`
3. Inicializamons con `npx tailwindcss init -p`
4. Configuramos el archivo `tailwind.confing.js` como dice en la documentación.
5. Importamos base, components y utilities en el archivo css base, aqui seria `App.css`


## Librerias instaladas

1. ```npm install react-router-dom```

## [Heroicons](https://heroicons.com/)

1. npm install @heroicons/react
2. import { BeakerIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'
3. <ShoppingCartIcon className="h-6 w-6 text-blue-500" />