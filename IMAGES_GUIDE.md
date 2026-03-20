# Adding Screenshots & Images to Projects

Your portfolio now supports project images and screenshots. Here's how to use them:

## Setup

1. **Add images to the `public` folder**: Create a `screenshots` folder in your public directory:
   ```
   public/
   └── screenshots/
       ├── project-1.png
       ├── project-2.png
       └── ...
   ```

2. **Update your project data**: In `data/projects.js`, add an `images` array to your project:

```javascript
{
  slug: "my-project",
  title: "My Project",
  description: "...",
  // ... other fields ...
  images: [
    { url: "/screenshots/my-project-1.png", alt: "Project Dashboard" },
    { url: "/screenshots/my-project-2.png", alt: "Feature Overview" },
    { url: "/screenshots/my-project-3.png", alt: "User Interface" },
  ],
  // ... rest of fields ...
}
```

## Where Images Appear

### 1. **Projects List Page** (`/projects`)
- First image appears as a preview at the top of each project card
- Shows with a 4:3 aspect ratio (h-48 / 320px height)

### 2. **Case Study Pages** (`/projects/[slug]`)
- Full-size image gallery with thumbnail navigation
- Click thumbnails to switch between images
- First image displays by default

### 3. **Home Page Work Section** (featured projects)
- If images are available, shows the first image in the right panel
- If no images, falls back to key highlights display
- Nice visual preview of your work

## Image Best Practices

- **Size**: Keep images between 1200-1600px wide for best quality
- **Format**: PNG, JPG, WEBP all supported
- **Optimization**: Consider optimizing before uploading (tools like TinyPNG)
- **Consistency**: Use consistent aspect ratios for a polished look
- **Alt text**: Always provide meaningful alt text for accessibility

## Optional Images

The `images` array is optional:
- If not provided, projects won't show image previews
- Case study pages will work fine without images
- Featured projects will show highlights instead

## Example

```javascript
{
  slug: "ai-ops-assistant",
  title: "AI Ops Assistant",
  description: "Incident analysis platform...",
  stack: ["FastAPI", "PostgreSQL", "Redis", "Docker"],
  images: [
    { url: "/screenshots/ai-ops-dashboard.png", alt: "Main Dashboard" },
    { url: "/screenshots/ai-ops-analysis.png", alt: "Incident Analysis Interface" },
    { url: "/screenshots/ai-ops-timeline.png", alt: "Log Timeline Visualization" },
  ],
  hasCaseStudy: true,
  // ... rest of project config ...
}
```

That's it! Images will automatically display throughout the site.
