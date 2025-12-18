# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a 3D portfolio website built with React, Three.js, and Vite. The site features interactive 3D elements (desktop computer, earth, animated stars, tech stack balls) and showcases experience, projects, and contact information. It supports multilingual content (Portuguese, English, German) via React Context.

## Development Commands

**Start development server:**
```bash
npm run dev
```

**Build for production:**
```bash
npm run build
```

**Preview production build:**
```bash
npm run preview
```

**Run linter:**
```bash
npm run lint
```

## Architecture

### Core Stack
- **React 18.2** - UI framework
- **Vite** - Build tool with HMR
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Helper components for react-three-fiber
- **Tailwind CSS** - Styling (JIT mode)
- **Framer Motion** - Animations
- **EmailJS** - Contact form integration

### Project Structure

**src/components/** - Main UI sections
- Each component represents a major page section (Hero, About, Experience, Tech, Works, Feedbacks, Contact, Navbar)
- **canvas/** subdirectory contains 3D components (Ball, Computers, Earth, Stars)

**src/contexts/** - React Context providers
- `LanguageContext.jsx` - Manages multilingual state ('pt', 'en', 'de')
- Use `useLanguage()` hook to access language state and `changeLanguage()` function

**src/hoc/** - Higher-Order Components
- `SectionWrapper.jsx` - Wraps sections with Framer Motion animations and layout

**src/utils/** - Utility functions
- `motion.js` - Framer Motion animation variants

**src/constants/index.js** - Application data
- Navigation links, services, technologies, experiences, testimonials, projects
- All text content includes translations for pt/en/de

**src/styles.js** - Tailwind utility class compositions

### Key Patterns

**Language System:**
- Default language: Portuguese ('pt')
- All user-facing text in constants/index.js uses object format: `{ pt: "...", en: "...", de: "..." }`
- Components access language via `useLanguage()` hook
- Language switcher in Navbar component

**3D Components:**
- Built with @react-three/fiber Canvas wrapper
- Use @react-three/drei helpers (OrbitControls, Preload, useGLTF)
- 3D models loaded from public/desktop_pc and public/planet directories
- Responsive behavior with device detection (react-device-detect)

**Section Wrapper HOC:**
- Wraps most sections with stagger animations
- Adds scroll-based reveal animations (whileInView)
- Provides consistent padding and max-width layout
- Adds hash-span for navigation anchors

**Styling:**
- Custom Tailwind theme extends default colors (primary, secondary, tertiary, black-100/200, white-100)
- Custom breakpoint: `xs: "450px"`
- Hero background pattern defined in tailwind.config.js

### Component Integration

Main app structure (App.jsx):
```
LanguageProvider
  └─ BrowserRouter
      └─ div.bg-primary
          ├─ div.bg-hero-pattern (Navbar + Hero)
          ├─ About
          ├─ Experience
          ├─ Tech
          ├─ Works
          ├─ Feedbacks
          └─ div (Contact + StarsCanvas)
```

## Notes

- EmailJS integration requires environment variables/configuration (check Contact.jsx implementation)
- 3D models are GLTF format loaded from public directory
- Animations use viewport intersection detection for performance
- Mobile/desktop rendering differs for 3D components (see Computers.jsx)
