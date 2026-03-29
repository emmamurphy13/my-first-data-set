---
name: browser-screenshots
description: Captures browser screenshots and videos on request using Playwright for embedding in tutorials. Use this when asked to capture, document, screenshot, or record a web page or locally running development server.
---

# Browser Screenshot & Video Capture

Capture browser screenshots and record videos when the user requests them. This skill uses Playwright-based scripts to automate browser interactions and save screenshots or videos directly to disk.

## When to Use

Use this skill when the user asks you to:
- Capture a screenshot of a specific URL
- Document a web page or web application state
- Take screenshots of a locally running development server
- Capture a sequence of browser interactions
- Record a video or GIF of a page with animations
- Create looping videos to showcase animated content

## How to Capture

Use the Playwright capture script located at `.github/skills/browser-screenshots/scripts/capture.cjs`.

### Basic Screenshot

```bash
node .github/skills/browser-screenshots/scripts/capture.cjs \
  --url https://example.com \
  --output static/screenshots/week-1/example-homepage.png
```

### Common Options

| Option | Description | Default |
|--------|-------------|---------|
| `--url` | URL to capture (required) | - |
| `--output` | Output file path (required) | - |
| `--width` | Viewport width | 1280 |
| `--height` | Viewport height | 800 |
| `--fullpage` | Capture full scrollable page | false |
| `--element` | CSS selector to capture specific element | - |
| `--highlight` | CSS selector to highlight with red border | - |
| `--execute` | JavaScript to run before capture | - |
| `--wait` | Milliseconds to wait before capture | 500 |
| `--dark` | Use dark color scheme | false |
| `--phone` | Use mobile phone viewport (375x812) | false |

### Examples

**Capture with dark mode:**
```bash
node .github/skills/browser-screenshots/scripts/capture.cjs \
  --url https://code.visualstudio.com \
  --dark \
  --output static/screenshots/week-1/vscode-homepage.png
```

**Highlight a specific element:**
```bash
node .github/skills/browser-screenshots/scripts/capture.cjs \
  --url https://github.com/new \
  --highlight ".repo-name-input" \
  --output static/screenshots/week-1/github-repo-name.png
```

**Capture a specific element only:**
```bash
node .github/skills/browser-screenshots/scripts/capture.cjs \
  --url https://example.com \
  --element ".hero-section" \
  --output static/screenshots/week-1/hero-only.png
```

**Execute JavaScript before capture (e.g., click a button):**
```bash
node .github/skills/browser-screenshots/scripts/capture.cjs \
  --url https://example.com \
  --execute "document.querySelector('button').click()" \
  --wait 1000 \
  --output static/screenshots/week-1/after-click.png
```

**Full page screenshot:**
```bash
node .github/skills/browser-screenshots/scripts/capture.cjs \
  --url https://example.com \
  --fullpage \
  --output static/screenshots/week-1/full-page.png
```

## Saving Screenshots

Save to `/static/screenshots/week-{week}/` with descriptive kebab-case filenames.

A WebP copy is automatically generated alongside each PNG/JPEG screenshot (requires `cwebp` — install with `brew install webp`). The Screenshot and PhoneScreenshot components serve WebP via `<picture>` elements for better performance. You do not need to reference the `.webp` files manually.

**Naming convention:** Use kebab-case:
- ✅ `github-new-repo.png`
- ✅ `homepage-hero-section.png`
- ❌ `GitHubNewRepo.png`

**Directory structure:**
```
static/screenshots/
  week-1/
    vscode-homepage.png
    github-new-repo.png
  week-2/
    ...
```

## Embedding in Tutorials

When embedding in `.svx` files, use the Screenshot component:

```svelte
<script>
  import Screenshot from '$lib/components/Screenshot.svelte';
</script>

<Screenshot 
  src="/screenshots/week-1/github-new-repo.png" 
  alt="GitHub new repository form"
  chromeTitle="Create a new repository"
  chromeUrl="https://github.com/new"
/>
```

### Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | string | required | Path relative to `/static/` |
| `alt` | string | required | Accessibility description |
| `showChrome` | boolean | `true` | Browser window styling |
| `chromeTitle` | string | `''` | Title bar text |
| `chromeUrl` | string | `''` | Address bar URL |

## Phone Screenshots

Use the `--phone` flag to capture at a mobile viewport size, then embed with the `PhoneScreenshot` component which wraps the image in a phone-shaped frame.

### Capture

```bash
node .github/skills/browser-screenshots/scripts/capture.cjs \
  --url http://localhost:5174/ \
  --phone \
  --output static/screenshots/week-6/mobile-view.png
```

