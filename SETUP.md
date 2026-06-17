# Setup Instructions

## Files Created

Your GitHub Pages website is ready. Here's what has been created:

### Core Files
1. **index.html** — Main website with all sections (Hero, About, Courses, Modes, FAQs, Blog, Contact, Footer)
2. **cbse-digest.html** — CBSE Digest YouTube channel page
3. **styles.css** — Complete styling (responsive, animations, mobile-first)
4. **script.js** — All interactivity (menu, animations, form handling)
5. **README.md** — Project description for GitHub

### Configuration Files
6. **.gitignore** — Git ignore rules
7. **IMAGES.md** — Image assets checklist

---

## Quick Start

### Step 1: Clone and Navigate
```bash
git clone https://github.com/besandeep21/besandeep21.github.io.git
cd besandeep21.github.io
```

### Step 2: Create Assets Folder
```bash
mkdir -p assets/images
```

### Step 3: Add Images
- Add all images from IMAGES.md to `assets/images/` folder
- Use placeholder images initially if needed

### Step 4: Push to GitHub
```bash
git add .
git commit -m "Add website files"
git push origin main
```

### Step 5: Enable GitHub Pages
1. Go to repository Settings
2. Navigate to Pages
3. Set Source to "main branch"
4. Your site will be live at: `https://besandeep21.github.io/`

---

## Website Structure

### Main Website (index.html)
- **Header** — Fixed navigation with mobile hamburger menu
- **Hero** — Full-screen intro with CTA buttons and visual elements
- **About** — Prof. Balaji biography with expandable read-more
- **Courses** — 3 course cards (CBSE, TN State Board, CBSE Digest)
- **Modes** — Online, Classroom, Hybrid options with stacked mobile view
- **FAQs** — Categorized questions with filter buttons
- **Blog** — Article showcase with carousel
- **Contact** — Location info + inquiry form with WhatsApp integration
- **Footer** — Social links and copyright

### CBSE Digest Page (cbse-digest.html)
- YouTube-style mockup
- Chapter list with suggestions
- Subscribe button to YouTube channel

---

## Key Features

✅ **Mobile-First Responsive Design** — Works perfectly on all devices
✅ **Smooth Scroll Animations** — CSS transitions and Intersection Observer
✅ **Parallax Effects** — Grid and element parallax on scroll
✅ **Hamburger Menu** — Mobile navigation that slides in from left
✅ **Form Validation** — WhatsApp link generator based on selections
✅ **FAQ Filtering** — Category-based filtering with expand/collapse
✅ **Accessibility** — Semantic HTML, keyboard navigation
✅ **Performance** — Optimized CSS, minimal JavaScript, lazy loading ready

---

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
--primary-blue: #0d2ad4;
--teal: #049a8f;
--gold: #edb538;
```

### Fonts
System fonts are used by default. To add custom fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

### Links & Content
All text and links are easy to find and edit:
- Phone: +919787692116
- Email: prof.balaji13@gmail.com
- WhatsApp: https://wa.me/919787692116
- YouTube: https://www.youtube.com/@CBSEdigest

---

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Deployment

Your site will auto-deploy when you:
1. Push changes to `main` branch
2. Wait 1-2 minutes for GitHub Pages to rebuild
3. Visit `https://besandeep21.github.io/`

---

## Need Help?

- **Images not showing?** Check IMAGES.md for required image names and paths
- **Links not working?** Verify phone numbers, emails, and URLs in HTML
- **Menu not appearing on mobile?** Clear browser cache and hard refresh
- **Styling issues?** Ensure styles.css is in root directory

---

## What's Included

### Mobile Features
- Hamburger menu (closes on link click or outside click)
- Stacked cards for Modes section
- Optimized touch targets
- Responsive typography
- Flexible grid layouts

### Desktop Features
- Fixed header with active nav indicator
- Hover effects on cards and buttons
- Desktop-optimized carousel
- Larger spacing and typography

### Animations
- Fade-in animations on scroll
- Parallax background effects
- Smooth button hover states
- Card elevation on hover
- Modal-like menu transitions

---

## Next Steps

1. ✅ Upload all files to GitHub
2. Add images to `assets/images/`
3. Customize phone numbers and links
4. Add your article thumbnails for blog carousel
5. Record Chapter 1 video for CBSE Digest
6. Monitor analytics via GitHub Insights

Your professional, minimal, mobile-optimized website is ready! 🚀
