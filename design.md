# Little Learners Hub — Design Notes

## Brand

- **Audience:** Children aged 2–6 and their parents/caregivers.
- **Promise:** A joyful, free place for families to learn and play together at home.
- **Tagline:** “Learn, Explore & Grow Through Play!”
- **Voice:** Warm, encouraging, clear, and parent-friendly. Celebrate curiosity and small steps; avoid pressure or claims that every child develops at the same pace.

## Visual direction

Create a colourful, friendly playroom with confident navy text, cheerful cartoon-style illustrations, rounded cards, playful number patterns, and generous breathing room. Keep the experience easy for young children to understand and reassuring for parents.

### Colour palette

| Role | Colour | Hex |
| --- | --- | --- |
| Main background | Warm paper | `#FFF9EE` |
| Main text | Deep blue-grey | `#253451` |
| Primary action | Bright coral | `#E85C55` |
| Pink accent | Playful pink | `#F4A5B3` |
| Blue accent | Clear sky blue | `#86CFE1` |
| Yellow accent | Sunshine | `#F6CF4D` |
| Green accent | Fresh mint | `#9BD5AA` |
| Lavender accent | Lilac | `#C3A9EC` |

Use readable deep text against pastel surfaces. Use bright accents in illustrations, game controls, number cells, and playful badges.

## Typography and illustration

- Use Nunito for child-friendly labels and headings, with DM Sans for readable body copy; retain graceful system fallbacks.
- Use simple original cartoon art, playful shapes, and friendly faces. Prefer vector, CSS, and canvas drawings that stay crisp on phones.
- Do not use stock imagery or rely on emoji alone to communicate an important instruction.
- Use large, comfortable touch targets and short labels.

## Page structure and features

1. Home and welcome
2. Searchable learning resources
3. Free play lab with count, letter, and shape games
4. Child-friendly drawing canvas with cartoon stamps and PNG download
5. Tap-to-hear number chart from 1–100
6. Curated learning videos with parent preview guidance
7. About, free printable, parent tips, collaborations, and contact

The site is a free resource. Do not add paid product listings, prices, checkout, or account requirements.

## Interaction and accessibility

- Keep the navigation responsive and the hero WebGL background intact.
- Keep learning cards searchable and filterable.
- Generate the ABC printable and drawing download in the browser.
- Make number cells speak their number when supported; do not require audio for using the chart.
- Keep keyboard focus visible, use semantic controls and form labels, and respect reduced-motion preferences.
- Keep videos click-to-load and include a reminder for grown-ups to preview and watch with children.
- Keep the contact form transparent: it prepares an email, and does not store submissions.

## Implementation

This is a static HTML/CSS/JavaScript project with no build step. `index.html` contains structure and SEO metadata, `styles.css` contains responsive styling, `app.js` contains interactions and `videos.js` contains the video catalogue. GitHub Pages deploys from the `main` branch.
