# Project guidance

## Site direction

- Little Learners Hub is a free play-and-learn space for ages 2–6 and their grown-ups. Do not add prices, checkout, paid products, or account requirements.
- Keep content encouraging and age appropriate. Use simple language, friendly cartoons, large touch targets, and clear parent guidance.
- Maintain responsive behaviour and the hero WebGL background unless a future request asks to change them.
- Use the saturated pastel palette and child-friendly visual direction described in [design.md](design.md).

## Artwork

- `/assets` is the canonical home for image assets. Use relative paths such as `assets/resource-phonics.png` so artwork works on static hosting.
- Prefer original vector or CSS illustrations and original cartoon artwork. Do not add stock imagery.
- Keep informative alt text concise and mark decorative artwork with `alt=""` or `aria-hidden="true"`.

## Site files

- `index.html` contains the page structure.
- `styles.css` contains styling and responsive behaviour.
- `app.js` contains searchable resources, games, number chart, drawing studio, free activity, and contact interactions.
- `videos.js` contains the YouTube video catalogue.
- `assets/` contains local illustrations and other page media.
