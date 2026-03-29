---
name: class-script-writing
description: Guides writing weekly class script files (.svx) for the Coding the News syllabus. Use this when asked to write, draft, or create a new week's script content.
---

# Class Script Writing

Write weekly class script files (`.svx`) that match the established patterns, tone, and formatting conventions of the "Coding the News" course at CUNY Craig Newmark Graduate School of Journalism.

## When to Use

Use this skill when asked to:
- Write a new week's script content
- Draft or outline a class session
- Create tutorial content for the syllabus
- Expand bullet points from OUTLINE.md into full scripts

## Reference Materials

Before writing, consult:
- **`src/content/OUTLINE.md`** - Topic outline for each week
- **`src/content/scripts/week-1.svx`** - Example of foundational tools introduction
- **`src/content/scripts/week-2.svx`** - Example of framework/deployment topics

## File Structure

### Location
Save scripts to `src/content/scripts/week-{N}.svx`

### Frontmatter (Required)
```yaml
---
title: "Descriptive Title"
summary: "Brief description of what students will learn"
date: "Mon. DD, YYYY"
week: N
locked: false
---
```

- **title**: Short, memorable title (not "Week N" - use a descriptive phrase)
- **summary**: One sentence describing the main skills/concepts
- **date**: Format as "Mon. DD, YYYY" (e.g., "Feb. 9, 2026")
- **week**: Integer week number
- **locked**: Set to `false` for published content, `true` for future weeks

### Script Block (Required)
```svelte
<script>
  import Screenshot from '$lib/components/Screenshot.svelte';
</script>
```

Always include this even if screenshots aren't used yet—they will be added later.

## Content Structure

### Parts
Use `## Part N: Title` for major sections. Typically 3-4 parts per week.

```markdown
## Part 1: Introduction to [Topic]

## Part 2: Setting Up [Tool]

## Part 3: Building [Thing]

## Part 4: Publishing and Sharing
```

### Subheadings
Use `### Subtopic` for steps within parts.

```markdown
## Part 2: Introduction to Node.js

### Check if Node.js is already installed

### Install nvm

### Install Node.js with nvm
```

### Homework Section
Always end with `## Homework Assignments` containing 2-3 tasks following this pattern:

```markdown
## Homework Assignments

### Task 1: Creating
[Hands-on practice creating something - repositories, projects, components, etc.]

### Task 2: Exploring
[Research or exploration with Copilot assistance - cloning repos, studying code, etc.]

### Task 3: Presenting
[Prepare to share findings with class - be ready to present, write a summary, etc.]
```

## Writing Style

### Voice
- **Conversational but instructional** - Write in second person
- **Direct commands** - "Open your browser", "Click the button", "Type this command"
- **Encouraging** - "Congratulations!", "Don't worry about that one"

### UI Element References
**Use quotes, not bold**, for UI elements:
- ✅ `Click the "Clone repository" button`
- ✅ `Select "Create a new repository" from the dropdown`
- ✅ `Go to the "Settings" tab`
- ❌ `Click the **Clone repository** button`

### Code Formatting

**Inline code** for file names, commands, and short code:
```markdown
Open the `README.md` file and run `npm install`.
```

**Fenced code blocks** with language hints:
````markdown
```bash
npm run dev
```

```js
let headline = 'Breaking News';
```

```svelte
<Screenshot src="/screenshots/week-1/example.png" alt="Example" />
```
````

### Links

Use standard Markdown link syntax:
```markdown
See [GitHub's guide to Markdown](https://docs.github.com/...) for more options.
```

For external sites you want to highlight inline, you can use `<a>` tags with `target="_blank"`:
```markdown
Visit <a href="https://nodejs.org" target="_blank">nodejs.org</a> to learn more.
```

### MDsveX Parsing Pitfalls

Since `.svx` files are processed by MDsveX (Markdown + Svelte), certain characters are interpreted as Svelte syntax rather than plain text.

**Avoid `<` and `>` characters in prose.** MDsveX interprets these as Svelte component tags, causing parsing errors like:

```
Error: < is not a valid component name
```

Instead of comparison operators, use words:
- ✅ `under 600px` or `less than 600px`
- ✅ `over 900px` or `greater than 900px`
- ❌ `< 600px`
- ❌ `> 900px`

This applies everywhere in the content—paragraphs, lists, tables, and code comments outside of fenced code blocks.

**Fenced code blocks are safe.** Inside triple-backtick code blocks, `<` and `>` are treated as literal characters:

```markdown
\`\`\`css
@media (max-width: 600px) { /* This is fine */ }
\`\`\`
```

