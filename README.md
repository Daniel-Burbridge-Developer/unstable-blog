# Unstable-Blog

A beginner-level blog built with Next.js, Markdown, and Tailwind CSS that serves as a platform to learn web development. This project uses Markdown files (with YAML frontmatter) as the source for blog posts, supports dynamic routing, and features a search bar to filter posts.

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

This project is a static blog built with Next.js. It leverages Markdown for content creation so that you can focus on writing while the application handles routing, styling, and search functionality. As you progress, you'll add a search bar and other advanced features to make the blog even more dynamic.

## Features

- **Static Generation & Dynamic Routing:**
  Renders blog posts written in Markdown with YAML frontmatter. Each post gets its own dynamic route.
- **Markdown Rendering:**
  Uses `gray-matter` to parse Markdown files and `react-markdown` to render content as HTML.
- **Tailwind CSS Styling:**
  Easily customize your layout and UI with a utility-first CSS framework.
- **Search Functionality:**
  A client‑side search bar that updates the URL with a query parameter and filters posts.
- **SEO Optimized:**
  Pages include meta tags and clean URLs.
- **(Optional) Fuzzy Search:**
  You can extend the search using Fuse.js for more flexible matching.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Daniel-Burbridge-Developer/unstable-blog
   cd nextjs-markdown-blog
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Development Server:**

   ```bash
   npm run dev
   ```

4. **Open in Browser:**

   Visit [http://localhost:3000](http://localhost:3000) to see the app.

## Usage

- **Adding Posts:**
  Create Markdown files (e.g., `first-post.md`, `second-post.md`) in the `posts/` folder. Each file should include YAML frontmatter for metadata such as title and date.
- **Search:**
  Use the search bar on the homepage. Typing a query and pressing Enter updates the URL (e.g., `/?q=react`) and filters the post list accordingly.
- **Customization:**
  Modify components under `components/` and styling in `styles/` to personalize the look and functionality.

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

### Search Functionality

- [ ] **Basic Client‑Side Filtering:**
  - [ ] Create a `SearchBar` component that updates the URL query using `useRouter`.
  - [ ] Update the homepage to read the query (using `useSearchParams`) and filter posts.
- [ ] **(Optional) Fuzzy Search:**
  - [ ] Integrate Fuse.js for improved search matching.

### Styling & Layout

- [ ] Build a consistent layout with header and footer components.
- [ ] Ensure responsive design using Tailwind CSS.

### SEO & Metadata

- [ ] Add meta tags using Next.js’s `<Head>` component or Metadata API.
- [ ] Optimize URLs and add descriptions.

### Deployment

- [ ] Deploy the project on Vercel.
- [ ] Verify that static generation and search work as expected in production.

## Stretch Goals

- [ ] Integrate MDX to mix Markdown with interactive React components.
- [ ] Implement a dark mode toggle.
- [ ] Add a comment system (e.g., Disqus or a custom solution).
- [ ] Generate an RSS feed and sitemap.
- [ ] Improve search with Fuse.js for fuzzy matching.
- [ ] Set up a headless CMS (e.g., TinaCMS) for content management.
- [ ] Add unit and integration tests.
- [ ] Enable Incremental Static Regeneration (ISR) for automatic updates.

## Contributing

Contributions, issues, and feature requests are welcome! Please feel free to open an issue or submit a pull request if you have ideas or improvements.

## License

This project is licensed under the MIT License.
