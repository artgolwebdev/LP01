# 🎬 Video Assets Directory

This directory contains video assets for the Cyber Brutal landing page.

## 📁 Folder Structure

```
src/assets/video/
├── hero-background.mp4      # Main hero video (MP4 format)
├── hero-background.webm     # Hero video (WebM format for better compression)
├── hero-video-poster.svg    # Video poster/thumbnail
└── README.md               # This file
```

## 🎥 Hero Background Video

### **File Specifications:**

| File | Format | Resolution | Duration | Size | Usage |
|------|--------|------------|----------|------|-------|
| `hero-background.mp4` | MP4 (H.264) | 1920x1080 | 10-30s | <10MB | Primary video |
| `hero-background.webm` | WebM (VP9) | 1920x1080 | 10-30s | <8MB | Fallback video |
| `hero-video-poster.svg` | SVG | 1920x1080 | - | <50KB | Video poster |

### **Video Requirements:**

#### **Technical Specifications:**
- **Resolution**: 1920x1080 (Full HD)
- **Frame Rate**: 30fps
- **Codec**: H.264 (MP4) / VP9 (WebM)
- **Bitrate**: 2-5 Mbps (MP4) / 1-3 Mbps (WebM)
- **Duration**: 10-30 seconds (looping)
- **Audio**: None (muted)

#### **Content Requirements:**
- **Style**: Cyberpunk/Brutalist aesthetic
- **Mood**: Dark, moody, futuristic
- **Loop**: Seamless loop for continuous playback
- **Contrast**: Good contrast for text overlay readability
- **Performance**: Optimized for web streaming

### **Content Suggestions:**

#### **Visual Elements:**
- Cyberpunk cityscapes with neon lights
- Digital particle effects and animations
- Futuristic technology interfaces
- Abstract geometric patterns
- Matrix-style digital rain
- Holographic displays
- Circuit board patterns
- Neon light trails

#### **Color Palette:**
- Primary: Cyan (#00ffff)
- Secondary: Magenta (#ff00ff)
- Accent: Yellow (#ffff00)
- Background: Dark blacks and grays
- Highlights: Bright neon colors

## 🔧 Implementation

### **In Hero Component:**
```typescript
import { getHeroVideoPath, getHeroVideoWebmPath, getHeroVideoPosterPath } from "../utils/imageUtils";

<video
  className="w-full h-full object-cover"
  autoPlay
  muted
  loop
  playsInline
  poster={getHeroVideoPosterPath()}
>
  <source src={getHeroVideoPath()} type="video/mp4" />
  <source src={getHeroVideoWebmPath()} type="video/webm" />
  {/* Fallback for browsers that don't support video */}
  <div className="w-full h-full bg-gradient-to-br from-cyan-900/20 via-magenta-900/20 to-yellow-900/20"></div>
</video>
```

### **Video Attributes:**
- **`autoPlay`**: Starts playing automatically
- **`muted`**: No audio (required for autoplay)
- **`loop`**: Continuously loops the video
- **`playsInline`**: Plays inline on mobile devices
- **`poster`**: Shows poster image while video loads

## 🎯 Replacement Instructions

### **For Real Videos:**

1. **Replace MP4 File**: 
   - Replace `hero-background.mp4` with your actual video
   - Ensure it meets the technical specifications above

2. **Replace WebM File**:
   - Convert your video to WebM format for better compression
   - Replace `hero-background.webm` with the converted file

3. **Update Poster**:
   - Create a poster image from your video
   - Replace `hero-video-poster.svg` with JPG/PNG poster

### **Video Creation Tools:**
- **Adobe After Effects**: Professional video creation
- **Blender**: Free 3D animation software
- **DaVinci Resolve**: Free video editing
- **Online Tools**: Canva, Kapwing, etc.

### **Video Sources:**
- **Stock Video**: Pexels, Pixabay, Videvo
- **Custom Creation**: Create your own cyberpunk video
- **AI Generation**: Use AI tools to generate cyberpunk content

## 🚀 Performance Optimization

### **File Size Optimization:**
- Compress videos using tools like HandBrake
- Use WebM format for smaller file sizes
- Optimize bitrate for web streaming
- Consider multiple resolutions for different devices

### **Loading Optimization:**
- Use poster image for immediate visual feedback
- Implement lazy loading for better performance
- Consider preloading for critical videos

### **Browser Compatibility:**
- MP4 for broad compatibility
- WebM for modern browsers
- Fallback gradient for unsupported browsers

## 📝 Notes

- **Mobile Performance**: Videos can impact mobile performance
- **Bandwidth**: Consider users with slow internet connections
- **Accessibility**: Provide fallback content for screen readers
- **SEO**: Videos can improve page engagement metrics

## 🎨 Design Integration

The video integrates with the existing cyberpunk aesthetic:
- Dark overlay for text readability
- Consistent color palette
- Seamless transition with other elements
- Maintains brutalist design principles
