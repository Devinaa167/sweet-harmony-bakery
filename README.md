# wede5020-g1-2026-formative-2-part-2-devinaa167

# Sweet Harmony Artisan Bakery - Web Application

## Student Information
- **Module**: Web Development (WEDE5020)
- **Project**: Part 2 - Advanced CSS Styling, Responsiveness & Visual Polish
- **Institution**: The Independent Institute of Education (IIE)

## Project Overview
Sweet Harmony Artisan Bakery is a boutique enterprise specializing in custom celebration cakes, artisanal pastries, and gourmet cupcakes. This digital platform showcases the bakery's portfolio and streamlines custom order enquiries online.

## Key Features
- **Semantic HTML5 Structure**: Structured page layout using `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, and `<footer>` elements (World Wide Web Consortium, 2026).
- **5 Core Site Pages**: Complete content across `index.html`, `about.html`, `services.html`, `enquiry.html`, and `contact.html`.
- **Cohesive 5-Tone Color Palette**: Custom CSS styling utilizing Warm Cream (`#FFF8DC`), Soft Pink (`#F8C8DC`), Dark Chocolate Brown (`#3E2723`), Off-White (`#FAFAFA`), Sage Green (`#A8C3A8`), and Rose Pink (`#D87093`) (MDN Web Docs, 2026).
- **Responsive Layout Design**: Dynamic CSS Grid and Flexbox architecture with media queries optimized for Mobile (`< 768px`), Tablet (`768px - 1024px`), and Desktop (`> 1024px`) viewports (W3Schools, 2026).
- **Interactive Controls & States**: Hover, focus, and active interactive pseudo-classes applied across navigation links and action buttons.
- **Custom Enquiry Form**: Structured form layout featuring date pickers, flavor selection dropdowns, and design note text areas.

## Technical Specifications & Architecture

### 1. Semantic Markup (HTML5)
Built with structural integrity and accessibility in mind using proper HTML5 layout containers (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`) and detailed in-code comments annotating every main section.

### 2. Styling & Color Palette (CSS3)
Styled using a central external stylesheet (`css/styles.css`) that leverages CSS custom properties (variables) to maintain brand consistency:
- **Warm Cream (`#FFF8DC`)**: General body background.
- **Soft Pink (`#F8C8DC`)**: Main hero banner container background.
- **Dark Chocolate (`#3E2723`)**: Main headings and body typography.
- **Off-White (`#FAFAFA`)**: Card component container backgrounds.
- **Sage Green (`#A8C3A8`)**: Accent top border line, card outlines, and hover states.
- **Rose Accent (`#D87093`)**: Primary action buttons and active page navigation links.

### 3. Responsive Web Design
Employs fluid CSS Grid (`grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`) and Flexbox alignments with media query breakpoints at `768px` and `1024px` to ensure seamless layout adaptivity across all viewports.

## Directory Structure

```text
SweetHarmonyBakery/
├── css/
│   └── styles.css
├── images/
│   ├── logo.png
│   ├── hero-cake.jpg
│   ├── bakery-interior.jpg
│   ├── bakery-interior.png
│   ├── cupcakes.jpg
│   ├── custom-cakes.jpg
│   ├── pastries.jpg
│   ├── desktop-view.png
│   ├── tablet-view.png
│   └── mobile-view.png
├── js/
│   └── main.js
├── index.html
├── about.html
├── services.html
├── enquiry.html
├── contact.html
├── CHANGELOG.md
└── README.md

Website Sitemap
Plaintext
└── Home (index.html)
    ├── Our Story (about.html)
    ├── Menu & Flavours (services.html)
    ├── Custom Order Enquiry (enquiry.html)
    └── Contact Us (contact.html)

Responsive Testing Screenshots
The web application was tested across multiple screen resolutions using Chrome Developer Tools to ensure layout responsiveness:

1. Desktop View (1440px × 900px)
Full multi-column grid layout with horizontal navigation bar and expanded hero section.

2. Tablet View (768px × 1024px)
Adapted 2-column dynamic layout with adjusted padding and container spacing.

3. Mobile View (375px × 667px)
Single-column stacked card layout with a touch-friendly mobile menu.

Changelog
[Part 2 - Advanced CSS Styling, Responsiveness & Feedback Revisions] - 2026-10-05
Added (Part 2 Features):

Created external master stylesheet css/styles.css linked across all 5 site pages (index.html, about.html, services.html, enquiry.html, and contact.html).

Integrated the full 5-tone brand color palette (Warm Cream, Soft Pink, Dark Chocolate, Off-White, Sage Green, and Rose Pink).

Implemented interactive pseudo-classes (:hover, :focus, :active) across all main navigation links and action buttons.

Added responsive @media query breakpoints targeting Mobile (< 768px) and Tablet (768px - 1024px) viewports.

Added responsive Chrome DevTools screenshots (images/desktop-view.png, images/tablet-view.png, images/mobile-view.png).

Fixed & Revised (Part 1 Feedback Edits):

HTML Comments: Expanded and detailed HTML comment blocks throughout all 5 page markup files to annotate structural components clearly.

Changelog Best Practices: Maintained changelog history directly in README.md as well as in a dedicated CHANGELOG.md file in the project root folder.

Visual Contrast & Card Borders: Added 2px Sage Green (#A8C3A8) borders to product card elements to increase contrast and structural definition against the background.

Navigation Responsiveness: Configured header layout to transition smoothly from a horizontal Flexbox bar on Desktop to a centered vertical stacked layout on Mobile.

[Part 1 - Initial Prototype & Proposal] - 2026-09-01
2026-08-20: Initialized GitHub repository structure and added main directory folders.

2026-08-23: Created semantic HTML structure for index.html and about.html.

2026-08-26: Developed services.html, enquiry.html, and contact.html pages.

2026-08-29: Added custom CSS styling, media assets, and inline HTML code comments.

2026-09-01: Finalized documentation, completed the changelog, and updated IIE Harvard references.

References
Adobe Stock. 2026. Bakers preparing artisan pastries and custom celebration cakes in a professional bakery kitchen. Available at: https://stock.adobe.com [Accessed: 5 October 2026].

Aptos Typography Specification. 2024. Microsoft Design Guidelines. Available at: https://learn.microsoft.com/en-us/typography/ [Accessed: 1 September 2026].

MDN Web Docs. 2026. CSS Building Blocks: Custom Properties (--)*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties [Accessed: 5 October 2026].

MDN Web Docs. 2026. Responsive design. Available at: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design [Accessed: 5 October 2026].

World Wide Web Consortium (W3C). 2026. HTML5 Semantic Markup Standards. Available at: https://www.w3.org/TR/html52/ [Accessed: 1 September 2026].

W3Schools. 2026. CSS Flexbox. Available at: https://www.w3schools.com/css/css3_flexbox.asp [Accessed: 5 October 2026].

W3Schools. 2026. CSS Media Queries - Examples. Available at: https://www.w3schools.com/css/css_rwd_mediaqueries.asp [Accessed: 5 October 2026].