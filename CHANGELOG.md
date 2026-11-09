# Changelog

All notable changes, bug fixes, and feature implementations for the Sweet Harmony Artisan Bakery website are documented in this file.

---

## [Part 2 - Advanced CSS Styling, Responsiveness & Feedback Revisions] - 2026-10-05

### Added
- **Centralized CSS Architecture (`css/styles.css`):**
  - Implemented CSS resets, global typography scales, CSS custom properties (variables), and color themes.
  - Added interactive pseudo-classes (`:hover`, `:focus`, `:active`) for navigation menu items, cards, and buttons, including enhanced visible focus states for accessibility compliance.
  - Structured responsive layouts using CSS Grid (`.card-grid`) and Flexbox (`header`, `nav`, `.hero-overlay`).
- **Responsive Media Queries:**
  - Configured `@media` breakpoints targeting Mobile (< 768px) and Tablet (768px - 1024px) viewports with fluid heading scales and body text adjustments.
- **Documentation:**
  - Added standalone `CHANGELOG.md` following standard repository best practices.
  - Added viewport test screenshots for Mobile, Tablet, and Desktop in the repository.

### Changed
- **Part 1 Feedback Modifications & Fixes:**
  - Standardized semantic HTML5 navigation structures and corrected active page indicators across all 5 pages (`index.html`, `about.html`, `services.html`, `enquiry.html`, `contact.html`).
  - Corrected image asset references and enhanced `alt` text descriptions across product cards and showcases.
  - Refined contact page layout into a responsive card grid for operating hours, location details, and support links.
  - Updated responsive image handling on the menu and services pages to utilize standard production assets seamlessly.

### Fixed
- **Markdown & Documentation:**
  - Fixed code block formatting and directory structure trees in `README.md`.
  - Cleaned up navigation active state assignments across all page links.

### Refactored
- **Stylesheet Architecture:**
  - Reorganized `css/styles.css` into structured sections complete with a Table of Contents and comprehensive inline documentation.

---

## [Part 1 - Initial Prototype & Proposal] - 2026-09-01
- Initialized GitHub repository structure and added main directory folders.
- Created semantic HTML structure for `index.html` and `about.html`.
- Developed `services.html`, `enquiry.html`, and `contact.html` pages.
- Added custom CSS styling, media assets, and inline HTML code comments.
- Finalized initial documentation and IIE Harvard references.