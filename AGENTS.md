# AGENTS.md

Instructions and context for AI coding agents working in this repository.

## Design Tokens Documentation

The Storybook page `src/stories/DesignTokens.mdx` documents every CSS custom
property (design token) declared in the `:root` block of `src/app.scss`, plus
all SCSS variables and mixins defined in `src/lib/styles/`.

**This page must be kept up to date.**  Whenever you add, remove, or change any
of the following, update `src/stories/DesignTokens.mdx` to match:

- A CSS custom property in the `:root` block of `src/app.scss`
- A SCSS variable in `src/lib/styles/_variables.scss`
- A SCSS mixin in `src/lib/styles/_mixins.scss`
- The barrel file `src/lib/styles/_index.scss` (e.g. a new partial is added)

Specific things to keep in sync:

| Change | What to update in DesignTokens.mdx |
|---|---|
| New color token | Add a row to the relevant color table (swatch + token + value + usage) |
| Renamed or removed token | Remove or rename the corresponding row/entry |
| New spacing step | Add a row to the Spacing section |
| New layout token | Add a row to the Layout table |
| New border/transition/opacity token | Add a row to the relevant table |
| New SCSS variable | Add a row to the SCSS Variables table |
| New SCSS mixin | Add a code block to the SCSS Mixins section |
| Changed breakpoint value | Update both the SCSS Variables table and the mixin descriptions |