### Embedding in Tutorials

```svelte
<script>
  import PhoneScreenshot from '$lib/components/PhoneScreenshot.svelte';
</script>

<PhoneScreenshot
  src="/screenshots/week-6/mobile-view.png"
  alt="Mobile view of the page showing responsive layout"
/>
```

### PhoneScreenshot Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | string | required | Path relative to `/static/` |
| `alt` | string | required | Accessibility description |
| `maxWidth` | string | `'320px'` | CSS max-width of the phone frame |

## Recording Videos

Use the video recording script for pages with animations, GIFs, or dynamic content that needs to be captured over time.

### Basic Video Recording

```bash
node .github/skills/browser-screenshots/scripts/record-video.cjs \
  --url https://example.com \
  --output static/screenshots/week-2/animation.gif \
  --duration 5
```

### Video Recording Options

| Option | Description | Default |
|--------|-------------|---------|
| `--url` | URL to capture (required) | - |
| `--output` | Output file path - .gif, .mp4, or .webm (required) | - |
| `--width` | Viewport width | 1280 |
| `--height` | Viewport height | 800 |
| `--duration` | Recording duration in seconds | 5 |
| `--fps` | Frames per second for GIF output | 10 |
| `--execute` | JavaScript to run before recording | - |
| `--wait` | Milliseconds to wait before recording | 500 |
| `--dark` | Use dark color scheme | false |

### Video Examples

**Record a 5-second GIF:**
```bash
node .github/skills/browser-screenshots/scripts/record-video.cjs \
  --url https://example.com \
  --output static/screenshots/week-2/demo.gif \
  --duration 5
```

**Record MP4 video:**
```bash
node .github/skills/browser-screenshots/scripts/record-video.cjs \
  --url https://example.com \
  --output static/videos/demo.mp4 \
  --duration 10
```

**Higher framerate GIF for smoother animation:**
```bash
node .github/skills/browser-screenshots/scripts/record-video.cjs \
  --url https://example.com \
  --output static/screenshots/week-2/smooth.gif \
  --fps 15 \
  --duration 3
```

### Embedding Videos in Tutorials

For GIFs, use the same Screenshot component:

```svelte
<Screenshot 
  src="/screenshots/week-2/animation.gif" 
  alt="Animated demo of the feature"
  chromeTitle="Demo"
  chromeUrl="https://example.com"
/>
```

For MP4 videos, use a standard HTML video tag in the `.svx` file:

```html
<video autoplay loop muted playsinline width="100%">
  <source src="/videos/demo.mp4" type="video/mp4" />
</video>
```

## Authenticated Sessions

Some pages require login to display certain elements (e.g., the "Use this template" button on GitHub). You can save authenticated sessions and reuse them for captures.

### Saving a Session

Run the session saver script, which opens a browser where you can log in:

```bash
node .github/skills/browser-screenshots/scripts/save-session.cjs \
  --url https://github.com \
  --session github
```

This opens a browser window. Log in to the site, then press Enter in the terminal to save your session. Sessions are stored in `~/.playwright-sessions/`.

### Using a Saved Session

Add the `--session` flag to capture or record commands:

```bash
# Screenshot with GitHub session
node .github/skills/browser-screenshots/scripts/capture.cjs \
  --url https://github.com/palewire/cuny-jour-static-site-template \
  --session github \
  --output static/screenshots/week-2/github-repo.png

# Video with GitHub session  
node .github/skills/browser-screenshots/scripts/record-video.cjs \
  --url https://github.com/settings \
  --session github \
  --output static/screenshots/week-2/github-settings.gif
```

### Listing Saved Sessions

```bash
node .github/skills/browser-screenshots/scripts/save-session.cjs --list
```

### Session Options

| Option | Description | Default |
|--------|-------------|---------|
| `--url` | URL to open for login | https://github.com |
| `--session` | Name to save session as | default |
| `--list` | List all saved sessions | - |

## Prerequisites

Playwright must be installed. If not already installed:

```bash
npm install playwright
npx playwright install chromium
```

For GIF output, ffmpeg must also be installed:

```bash
brew install ffmpeg
```

## Limitations

- **Cannot capture:** VS Code windows, terminal output, system dialogs (these require manual screenshots)
- **Requires network access:** URLs must be reachable from the machine running the script
- **GIF output requires ffmpeg:** Install via `brew install ffmpeg` on macOS
- **Sessions expire:** Saved sessions will expire based on the site's cookie policies; re-run save-session when needed
