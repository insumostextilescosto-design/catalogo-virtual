# Catálogo web ITAC

Catálogo público adaptable en `index.html`, autónomo con estilos, lógica de tienda, fotos recortadas con fondo transparente y logo incorporados. Incluye búsqueda, filtros, orden por precio/reciente, detalles enlazables, carrito local, cantidades, subtotales, total, URL compartible, WhatsApp y descarga Excel.

## Despliegue con gh-pages

Se incluye `package.json`, `deploy.js` y `.github/workflows/deploy.yml`. La automatización instala la dependencia `gh-pages` (versión 6.3.0) y publica solo `index.html` en la rama `gh-pages` al actualizar `main`. Localmente: `npm install` y `npm run deploy` desde un clon autenticado del repositorio.

Después del primer despliegue, selecciona la rama `gh-pages` y `/ (root)` en **Settings → Pages → Build and deployment → Deploy from a branch**. URL: https://insumostextilescosto-design.github.io/catalogo-virtual/.

## Datos

El Excel aporta los 9 productos, precios y colores; cada producto tiene ID único estable. WhatsApp: +57 315 251 0570. Las variantes sin foto propia muestran la muestra disponible con el indicador de color.

El PDF indica $1.270 por metro para encajes, mientras que el Excel detalla valores entre $1.200 y $1.750. `index.html` usa el desglose del Excel.

