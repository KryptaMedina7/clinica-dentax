# Dentax Landing Page

Este es el proyecto para el Landing Page de Dentax. Está construido utilizando Next.js y está optimizado para funcionar como un **sitio estático puro**, ideal para ser desplegado en servicios como Netlify sin necesidad de un servidor o backend.

## Estructura del Proyecto

El código fuente principal se encuentra dentro de la carpeta `web/`.
- `web/src/app` - Páginas y layout de Next.js
- `web/src/components` - Componentes reutilizables (UI, Layout, Secciones de la página)
- `web/public` - Assets estáticos (imágenes, iconos, etc.)
- `web/next.config.ts` - Configuración de Next.js. Se han activado las exportaciones estáticas (`output: 'export'`) para generar el sitio.

La raíz del repositorio contiene un `netlify.toml` que facilita el despliegue automático en la plataforma.

## Cómo ejecutarlo localmente

Para ejecutar el proyecto en tu máquina local:

1. Ingresa a la carpeta principal del proyecto web:
   ```bash
   cd web
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Despliegue en Netlify

El proyecto está preconfigurado para ser subido a un repositorio de GitHub y enlazado directamente a Netlify. 

### Configuración Automática
Al conectar este repositorio a Netlify, leerá automáticamente el archivo `netlify.toml` en la raíz. La configuración es la siguiente:
- **Base directory**: `web`
- **Build command**: `npm run build`
- **Publish directory**: `web/out` (esta es la carpeta final con los archivos estáticos)

### Errores 404
El framework está configurado para generar una exportación puramente estática (`index.html`, `404.html`, etc.), por lo tanto, no debería haber problemas de rutas al recargar la página. La falta del servidor Node.js (backend) no afectará el sitio.
