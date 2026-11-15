# Lisa Eman | Professional Site

A responsive, dependency-free professional website for GitHub Pages. The site uses plain HTML, CSS, and a small optional JavaScript file. No installation or build step is required.

## Preview

Open `index.html` in a browser. A local web server also works, but is not required.

## Publish with GitHub Pages

1. Commit these files and push them to the GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the branch containing these files and the **/ (root)** folder, then save.
5. GitHub will display the published URL when deployment finishes.

All local asset paths are relative, so the site works at either a repository URL or a custom domain.

## Custom domain

When ready to connect `lisaeman.com`, enter it in the repository's Pages custom-domain setting and configure the corresponding DNS records at Porkbun using GitHub's current Pages documentation. Enable HTTPS when GitHub makes it available. A custom-domain file has deliberately not been added before domain configuration.

## Editing

- **Content and links:** `index.html`
- **Colors, spacing, typography, and responsive layouts:** `styles.css`
- **Automatic footer year:** `script.js`
- **Browser icon:** `favicon.svg`

Experience details use native HTML disclosure elements and remain usable without JavaScript. The site includes keyboard focus states, a skip link, and reduced-motion support. No third-party fonts, trackers, or libraries are loaded.

Before publishing, review the wording and add a preferred public contact link if desired. Role titles and employment dates follow the October 2026 resume. The selected work section describes professional experience rather than linking to unpublished portfolio artifacts.

## Resume layout

Experience cards expand to show resume bullets. Selected project tiles expand to show concise descriptions. The browser print command can export the resume to PDF. Printing expands experience details and omits navigation and project tiles. Contact links include email, LinkedIn, and GitHub.
