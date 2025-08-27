# Video Assets Directory

Video assets for the Cyber City landing page.

## Structure

```
src/assets/video/
├── neon-city-scene.mp4      # Hero background video
├── hero-video-poster.svg    # Video poster image
└── README.md               # This file
```

## Video Files

| Filename | Format | Description | Usage |
|----------|--------|-------------|-------|
| `neon-city-scene.mp4` | MP4 | Neon city background video | Hero section background |
| `hero-video-poster.svg` | SVG | Video poster image | Video fallback |

## Usage

```typescript
import { getNeonCityScenePath, getHeroVideoPosterPath } from '../utils/imageUtils';

// Video element
<video 
  src={getNeonCityScenePath()}
  poster={getHeroVideoPosterPath()}
  autoPlay muted loop
/>
```

## Specifications

- **Format**: MP4 for video, SVG for poster
- **Style**: Cyberpunk neon city aesthetic
- **Features**: Autoplay, muted, loop
- **Responsive**: Scales with container
