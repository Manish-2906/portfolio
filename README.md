# Manish Divekar Portfolio

This folder now contains a complete static portfolio website built from your project screenshots, certificates, resume, and public GitHub repositories.

## Easy start

1. Double-click `start-portfolio.bat`
2. Or open `index.html` directly in a browser

The batch file starts a small local Python server and opens the site automatically.

## Main files

- `index.html` - page structure
- `styles.css` - design and responsive layout
- `script.js` - case-study data, credential data, modal viewer, and interactions
- `server.py` - local preview server
- `assets/` - profile image, project screenshots, certificates, and documents

## Quick edits later

If you want to change project content later, the easiest place is `script.js`.

- `projects` contains the featured case studies
- `credentials` contains certificates and proof items
- `repoArchive` contains extra GitHub links
- project cards, credential cards, counters, and archive cards are all driven from this file

## Live site

This repo is connected to GitHub Pages and is intended to be served from:

- `https://manish-2906.github.io/portfolio/`

## Custom domain later

If you buy a custom domain later, the site is already using relative asset paths, so it is ready for that switch.
You would only need to add a `CNAME` file with your final domain name before pushing.
