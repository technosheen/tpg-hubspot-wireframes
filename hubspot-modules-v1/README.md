# HubSpot Modules

This directory contains HubSpot-compatible modules converted from the React components. Each module can be uploaded to HubSpot CMS and used in templates and pages.

## Module Structure

Each module contains the following files:
- `meta.json` - Module metadata and configuration
- `fields.json` - Editable field definitions for the HubSpot editor
- `module.html` - HTML markup with HubL templating language
- `module.css` - Styling for the module
- `module.js` (optional) - JavaScript for interactive features

## Available Modules

### 1. Hero Section (`hero-section/`)
A hero section with headline, subheadline, animation, and CTA buttons.

**Editable Fields:**
- Headline Part 1
- Headline Part 2 (highlighted)
- Subheadline
- Primary CTA text and URL
- Secondary CTA text and URL
- Show/hide animation

### 2. Problem Section (`problem-section/`)
Bloomberg Terminal-style reporting section with animated dashboards.

**Editable Fields:**
- Headline
- Subheading
- Description paragraphs
- Conclusion text

**Features:**
- Auto-cycling dashboard views (Executive Overview, Lead Disposition, Pipeline Health, Performance Summary)
- Animated metrics and cards
- Modern dark theme dashboard design

### 3. Proof Bar (`proof-bar/`)
Client logos section with scrolling animation and comparison table.

**Editable Fields:**
- Trust text
- Client logos (comma-separated list)
- Comparison section headline and subtext
- Column labels

**Features:**
- Vertical scrolling logo animation
- Side-by-side comparison table
- Hover effects on logos

### 4. Results Section (`results-section/`)
Feature showcase with auto-cycling highlights.

**Editable Fields:**
- Headline

**Features:**
- Three feature cards with icons and descriptions
- Auto-cycling active state (3-second intervals)
- Live metrics display
- Hover to activate features

### 5. Solutions Section (`solutions-section/`)
Process timeline with animated steps.

**Editable Fields:**
- Headline
- Subheadline
- CTA button text and URL

**Features:**
- Three-step process visualization
- Animated timeline with progress indicator
- Auto-cycling step activation
- Pulsing effects and status text

### 6. Testimonials Section (`testimonials-section/`)
Client testimonials with horizontal scrolling.

**Editable Fields:**
- Headline

**Features:**
- Three testimonial cards with ratings
- Horizontal scroll with snap points
- Auto-cycling active state
- Progress indicators
- Hover to activate testimonials
- Live metrics bar

### 7. CTA Footer (`cta-footer/`)
Call-to-action footer section.

**Editable Fields:**
- Headline
- Description
- CTA button text and URL

**Features:**
- Dark background with high contrast
- Centered layout
- Hover effects on button

## Installation Instructions

1. **For each module:**
   - Zip the module folder (e.g., `hero-section.zip`)
   - In HubSpot, go to Design Manager
   - Navigate to your theme or create a new folder
   - Upload the module

2. **Alternative method (recommended for developers):**
   - Use HubSpot CLI:
     ```bash
     npm install -g @hubspot/cli
     hs init
     hs upload hubspot-modules [your-portal-name]
     ```

## Usage

1. Open a HubSpot page or template in the page editor
2. Drag the module from the sidebar into your page
3. Click on the module to edit the fields in the right sidebar
4. Customize the content, colors, and URLs as needed
5. Preview and publish

## Customization

### Colors
The primary brand color is `hsl(25 95% 53%)` (orange). To change this:
- Search for `hsl(25 95% 53%)` in CSS files
- Replace with your brand color

### Animations
Most animations use CSS keyframes and can be adjusted by modifying:
- Animation duration (e.g., `animation: pulse 3s`)
- Animation timing (e.g., `ease-in-out`, `linear`)
- Transition speeds (e.g., `transition: all 0.3s ease`)

### JavaScript Timing
For auto-cycling features, adjust timing in the `<script>` tags:
- Problem Section: `delays` array in module.html
- Results Section: `setInterval(cycleFeatures, 3000)`
- Solutions Section: `delays` array in module.html
- Testimonials Section: `setInterval(cycleCards, 4000)`

## Browser Compatibility

These modules use modern CSS and JavaScript features:
- CSS Grid and Flexbox
- CSS Animations
- ES6 JavaScript

Supported browsers:
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)

## Notes

- All animations are simplified versions of the React/Framer Motion originals
- Interactive features use vanilla JavaScript instead of React
- Tailwind CSS classes have been converted to standard CSS
- Icons are inline SVG for better compatibility
- Some complex animations may perform differently than the React version

## Support

For issues or questions about these modules, refer to:
- HubSpot CMS Documentation: https://developers.hubspot.com/docs/cms
- HubSpot Developer Forum: https://community.hubspot.com/t5/CMS-Development/ct-p/CMS
