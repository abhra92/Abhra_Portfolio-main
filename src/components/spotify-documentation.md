# Spotify Music Collection Component

This document provides details about the Spotify music collection component used in Abhrajyoti Dhara's portfolio website.

## Overview

The Spotify component displays a curated collection of music and podcast content embedded from Spotify. It includes playlists, favorite tracks, and podcast episodes to showcase personal taste and interests.

## Component Structure

The component is built using:

- React for the component structure
- Framer Motion for animations and transitions
- Spotify iframe embeds for displaying content

## Content Included

The component currently displays:

1. **Playlists**

   - Playlist #1: https://open.spotify.com/playlist/2MU4BocuPdpXMwrxGAw7i1
   - Playlist #2: https://open.spotify.com/playlist/3sFiqBChFppf58eQeGC21G

2. **Individual Tracks**

   - Currently Favorite Song: https://open.spotify.com/track/5PetOhEX9N0oyBB0Keqobv
   - Most Vibey Track: https://open.spotify.com/track/5UGrftqh9U3zKQUt3vs7Ob

3. **Podcast Content**
   - Featured Episode: https://open.spotify.com/episode/0OeynLzWRvnxMrYbEofzGS

## Design Features

- **Responsive Design**: All embeds are set to 100% width to be responsive on various screen sizes
- **Visual Styling**:
  - Rounded corners (12px border radius)
  - Glass-like backdrop blur effect
  - Subtle shadow for depth
  - Green accent colors to match Spotify branding
- **Animations**:
  - Fade-in and slide-up animations when scrolling to the section
  - Separate animations for each content card for a staggered effect

## Implementation Details

The component uses:

- `motion.div` from Framer Motion for animations
- CSS classes from Tailwind CSS for styling
- Spotify iframe embeds with proper permissions

## Navigation

The section is accessible from the main navigation under "My Music" and has an ID of `#spotify` for smooth scrolling functionality.

## Future Enhancements

Possible future enhancements for this component could include:

- Dynamic loading of content from Spotify API
- User interaction to toggle between different playlists
- Audio visualizations or custom player controls
- Integration with listening statistics

---

_Last updated: July 31, 2025_
