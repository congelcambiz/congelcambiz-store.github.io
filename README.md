# congelcambiz — Running Store

Tienda estática y responsive de running creada con **HTML, CSS y JavaScript puro**. Incluye catálogo de productos reales, carrito local, filtros, buscador, soporte/asesoría y diseño listo para GitHub Pages.

## Incluye

- 15 productos reales: 9 tenis, 3 medias, 2 gorras y 1 accesorio de hidratación.
- Fotografías oficiales enlazadas desde las páginas/CDN de las marcas.
- Precios de referencia en USD verificados el **29 de septiembre de 2026**.
- Carrito funcional con `localStorage`.
- Buscador y filtros por categoría.
- Diseño responsive para móvil, tablet y escritorio.
- Logo de congelcambiz incluido en `assets/brand/logo.png`.
- Número de soporte de demostración: **+1 (202) 555-0147**.
- Email de demostración: **support@congelcambiz.com**.

## Importante antes de publicar como comercio real

1. Reemplaza el teléfono y el correo de demostración por tus datos comerciales reales.
2. Conecta un checkout real (Stripe, Shopify, WooCommerce u otro) y un sistema de inventario.
3. Verifica nuevamente precios, tallas, disponibilidad, impuestos, envíos y políticas de devolución.
4. Obtén las autorizaciones necesarias para utilizar imágenes, marcas y recursos de terceros con fines comerciales. En este proyecto las imágenes se cargan desde URLs oficiales externas y requieren conexión a internet.
5. Agrega tus textos legales: privacidad, términos, devoluciones y políticas de envío.

## Estructura

```text
congelcambiz-store/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── assets/
│   ├── brand/
│   │   └── logo.png
│   └── products/
├── SOURCES.md
└── README.md
```

## Abrir localmente

Abre `index.html` en Chrome, Edge, Firefox o Safari. Para una experiencia más cercana a producción, puedes usar la extensión Live Server de VS Code.

## Publicar en GitHub Pages

1. Sube todo el contenido de esta carpeta a tu repositorio `congelcambiz-store`.
2. En GitHub abre **Settings → Pages**.
3. En **Build and deployment**, elige **Deploy from a branch**.
4. Selecciona la rama `main` y la carpeta `/ (root)`.
5. Guarda y espera a que GitHub publique la URL.

## Editar productos

El catálogo está en `js/app.js`, dentro del arreglo `products`. Cada producto tiene nombre, marca, categoría, precio, foto y URL de fuente.

## Aviso

Las marcas, nombres comerciales e imágenes de productos pertenecen a sus respectivos propietarios. Este paquete es una plantilla de e-commerce y no implica afiliación, autorización ni patrocinio de las marcas listadas.
