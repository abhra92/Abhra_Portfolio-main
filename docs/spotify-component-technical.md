# Spotify Component Technical Documentation

## Component Implementation

```jsx
import React from "react";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};
```

## Animation Configuration

The component uses two animation variants:

1. `containerVariant` - Applied to the entire section container
2. `itemVariant` - Applied to each individual Spotify embed card

## Spotify Embed Parameters

When embedding Spotify content, the following parameters are available:

| Parameter    | Description                                          |
| ------------ | ---------------------------------------------------- |
| `theme`      | Set to 0 for dark theme, 1 for light theme           |
| `utm_source` | Tracking parameter (set to "generator")              |
| `t`          | Starting timestamp for podcast episodes (in seconds) |

## Example Embed URLs

### Playlist Embed

```
https://open.spotify.com/embed/playlist/[PLAYLIST_ID]?utm_source=generator&theme=0
```

### Track Embed

```
https://open.spotify.com/embed/track/[TRACK_ID]?utm_source=generator&theme=0
```

### Podcast Episode Embed

```
https://open.spotify.com/embed/episode/[EPISODE_ID]?utm_source=generator&t=[TIMESTAMP]
```

## Required iframe Attributes

Each iframe embed requires the following attributes for proper functionality:

```jsx
<iframe
  style={{ borderRadius: "12px" }}
  width="100%"
  height="352"
  frameBorder="0"
  allowFullScreen=""
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
></iframe>
```

## CSS Classes Used (Tailwind)

- `rounded-xl` - Applies rounded corners
- `overflow-hidden` - Prevents content from overflowing container
- `shadow-2xl` - Adds pronounced drop shadow
- `bg-white/5` - Semi-transparent white background (5% opacity)
- `backdrop-blur-sm` - Light blur effect for frosted glass appearance
- `p-4` - Padding around content
- `space-y-8` - Vertical spacing between children elements
- `text-green-400` - Green text color for headers

## Integration Steps

To add a new Spotify embed:

1. Find the content on Spotify and click "Share"
2. Select "Embed"
3. Copy the iframe code
4. Add it to the component inside a new `motion.div` section
5. Ensure the `variants={itemVariant}` is applied for animations

## Performance Considerations

- All embeds use `loading="lazy"` to improve page load performance
- The `viewport={{ once: true, amount: 0.2 }}` ensures animations only trigger once when scrolling into view
- Each embed is isolated in its own card to allow individual loading/rendering

---

_For development use_
