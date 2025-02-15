# Unstable-Blog

A beginner-level blog built with Next.js, Markdown, and Tailwind CSS that serves as a platform to learn web development. This project uses Markdown files (Specially formatted as MDX) as the source for blog posts, supports dynamic routing, and navigates to similar posts via a tag system.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Development Checklist](#development-checklist)
- [Stretch Goals](#stretch-goals)
- [Progress Tracking](#progress-tracking)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project is a static blog built with Next.js. It leverages Markdown for content creation so that you can focus on writing while the application handles routing, styling, and other functionality.

## Features

- **Static Generation & Dynamic Routing:**
  Renders blog posts written in Markdown with YAML frontmatter. Each post gets its own dynamic route.
- **Markdown Rendering:**
  Uses `MDX` to render content as HTML.
- **Tailwind CSS Styling:**
  Easily customize your layout and UI with a utility-first CSS framework.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Daniel-Burbridge-Developer/unstable-blog
   cd nextjs-markdown-blog
   ```

2. **Install Dependencies:**

   ```bash
   pnpm update
   ```

3. **Run the Development Server:**

   ```bash
   pnpm dev
   ```

4. **Open in Browser:**

   Visit [http://localhost:3000](http://localhost:3000) to see the app.

## Usage

- **Adding Posts:**
  Create Markdown files (e.g., `first-post.md`, `second-post.md`) in the `posts/` folder. Include a relavent picture.
- **Customization:**
  Modify component `mdx-components.tsx` and files under `@/app/blog/`, to personalize the look and functionality.

## Development Checklist

### Project Setup

- [x] Scaffold project using Create Next App.
- [x] Set up Tailwind CSS.
- [x] Create the basic file structure:
  - `posts/` for Markdown content.
  - `blog/[slug]` for homepage and dynamic post routes.
  - `components/ui` for reusable UI components.
  - `styles/` for global and module-specific CSS.
- [x] Moved mdx-components.tsx to root of project, fixing build and runtime errors

### Markdown Integration

- [x] Render Markdown using `MDX`.

### Dynamic Routing

- [x] Create dynamic route for blog posts (`pages/blog/[slug].js`).
- [x] Implement `getStaticParams` to statically generate pages.

### Similar-To Functionality

- **Basic Client‑Side Filtering:**
  - [x] Filter Based on Tags at the bottom of each post, to find similar posts.
  - [x] Display in most similar to least similar format.

### Styling & Layout

- [x] Build a consistent layout with header and footer components.
- [x] Ensure responsive design using Tailwind CSS.

### SEO & Metadata

- [x] Add metadata using Next.js’s `<Head>` component or Metadata API.
- [x] Optimize URLs and add descriptions.

### Deployment

- [x] Deploy the project on Vercel.
- [x] Verify that static generation works as expected in production.

## Stretch Goals

- [ ] Integrate MDX to mix Markdown with interactive React components.
- [ ] Implement a dark mode toggle.
- [ ] Add a comment system (e.g., Disqus or a custom solution).
- [ ] Generate an RSS feed and sitemap.
- [ ] Improve search with Fuse.js for fuzzy matching.
- [ ] Set up a headless CMS (e.g., TinaCMS) for content management.
- [ ] Add unit and integration tests.
- [ ] Enable Incremental Static Regeneration (ISR) for automatic updates.
- [ ] Set up subscription service
- [ ] Ensure SEO optimisation

## License

This project is licensed under the MIT License.
