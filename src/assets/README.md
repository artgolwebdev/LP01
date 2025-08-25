# 🎨 Assets Directory

This directory contains all the placeholder images and assets for the Cyber Brutal landing page.

## 📁 Folder Structure

```
src/assets/
├── gallery/          # Gallery images for About section
├── map/             # Map assets
├── logo/            # Logo assets
└── README.md        # This file
```

## 🖼️ Gallery Images

Located in `src/assets/gallery/`

| Filename | Size | Description | Usage |
|----------|------|-------------|-------|
| `futuristic-tech.svg` | 800x400px | Futuristic technology placeholder | Large gallery item |
| `cyber-architecture.svg` | 600x300px | Cyber architecture placeholder | Medium gallery item |
| `neon-city.svg` | 400x200px | Neon city lights placeholder | Small gallery item |
| `digital-art.svg` | 600x300px | Digital art abstract placeholder | Medium gallery item |
| `cyberpunk.svg` | 800x400px | Cyberpunk aesthetic placeholder | Large gallery item |
| `holographic.svg` | 400x200px | Holographic display placeholder | Small gallery item |

### Gallery Image Specifications:
- **Format**: SVG (vector graphics)
- **Style**: Cyberpunk/Brutalist aesthetic
- **Colors**: Cyan (#00ffff), Magenta (#ff00ff), Yellow (#ffff00), Green (#00ff00), Orange (#ff6b00), Purple (#8b00ff)
- **Features**: Grid overlays, gradient backgrounds, cyber-styled text

## 🗺️ Map Assets

Located in `src/assets/map/`

| Filename | Size | Description | Usage |
|----------|------|-------------|-------|
| `cyber-district-map.svg` | 1200x400px | Cyber district map placeholder | Map section |

### Map Specifications:
- **Format**: SVG (vector graphics)
- **Style**: Futuristic city map with grid overlay
- **Features**: Location markers, district labels, cyber-styled grid

## 🏷️ Logo Assets

Located in `src/assets/logo/`

| Filename | Size | Description | Usage |
|----------|------|-------------|-------|
| `cyber-brutal-logo.svg` | 200x80px | Cyber Brutal logo | Header component |

### Logo Specifications:
- **Format**: SVG (vector graphics)
- **Style**: Cyberpunk typography with gradient text
- **Features**: Cyber elements, grid lines, responsive design

## 🔧 Usage in Components

### Gallery Images
```typescript
import { getGalleryImagePath } from '../utils/imageUtils';

// In About.tsx
<img 
  src={getGalleryImagePath(item.query || '')}
  alt={item.query}
  className="w-full h-full object-cover cyber-scan"
  onError={handleImageError}
  onLoad={handleImageLoad}
/>
```

### Map Image
```typescript
import { getMapImagePath } from '../utils/imageUtils';

// In Map.tsx
<img 
  src={getMapImagePath()}
  alt="Cyber District Map"
  className="w-full h-full object-cover"
  onError={handleImageError}
  onLoad={handleImageLoad}
/>
```

### Logo
```typescript
import { getLogoPath } from '../utils/imageUtils';

// In Header.tsx
<img 
  src={getLogoPath()}
  alt="Cyber Brutal"
  className="h-12 w-auto"
  onError={handleImageError}
  onLoad={handleImageLoad}
/>
```

## 🎯 Replacement Instructions

### For Real Images:
1. **Gallery Images**: Replace SVG files with JPG/WebP images of the same dimensions
2. **Map Image**: Replace with actual map integration or custom map image
3. **Logo**: Replace with your actual brand logo

### File Naming Convention:
- Keep the same filenames for easy replacement
- Use the same dimensions as placeholders
- Maintain the same aspect ratios

### Image Optimization:
- Compress images for web use
- Use WebP format when possible
- Implement lazy loading for better performance

## 🚀 Next Steps

1. **Source Real Images**: Find or create actual images that match the cyberpunk aesthetic
2. **Optimize Images**: Compress and optimize for web performance
3. **Test Responsiveness**: Ensure images scale well on all devices
4. **Add Loading States**: Implement loading animations for better UX
5. **Error Handling**: Add fallback images for failed loads

## 📝 Notes

- All placeholder images are SVG format for crisp display at any size
- Images use the project's cyberpunk color palette
- Grid overlays and cyber elements maintain the brutalist aesthetic
- All images are responsive and will scale with the layout
