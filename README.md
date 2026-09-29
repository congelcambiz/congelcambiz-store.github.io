# congelcambiz — Running Store

A static, responsive running store built with **HTML, CSS, and vanilla JavaScript**. It includes a catalog of real products, a local shopping cart, filters, search, customer support/advice, and a design ready for GitHub Pages.

## What is included

- 15 real products: 9 running shoes, 3 pairs of socks, 2 caps, and 1 hydration accessory.
- Official product photos linked from brand websites/CDNs.
- Reference prices in USD verified on **September 29, 2026**.
- Functional shopping cart using `localStorage`.
- Search and category filters.
- Responsive design for mobile, tablet, and desktop.
- congelcambiz logo included in `assets/brand/logo.png`.
- Demo support phone number: **+1 (202) 555-0147**.
- Demo email address: **support@congelcambiz.com**.

## Important before using this as a real online store

1. Replace the demo phone number and email address with your real business contact information.
2. Connect a real checkout system (Stripe, Shopify, WooCommerce, or another provider) and an inventory system.
3. Recheck prices, sizes, availability, taxes, shipping costs, and return policies.
4. Obtain any permissions required to use third-party product images, trademarks, and other assets commercially. In this project, product images are loaded from official external URLs and require an internet connection.
5. Add your legal pages and policies, including privacy, terms, returns, and shipping.

## Project structure

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

## Open locally

Open `index.html` in Chrome, Edge, Firefox, or Safari. For a development-style local server, you can use the Live Server extension in VS Code.

## Publish with GitHub Pages

1. Upload all files from this folder to your `congelcambiz-store` repository.
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder.
5. Save the settings and wait for GitHub to publish your site URL.

## Edit products

The catalog is stored in `js/app.js` inside the `products` array. Each product includes a name, brand, category, price, photo URL, and source URL.

## Disclaimer

Brand names, trademarks, and product images belong to their respective owners. This package is an e-commerce template and does not imply affiliation with, authorization from, or sponsorship by the listed brands.
