# Little Learners Hub — Design Notes

## Brand

- **Audience:** Parents and caregivers of children aged 2–6.
- **Promise:** Simple, joyful learning activities families can use at home.
- **Tagline:** “Learn, Explore & Grow Through Play!”
- **Voice:** Warm, encouraging, clear, and parent-friendly. Celebrate curiosity and small steps; avoid pressure or claims that every child develops at the same pace.

## Visual direction

Create a welcoming editorial playroom: soft pastel colour, confident navy text, cheerful geometric illustrations, and generous breathing room. Keep the experience polished enough for parent trust while retaining small playful details.

**Preservation constraint:** Visual refinements must be styling-only. Keep the existing page structure, section order, content, layout geometry, responsive breakpoints, interactions, and animation behaviour unchanged. Do not introduce new motion.

### Colour palette

| Role | Colour | Hex |
| --- | --- | --- |
| Main background | Warm paper | `#FFFAF4` |
| Main text | Deep blue-grey | `#29334A` |
| Primary action | Bright coral | `#C9544A` |
| Pink accent | Playful pink | `#F3B4BE` |
| Blue accent | Clear sky blue | `#9ED3E5` |
| Yellow accent | Sunshine | `#F4CF5C` |
| Green accent | Fresh mint | `#A9D6B7` |
| Lavender accent | Lilac | `#C7B4E6` |

Use navy for readable body text and primary navigation. Use the more saturated pastel colours for illustrations, cards, tags, and section backgrounds, with warm paper as the main canvas. Keep text contrast clear against every coloured surface.

### Typography

- **Fraunces:** Display headings and short expressive phrases.
- **DM Sans:** Body copy, navigation, labels, and controls.
- **Nunito:** The compact wordmark and selected child-friendly labels.

The typefaces currently load from Google Fonts, with local system fallbacks in the CSS.

### Illustration style

Use simple, friendly shapes with rounded corners and light shadows: learning cards, blocks, rainbows, printable activity pages, and small decorative marks. Prefer vector or CSS artwork that stays crisp on mobile. Avoid relying on emoji as the only meaning-bearing icon.

## Page structure

1. **Home:** Welcome, play-based learning promise, age range, and direct links to resources and the shop.
2. **Learning resources:** Searchable cards for phonics, numbers, shapes, Montessori activities, worksheets, fine motor practice, creative arts, and screen-free play.
3. **About:** Play-based philosophy, early learning, creativity, and child-led independence.
4. **Shop:** Printable activity products with descriptions, illustrative cover art, PKR prices, and WhatsApp enquiry actions.
5. **Free resources:** A no-sign-up ABC activity download.
6. **Parent’s corner:** Short practical articles with expandable reading text.
7. **Work with us:** Brand, UGC, PR, and educational partnership enquiries.
8. **Contact:** Instagram, WhatsApp, email, and a form that prepares an email for the visitor to send.

## Interaction and responsive behaviour

- Keep the top navigation visible on larger screens; use a toggleable menu on small screens.
- Let families filter resources by learning type and search titles or descriptions.
- Make product enquiry buttons open a prefilled WhatsApp message.
- Generate the free printable in the browser as a downloadable SVG.
- Use semantic HTML, visible keyboard focus, descriptive form labels, and a reduced-motion preference.
- Stack content into a single-column flow on phone screens; keep touch targets comfortably sized.

## Implementation notes

- The site is a static HTML/CSS/JavaScript project with no build step or server requirement.
- `index.html` contains page content and SEO description metadata.
- `styles.css` contains the visual system and responsive layouts.
- `app.js` contains resource and product catalogues plus search, filtering, downloads, and enquiry interactions.
- `README.md` contains basic preview and update instructions.
- Replace the sample WhatsApp number and placeholder email before launch. Product prices and catalogue details also need confirmation.
- Checkout, payments, customer accounts, stored contact submissions, and downloadable product files are not implemented yet; current product buttons are enquiry links.
