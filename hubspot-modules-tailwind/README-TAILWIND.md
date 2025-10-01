# HubSpot Modules with Tailwind CSS

All modules have been rebuilt using Tailwind CSS for easier maintenance and better consistency with your original React components.

## Setup Instructions

### 1. Add Tailwind CSS to Your HubSpot Template

Add the content from `tailwind-setup.html` to your HubSpot template's `<head>` section. This includes:
- Tailwind CSS CDN
- Custom Tailwind configuration (colors, animations)
- Helper styles

```html
<!-- Copy everything from tailwind-setup.html -->
```

### 2. Upload Modules

Each module now uses:
- **Tailwind utility classes** for styling (in `module.html`)
- **Minimal custom CSS** for animations only (in `module.css`)
- Same editable fields as before (in `fields.json`)

## What Changed from Standard CSS Version

### Before (Standard CSS)
```css
/* module.css had 200+ lines */
.hero-section {
  padding: 5rem 2rem;
}

.hero-container {
  max-width: 1152px;
  margin: 0 auto;
}
/* ...many more lines */
```

### After (Tailwind CSS)
```html
<!-- Clean HTML with utility classes -->
<section class="py-20 px-8">
  <div class="max-w-6xl mx-auto">
    ...
  </div>
</section>
```

## Benefits of Tailwind CSS Version

1. **Smaller file sizes** - CSS files are now just animations
2. **Easier to customize** - Change classes directly in HTML
3. **Consistent with React** - Same utility classes as original code
4. **Faster development** - No need to write custom CSS
5. **Better responsive** - Built-in responsive breakpoints

## Module-Specific Notes

### All Modules
- Use `text-primary` for brand color
- Use `hover-elevate` for hover effects
- Responsive by default with Tailwind breakpoints

### Customization Examples

**Change spacing:**
```html
<!-- Before -->
<section class="py-24 px-8">

<!-- After (more padding) -->
<section class="py-32 px-12">
```

**Change colors:**
```html
<!-- Before -->
<div class="bg-primary text-white">

<!-- After (different background) -->
<div class="bg-blue-600 text-white">
```

**Change text sizes:**
```html
<!-- Before -->
<h2 class="text-4xl">

<!-- After (larger) -->
<h2 class="text-5xl lg:text-6xl">
```

## Tailwind Classes Reference

### Common Classes Used

**Layout:**
- `max-w-6xl` - Max width container
- `mx-auto` - Center horizontally
- `flex`, `grid` - Flexbox/Grid layouts
- `space-y-8` - Vertical spacing between children

**Spacing:**
- `p-8` - Padding all sides
- `px-8` - Padding horizontal
- `py-24` - Padding vertical
- `gap-4` - Gap between flex/grid items

**Colors:**
- `text-primary` - Brand color
- `bg-gray-900` - Dark background
- `border-gray-200` - Light border

**Typography:**
- `text-4xl` - Large text
- `font-medium` - Medium font weight
- `leading-relaxed` - Increased line height

**Effects:**
- `rounded-xl` - Rounded corners
- `shadow-lg` - Large shadow
- `transition-all` - Smooth transitions
- `hover:scale-105` - Scale on hover

## Browser Support

Tailwind CSS CDN supports:
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)

## Performance Notes

Using Tailwind CDN is perfect for:
- Quick development
- Landing pages
- Marketing sites

For production sites with many pages, consider:
- Using Tailwind CLI to build optimized CSS
- Purging unused classes
- Self-hosting the compiled CSS

## Troubleshooting

**Styles not applying?**
1. Make sure `tailwind-setup.html` is in your template `<head>`
2. Check browser console for errors
3. Verify script loads: `<script src="https://cdn.tailwindcss.com"></script>`

**Custom colors not working?**
1. Verify `tailwind.config` is in the setup
2. Use `text-primary` instead of custom HSL values
3. Check the config extends the theme properly

**Animations not smooth?**
1. Keyframes are in `tailwind-setup.html`
2. Custom animations in each module's `.css` file
3. Make sure both files are uploaded

## Support

For Tailwind CSS documentation:
- https://tailwindcss.com/docs

For HubSpot module documentation:
- https://developers.hubspot.com/docs/cms/building-blocks/modules
