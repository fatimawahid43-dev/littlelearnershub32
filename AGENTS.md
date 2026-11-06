# Project guidance

## Landing page assets

- Keep the landing page's existing section order, layout geometry, responsive behavior, and motion unchanged when updating visuals.
- The `/assets` directory is the canonical home for project image assets. Reference site artwork with relative paths such as `assets/resource-phonics.png` so it works on static hosting.
- Use original, brand-matched illustrations for landing page artwork. Do not add stock imagery. Keep the hero illustration as currently implemented unless explicitly asked to change it.
- Use the soft pastel palette and gentle, simple illustration style described in [design.md](design.md).
- Give informative images concise alt text. Mark purely decorative artwork as decorative (`alt=""` or `aria-hidden="true"`).
- Use descriptive, lowercase, hyphenated filenames. Optimize image dimensions and file size for the rendered card size.

## Site files

- `index.html` contains the page structure.
- `styles.css` contains visual styling and responsive behavior.
- `app.js` contains the searchable resource and product catalogues and their interactions.
- `assets/` contains local illustrations and other page media.
