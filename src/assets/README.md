# Assets Directory

Placeholder images and assets for the Cyber City landing page.

## Structure

```
src/assets/
├── gallery/     # Gallery images for About section
├── map/         # Map assets
├── logo/        # Logo assets
└── video/       # Video assets
```

## Gallery Images

Located in `src/assets/gallery/`

| Filename | Size | Description |
|----------|------|-------------|
| `futuristic-technology.png` | 800x400px | Futuristic technology |
| `cyber-architecture.png` | 600x300px | Cyber architecture |
| `neon-lights-city.png` | 400x200px | Neon city lights |
| `digital-art-abstract.png` | 600x300px | Digital art abstract |
| `cyberpunk-aesthetic.png` | 800x400px | Cyberpunk aesthetic |
| `holographic-display.png` | 400x200px | Holographic display |

## Map Assets

Located in `src/assets/map/`

| Filename | Size | Description |
|----------|------|-------------|
| `cyber-district-map.svg` | 1200x400px | Cyber district map |

## Logo Assets

Located in `src/assets/logo/`

| Filename | Size | Description |
|----------|------|-------------|
| `cyber-city-logo.svg` | 200x80px | Cyber City logo |

## Usage

```typescript
import { getGalleryImagePath, getMapImagePath, getLogoPath } from '../utils/imageUtils';

// Gallery images
<img src={getGalleryImagePath('futuristic technology')} />

// Map image
<img src={getMapImagePath()} />

// Logo
<img src={getLogoPath()} />
```

## Replacement

1. Replace placeholder images with real content
2. Keep same filenames for easy replacement
3. Maintain same dimensions and aspect ratios
4. Optimize images for web use
