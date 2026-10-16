# XTRA Construction Homepage

Frontend reconstruction of the XTRA Construction 2 demo homepage, built as a hiring assessment. The goal is visual and interactive similarity to the original public demo, not a generic construction template.

## Project Overview

This is a single-page React application with a complete homepage, from header through footer, plus lightweight placeholder routes for navigation destinations that exist on the original site. Styling uses plain CSS, and images are stored locally in `public/images/`.

## Reference Website

https://xtratheme.com/elementor/construction-2/

## Technology Stack

* React 19
* Vite 8
* JavaScript
* Semantic HTML5
* CSS3 (custom properties, Flexbox, Grid)
* React Icons
* Google Fonts (Poppins)

## Project Structure

```text
public/images/          Local construction photographs, logos, and icons
src/components/         Header, sections, overlays, and inner pages
src/data/content.js     Copy, navigation, and media metadata
src/styles/             Variables, global layout, and responsive rules
src/App.jsx             Client-side routing and layout shell
src/main.jsx            Application entry point
```

## Prerequisites

* Node.js 18 or later
* npm 9 or later

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open the local URL printed in the terminal, typically `http://localhost:5173`.

## Production Build

```bash
npm run build
```

## Preview the Production Build

```bash
npm run preview
```

## Dependencies and Their Purpose

* `react`, `react-dom`: UI rendering
* `react-icons`: Header, social, checklist, and control icons
* `vite`, `@vitejs/plugin-react`: Development server and production bundling
* `oxlint`: Optional linting tool from the Vite scaffold

No backend, CMS, or email API is included.

## Environment Configuration

No environment variables are required. Do not add API keys to the frontend.

## Deployment (Vercel or Netlify)

1. Push this repository to GitHub.
2. Import the repository into Vercel or Netlify.
3. Select Vite as the framework preset.
4. Set the build command to `npm run build`.
5. Set the output directory to `dist`.

SPA fallback configuration is already included:

* Vercel: `vercel.json`
* Netlify: `netlify.toml`

## Assumptions

* The Envato marketplace top bar is marketplace chrome, not part of the theme, and is omitted.
* Theme-admin widgets such as "Enable Section Export" are omitted.
* Inner destinations (FAQ, Blog, Shop, Cart, Wishlist, Account, project and service pages) are local placeholders because this assignment is a homepage reconstruction.
* The original "Departemant" label spelling is preserved.
* Public demo images from the reference site are cached locally for visual accuracy of this assessment.

## Known Limitations

* The original Revolution Slider motion (Ken Burns effect and layered timelines) is approximated with a two-slide carousel.
* Service cards use a CSS 3D flip; reduced-motion users see a simpler layout.
* Testimonials cycle through three cards rather than cloning a WordPress carousel plugin.
* Form submissions are validated in the browser only.

## API Integrations

None.

## Form Behavior and Backend Limitations

Required fields: name, email, and message. Subject and department are optional. Invalid submissions display field errors. Successful submissions display a demo confirmation and do not claim that an email was sent.

## GitHub Publication

This project is maintained in Git and can be published to GitHub using the repository's configured remote.
