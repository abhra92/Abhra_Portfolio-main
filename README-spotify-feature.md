# Music Collection Feature

## Overview

This feature showcases a personal music collection using Spotify embeds within the portfolio website. It allows visitors to experience the music I enjoy and get a better sense of my personality through my musical taste.

![Spotify Music Collection](https://i.imgur.com/placeholder-image.jpg)

## Contents

The music collection currently includes:

### Playlists

- **Playlist #1**: A collection of my all-time favorite tracks
- **Playlist #2**: A themed collection of songs I currently enjoy

### Individual Tracks

- **Currently Favorite Song**: The track I've been listening to on repeat
- **Most Vibey Track**: A song with great energy and mood

### Podcast Content

- **Featured Episode**: An interesting podcast episode I recommend

## Technical Implementation

This section is built with:

- React components
- Framer Motion animations
- Spotify iframe embeds
- Responsive design principles

## How to Update

### Adding a New Playlist or Track

1. Find the content on Spotify
2. Click the "Share" button
3. Select "Embed"
4. Copy the iframe code
5. Add it to the SpotifyPlaylist.jsx component

### Changing the Styling

The component uses Tailwind CSS for styling:

- Card background: `bg-white/5 backdrop-blur-sm`
- Title text: `text-green-400`
- Card spacing: `space-y-8`

### Animation Settings

Animation is handled through Framer Motion:

- Container animations in `containerVariant`
- Individual item animations in `itemVariant`

## User Experience

- All embeds allow direct playback within the portfolio
- Users can expand to full screen
- Content is lazy-loaded for better performance
- Responsive design works on mobile devices

---

_For any questions about this feature, refer to the technical documentation or contact the developer._
