# Mentors Crib Africa — Static JSX Rebuild

This is a clean React 19 + JavaScript/JSX-only Vite website. It uses plain CSS, no TypeScript, no Express server, no Tailwind/PostCSS pipeline, and no optional Vite plugins that caused earlier local setup errors.

## Run locally with npm

```bash
npm install
npm run build
npm run dev
```

The Vite development server typically opens at `http://localhost:3000`.

## Simple structure

The app shell is in `client/src/App.jsx`. The main page is `client/src/pages/Home.jsx`. Shared navigation and social footer components live in `client/src/components/Navbar.jsx` and `client/src/components/Footer.jsx`. All remaining content routes are organized in `client/src/components/SitePages.jsx`.

## Content routes

The rebuild includes Home, About MCA, Our Story, Founder, Growth Journey, Programs, Mentorshift, Learning Academy, Courses, Resources, Blog, Community, Events, Volunteer, Partner With Us, Support the Movement, Gallery, Testimonials, FAQs, Contact Us, Privacy Policy, and Terms & Conditions.

Testimonials intentionally uses a consent-safe placeholder invitation rather than fabricated reviews. Future product ideas such as LMS, member dashboard, growth pathways, digital certifications, bookstore, event registration, volunteer management, discussion forums, podcast/video library, payments, donations, corporate training, mobile integration, chapters, impact reports, and mentorship matching are represented as future ecosystem directions rather than fake working functionality.

## Social links

The footer includes the provided LinkedIn, Instagram, and Facebook links.

## Vercel deployment

The project is static-only. The repository root contains `vercel.json` with `npm run build` as the build command and `dist/public` as the output directory. On Vercel, use the repository root, framework preset Vite, install command `npm install`, build command `npm run build`, and output directory `dist/public`.
