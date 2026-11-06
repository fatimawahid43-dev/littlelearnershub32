# Little Learners Hub

Repository: `littlelearnershub32`

A lightweight, responsive static website for Little Learners Hub. It uses plain HTML, CSS and JavaScript, so it can be hosted on an inexpensive static host without a framework or build step.

## Preview

Open `index.html` in a browser. The page also works when served from any static web host.

## Before publishing

Update these sample contact details with the business's real information:

- In `app.js`, change `whatsappNumber` to the WhatsApp number in international format, digits only (for example, `923001234567`).
- In `index.html`, replace `hello@littlelearnershub.com` in both the email link and contact form context with the business email.
- Confirm the product names, descriptions and PKR prices in the `products` list in `app.js`.
- Replace the sample WhatsApp enquiry flow with a payment and order system when online checkout is ready. The current buttons open WhatsApp; they do not take payment or create orders.

The contact form prepares a message in the visitor's email app. It does not submit or store personal information on a server. The free ABC activity is generated in the browser as an SVG download. Product artwork is illustrative catalogue art, not a photo of a physical product.

## Files

- `index.html` — page content and search metadata
- `styles.css` — pastel visual design and responsive layouts
- `app.js` — resource catalogue, product catalogue, download, menu and contact interactions
