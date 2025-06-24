# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a professional portfolio website for Alexander Valencia, a backend developer with frontend experience. Built with Astro and TypeScript, serving as an interactive, performant, and SEO-optimized alternative to a traditional developer resume, intended to impress technical and non-technical recruiters. the site URL is https://www.alexpiral.com

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run Astro CLI commands
npm run astro ...
npm run astro -- --help
```

## Architecture

- **Framework**: Astro v5.10.1 with TypeScript
- **Structure**: File-based routing in `src/pages/`
- **Static Assets**: Stored in `public/` directory
- **Configuration**: Uses strict TypeScript configuration extending Astro's defaults
- **Build Output**: Production builds go to `./dist/`

## Key Files

- `src/pages/index.astro` - Main homepage template
- `astro.config.mjs` - Astro configuration (currently minimal)
- `tsconfig.json` - TypeScript configuration with strict settings
- `package.json` - Project dependencies and scripts

## Requirements & Standards

### Performance Requirements

- **MUST** achieve optimal performance scores in all metrics
- **MUST** score above 90 on Lighthouse for performance, accessibility, SEO, and best practices
- Implement lazy loading for images and non-critical content
- Minimize JavaScript bundle size and use code splitting
- Optimize images with proper formats (WebP, AVIF) and responsive sizing
- Enable compression and caching strategies
- Use Astro's static generation for maximum performance

### SEO Requirements

- **MUST** implement comprehensive SEO optimization
- Proper semantic HTML structure with correct heading hierarchy
- Meta tags: title, description, keywords, Open Graph, Twitter Cards
- Structured data (JSON-LD) for better search engine understanding
- Optimized URLs and internal linking structure
- XML sitemap and robots.txt
- Fast loading times (Core Web Vitals compliance)
- Mobile-first responsive design
- Ensure canonical URLs to prevent duplicate content issues

### Content Structure

1. **Work Experience Section**

   - Display previous companies with logos, names, and descriptions
   - Highlight specific tasks and achievements at each company
   - Professional timeline or grid layout

2. **Personal Projects Section**

   - Project title and description
   - Optional preview image (show placeholder if none provided)
   - GitHub repository link (required)
   - Live demo link (optional)
   - Technology stack used
   - Optional WIP flag to mark in-progress projects. Use consistent labeling in UI (e.g., badge or icon).

3. **Professional Information**
   - Name: Alexander Valencia
   - Role: Backend Developer (with frontend experience)
   - **NO personal photo** - focus on work and skills
   - Contact information and professional links

### Design Requirements

- **Professional, minimal, and attractive** design
- **Recruiter-focused** - easy to scan and understand quickly
- Clean typography and proper spacing
- Accessible design (WCAG compliance)
- Dark/light theme consideration
- Mobile-responsive across all devices

## Development Notes

- Astro looks for `.astro` or `.md` files in `src/pages/` for routing
- Components should be created in `src/components/`
- Static assets like company logos and project images go in `public/`
- Use Astro's built-in image optimization for performance
- Implement proper meta tags in document head for SEO

## Code Quality Standards

- All code must follow clean code principles, modular structure, and appropriate design patterns where applicable.

### Extensibility Notes

- Site is structured to easily add new sections or projects without major refactors
- Use meaningful naming conventions and keep functions short and single-responsibility
- Write DRY (Don’t Repeat Yourself), readable code with helpful inline comments where necessary
