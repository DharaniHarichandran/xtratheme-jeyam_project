# XTRA Construction Homepage

Frontend reconstruction of the XTRA Construction 2 demo homepage, built as a hiring assessment. The goal is visual and interactive similarity to the original public demo, not a generic construction template.

## Project overview

This is a single-page React application with a complete homepage (header through footer) plus lightweight placeholder routes for navigation destinations that exist on the original site. Styling uses plain CSS. Images are stored locally in `public/images`.

## Reference website

https://xtratheme.com/elementor/construction-2/

## Technology stack

- React 19
- Vite 8
- JavaScript
- Semantic HTML5
- CSS3 (custom properties, Flexbox, Grid)
- React Icons
- Google Fonts (Poppins)

## Project structure

```
public/images/          Local construction photographs, logos, and icons
src/components/         Header, sections, overlays, inner pages
src/data/content.js     Copy, navigation, and media metadata
src/styles/             Variables, global layout, responsive rules
src/App.jsx             Client-side routing and layout shell
src/main.jsx            Application entry
```

## Prerequisites

- Node.js 18 or later
- npm 9 or later

## Installation

```bash
npm install
```

## Development command

```bash
npm run dev
```

Open the local URL printed in the terminal (typically `http://localhost:5173`).

## Production build command

```bash
npm run build
```

## Preview the production build

```bash
npm run preview
```

## Dependencies and their purpose

- `react`, `react-dom`: UI rendering
- `react-icons`: Header, social, checklist, and control icons
- `vite`, `@vitejs/plugin-react`: Development server and production bundling
- `oxlint`: Optional lint script from the Vite scaffold

No backend, CMS, or email API is included.

## Environment configuration

No environment variables are required. Do not add API keys to the frontend.

## Deployment (Vercel or Netlify)

1. Push this repository to GitHub.
2. Import the repo in Vercel or Netlify.
3. Framework preset: Vite.
4. Build command: `npm run build`
5. Output directory: `dist`
6. SPA fallback is already configured:
   - Vercel: `vercel.json`
   - Netlify: `netlify.toml`

## Assumptions

- The Envato marketplace top bar is marketplace chrome, not part of the theme, and is omitted.
- Theme-admin widgets such as “Enable Section Export” are omitted.
- Inner destinations (FAQ, Blog, Shop, Cart, Wishlist, Account, project and service pages) are local placeholders because this assignment is a homepage reconstruction.
- The original “Departemant” label spelling is preserved.
- Public demo images from the reference site are cached locally for visual accuracy of this assessment.

## Known limitations

- The original Revolution Slider motion (ken burns, layered timelines) is approximated with a two-slide carousel.
- Service cards use a CSS 3D flip; reduced-motion users see a simpler layout.
- Testimonials cycle three cards rather than cloning a WordPress carousel plugin.
- Form submissions are validated in the browser only.

## API integrations

None.

## Form behavior and backend limitations

Required fields: name, email, message. Subject and department are optional. Invalid submit shows field errors. Successful submit shows a demo confirmation and does **not** claim that an email was sent.

## GitHub publication

```bash
git init
git add .
git commit -m "Add XTRA Construction homepage reconstruction"
git remote add origin <your-repo-url>
git push -u origin main
```
