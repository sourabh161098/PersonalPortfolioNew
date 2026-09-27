# Sourabh Patil — Portfolio

A unique, animated personal portfolio for **Sourabh Patil**, Frontend Engineer.
Built with **React + Vite + Tailwind CSS**, with a component-per-section
architecture and motion powered by Framer Motion.

## Highlights

- Dark, editorial theme with purple + lime accents, film-grain overlay, and a pointer-following spotlight
- Custom animated cursor (dot + easing ring, grows over interactive elements)
- Scroll-aware navbar with active-section tracking and a mobile menu
- Sections: Hero (with live "developer.js" card), About, Skills (marquee + grouped cards), Experience timeline, Projects (spotlight cards), Contact
- Fully responsive; respects `prefers-reduced-motion`

## Getting started

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## Project structure

```
src/
  data/content.js          # all resume content (single source of truth)
  styles/global.css        # Tailwind directives + base/component layers
  components/
    Cursor.jsx             # custom cursor
    Background.jsx         # animated gradient/dot-grid background
    Navbar.jsx             # fixed nav + mobile menu
    Reveal.jsx             # scroll-in animation wrapper
    Footer.jsx
    sections/
      Hero.jsx
      About.jsx
      Skills.jsx
      Experience.jsx
      Projects.jsx
      Contact.jsx
  App.jsx                  # composes all sections
  main.jsx
```

## Editing content

All text (profile, skills, experience, projects, education) lives in
`src/data/content.js`. Update that one file and every section reflects it.

## Notes

This project uses the public npm registry (see `.npmrc`). Theme colors and
animations are defined in `tailwind.config.js`.