**Style blocks need special handling.** When showing SCSS/CSS code with `<style>` tags, show the style content in a code block but don't wrap it in the actual `<style>` tag in your explanation—MDsveX will try to process it.

### Explanations
- Explain **why**, not just **how**
- Use relatable analogies (git as "air traffic controller", GitHub as "airport")
- Provide context before diving into steps
- Acknowledge when something might seem complex

### Tables
Use tables to summarize information:

```markdown
| Files | Description |
|-------|-------------|
| `src/routes/+page.svelte` | Your homepage |
| `package.json` | Project dependencies |
```

## Screenshots

### When to Include
- At each major UI state change
- After important commands complete
- To show expected results
- To illustrate concepts visually

### Screenshot Component Usage

**Browser content** (web pages, GitHub, documentation):
```svelte
<Screenshot
  src="/screenshots/week-1/github-homepage.png"
  alt="GitHub homepage showing the sign up button"
  chromeTitle="GitHub"
  chromeUrl="https://github.com"
/>
```

**Desktop applications** (VS Code, terminals):
```svelte
<Screenshot
  src="/screenshots/week-1/vscode-explorer.png"
  alt="Visual Studio Code Explorer showing project files"
  showChrome={false}
/>
```

### Screenshot File Naming
- Save to `static/screenshots/week-{N}/`
- Use kebab-case: `vscode-source-control.png`, `github-new-repo.png`
- Be descriptive: `npm-install-complete.png` not `step3.png`

### Alt Text
Write descriptive alt text that explains what the screenshot shows:
- ✅ `"Visual Studio Code Source Control panel showing staged changes"`
- ✅ `"GitHub repository page with the Actions tab highlighted"`
- ❌ `"Screenshot"`
- ❌ `"VS Code"`

## Common Patterns

### Command + Expected Output
Show the command, then show what students should see:

```markdown
Type this command and press Enter:

\`\`\`bash
node --version
\`\`\`

You should see a version number like `v20.11.0` or similar.
```

### Step-by-Step Instructions
Number steps implicitly through prose, not explicitly:

```markdown
### Install the extension

Click on the Extensions icon in the left sidebar. It looks like four squares. 
Then search for "GitHub Copilot" in the search bar. Select the extension by 
GitHub from the list and click the "Install" button.
```

### Troubleshooting
Anticipate common issues:

```markdown
If you see an error message like `command not found: node`, that means Node.js 
isn't installed yet. We'll fix that in the next section.
```

### Encouraging Exploration
Include moments for students to experiment:

```markdown
Try making a few more changes. Edit the byline and publication date. Get a feel 
for how quickly you can see your changes reflected.
```

## Content Guidelines

### Pacing
- Don't rush through concepts
- One new concept at a time
- Build on previous weeks' knowledge
- Include practice exercises within the content, not just homework

### Difficulty Curve
- Start with the simplest version
- Add complexity gradually
- Acknowledge when things get harder
- Provide escape hatches ("If you get stuck, ask Copilot...")

### Real-World Context
- Reference actual news organizations using these tools
- Show open-source examples from newsrooms
- Connect concepts to journalism workflows

### Length
Scripts are substantial—typically 400-700 lines. Don't rush to condense. Students benefit from:
- Detailed step-by-step instructions
- Multiple screenshots
- Background context
- Practice opportunities

## Checklist Before Submitting

- [ ] Frontmatter is complete with title, summary, date, week, locked
- [ ] Script block imports Screenshot component
- [ ] Content divided into 3-4 Parts with `##` headings
- [ ] Subheadings use `###` for steps within parts
- [ ] UI elements use "quotes" not **bold**
- [ ] Code blocks have language hints (bash, js, svelte, etc.)
- [ ] Screenshots use appropriate `showChrome` setting
- [ ] Alt text is descriptive for all screenshots
- [ ] Homework section includes 2-3 tasks
- [ ] Content explains *why* not just *how*
- [ ] Encourages experimentation and exploration

## Example Opening

Here's how a typical script begins:

```markdown
---
title: "Svelte Components"
summary: "How to build reusable interface elements with Svelte"
date: "Feb. 9, 2026"
week: 3
locked: false
---

<script>
  import Screenshot from '$lib/components/Screenshot.svelte';
</script>

## Part 1: Introduction to Components

What's a component? It's a reusable piece of your user interface—a button, 
a card, a chart, a quote box—that you can define once and use anywhere.

Think of components like LEGO bricks. Each brick has a specific shape and 
purpose, but you can combine them in endless ways to build something new. 
In web development, components let you build complex interfaces from simple, 
well-defined pieces.

[Content continues...]