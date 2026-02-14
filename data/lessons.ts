export interface Lesson {
    slug: string;
    title: string;
    description: string;
    content: string;
    practiceInstructions: string;
    practiceDefaultCode: string;
}

export interface LessonCategory {
    name: string;
    lessons: Lesson[];
}

export const lessonCategories: LessonCategory[] = [
    {
        name: "Getting Started",
        lessons: [
            {
                slug: "what-is-markdown",
                title: "What is Markdown?",
                description: "Learn what Markdown is and why it matters.",
                content: `
## What is Markdown?

Markdown is a **lightweight markup language** created by John Gruber in 2004. It lets you format text using simple, readable syntax that converts to HTML.

## Why Use Markdown?

1. **Simple** — easy to learn, easy to read
2. **Portable** — works everywhere, plain text files
3. **Fast** — write formatted content without a mouse
4. **Universal** — supported by hundreds of apps and platforms

## How It Works

You write plain text with special characters like \`#\`, \`*\`, and \`-\` to indicate formatting. A Markdown processor then converts it to HTML.

\`\`\`markdown
# This is a heading
This is a **bold** word and this is *italic*.
\`\`\`

Becomes:

# This is a heading
This is a **bold** word and this is *italic*.

> 💡 Throughout this course, you'll learn every Markdown feature step by step with hands-on practice!
        `,
                practiceInstructions:
                    "Try writing your first Markdown! Write a heading, a paragraph with bold text, and a list of 3 items.",
                practiceDefaultCode: `# My First Markdown

Write your first paragraph here with some **bold** text.

- Item one
- Item two
- Item three
`,
            },
            {
                slug: "markdown-syntax-overview",
                title: "Syntax Overview",
                description: "A quick bird's-eye view of all Markdown syntax.",
                content: `
## Markdown Syntax at a Glance

Here's a quick reference of all the syntax you'll learn in this course:

| Element | Syntax |
|---|---|
| Heading | \`# H1\` \`## H2\` \`### H3\` |
| Bold | \`**bold text**\` |
| Italic | \`*italic text*\` |
| Blockquote | \`> quote\` |
| Ordered List | \`1. Item\` |
| Unordered List | \`- Item\` |
| Code | \`\\\`code\\\`\` |
| Horizontal Rule | \`---\` |
| Link | \`[title](url)\` |
| Image | \`![alt](url)\` |

## Two Types of Syntax

### Inline Elements
These are applied within a line of text:
\`\`\`markdown
This has **bold**, *italic*, and \`code\` inline.
\`\`\`

### Block Elements
These take up their own block/section:
\`\`\`markdown
# Heading (block)

> Blockquote (block)

- List item (block)
\`\`\`

> 💡 Don't worry about memorizing everything now. We'll cover each one in detail!
        `,
                practiceInstructions:
                    "Try using at least 4 different Markdown elements from the table above in one document.",
                practiceDefaultCode: `# My Syntax Practice

Try **bold** and *italic* here.

> A blockquote goes here

1. First item
2. Second item

---

Visit [MarkdownVerse](https://markdownverse.com) to learn more.
`,
            },
        ],
    },
    {
        name: "Basic Formatting",
        lessons: [
            {
                slug: "headings",
                title: "Headings",
                description: "Structure your content with headings from H1 to H6.",
                content: `
## Headings

Headings create the structure of your document. Use the \`#\` symbol followed by a space to create headings.

## Syntax

\`\`\`markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
\`\`\`

## Rules to Remember

- Always put a **space** after the \`#\` symbol
- Use only **one H1** per document (it's your title)
- Don't skip heading levels (go H1 → H2 → H3, not H1 → H3)
- Headings help with **accessibility** and **SEO**

## Alternative Syntax

For H1 and H2, you can also use underline style:

\`\`\`markdown
Heading 1
=========

Heading 2
---------
\`\`\`

> 💡 The \`#\` style is more common and recommended.

## Best Practices

- Use headings to create a clear **document outline**
- Keep heading text **concise and descriptive**
- Think of headings like a table of contents
        `,
                practiceInstructions:
                    "Create a document with all 6 heading levels. Each heading should describe what level it is.",
                practiceDefaultCode: `# Heading Level 1

## Heading Level 2

### Heading Level 3

#### Now try levels 4, 5, and 6 below:

`,
            },
            {
                slug: "paragraphs",
                title: "Paragraphs & Line Breaks",
                description: "Learn how to create paragraphs and line breaks.",
                content: `
## Paragraphs

To create a paragraph, simply write text. Separate paragraphs with a **blank line**.

\`\`\`markdown
This is the first paragraph.

This is the second paragraph.
\`\`\`

## Line Breaks

To create a line break within a paragraph (without starting a new paragraph), end a line with **two or more spaces** or use a \`<br>\` tag.

\`\`\`markdown
This is line one.  
This is line two (same paragraph).
\`\`\`

## Common Mistake

Just pressing Enter once does NOT create a new line in most Markdown renderers:

\`\`\`markdown
This is line one.
This will appear on the SAME line.
\`\`\`

These two lines will be rendered as a single paragraph.

## The Fix

Either add a **blank line** between them (new paragraph) or add **two spaces** at the end of the first line (line break).

> 💡 The two-space line break is often invisible, so many people prefer using \`<br>\` for clarity.
        `,
                practiceInstructions:
                    "Create two separate paragraphs, and then create two lines within the same paragraph using a line break.",
                practiceDefaultCode: `This is my first paragraph. It talks about something interesting.

This is my second paragraph.

Now try a line break:
Add two spaces at the end of this line  
And this should appear on a new line!
`,
            },
            {
                slug: "emphasis",
                title: "Bold, Italic & More",
                description: "Make text bold, italic, or both for emphasis.",
                content: `
## Text Emphasis

Markdown gives you several ways to emphasize text.

## Italic

Wrap text with single \`*\` or \`_\`:

\`\`\`markdown
*This is italic*
_This is also italic_
\`\`\`

## Bold

Wrap text with double \`**\` or \`__\`:

\`\`\`markdown
**This is bold**
__This is also bold__
\`\`\`

## Bold AND Italic

Wrap text with triple \`***\` or \`___\`:

\`\`\`markdown
***This is bold and italic***
___This is also bold and italic___
\`\`\`

## Combining Emphasis

You can nest bold inside italic and vice versa:

\`\`\`markdown
**This is bold with *italic* inside**
*This is italic with **bold** inside*
\`\`\`

## Best Practices

- Use \`*\` instead of \`_\` (more widely supported)
- Don't overuse emphasis — if everything is bold, nothing stands out
- Use **bold** for important terms
- Use *italic* for subtle emphasis or introducing new terms

> 💡 Tip: Most editors use \`Ctrl+B\` for bold and \`Ctrl+I\` for italic!
        `,
                practiceInstructions:
                    "Write a paragraph using italic, bold, and bold+italic text. Try combining them!",
                practiceDefaultCode: `# Emphasis Practice

This word is *italic* and this word is **bold**.

Now try ***bold and italic*** together!

Write a sentence with **bold and *italic* nested** inside.
`,
            },
            {
                slug: "blockquotes",
                title: "Blockquotes",
                description: "Quote text and create callout-style blocks.",
                content: `
## Blockquotes

Use the \`>\` character at the beginning of a line to create a blockquote.

## Basic Syntax

\`\`\`markdown
> This is a blockquote.
\`\`\`

## Multi-line Blockquotes

\`\`\`markdown
> This is a blockquote
> that spans multiple lines.
> Each line starts with >.
\`\`\`

You can also use a single \`>\` and let the text wrap:

\`\`\`markdown
> This is a long blockquote that will wrap to the next line automatically without needing another > symbol.
\`\`\`

## Nested Blockquotes

\`\`\`markdown
> First level
>> Second level
>>> Third level
\`\`\`

## Blockquotes with Other Elements

\`\`\`markdown
> ### A heading inside a quote
>
> - List item one
> - List item two
>
> **Bold text** in a blockquote with *italic too*.
\`\`\`

## Common Uses

- Quoting someone else's text
- Highlighting important notes or warnings
- Creating callout-style information boxes
- Email-style reply quoting

> 💡 Many documentation sites use blockquotes styled as tip/warning/info boxes!
        `,
                practiceInstructions:
                    "Create a simple blockquote, a nested blockquote, and a blockquote containing a heading and list.",
                practiceDefaultCode: `> This is a simple blockquote.

> First level
>> Nested blockquote

> ### Tips
>
> - Tip one
> - Tip two
`,
            },
        ],
    },
    {
        name: "Lists",
        lessons: [
            {
                slug: "unordered-lists",
                title: "Unordered Lists",
                description: "Create bullet-point lists with dashes, stars, or plus.",
                content: `
## Unordered Lists

Unordered lists use bullets. You can use \`-\`, \`*\`, or \`+\` to create them.

## Syntax

\`\`\`markdown
- Item one
- Item two
- Item three
\`\`\`

All of these work the same:

\`\`\`markdown
* Item one
+ Item one
- Item one
\`\`\`

## Nested Lists

Indent with **2 or 4 spaces** to create nested (sub) lists:

\`\`\`markdown
- Fruits
  - Apple
  - Banana
    - Yellow Banana
    - Green Banana
- Vegetables
  - Carrot
  - Broccoli
\`\`\`

## Mixing Content in Lists

You can add paragraphs, blockquotes, or code inside list items by indenting:

\`\`\`markdown
- First item

  Additional paragraph under first item.

- Second item

  > A blockquote inside a list

- Third item
\`\`\`

## Best Practices

- Pick **one symbol** (\`-\` recommended) and stick with it
- Keep list items **concise**
- Use nested lists sparingly (max 2-3 levels deep)

> 💡 Most people use \`-\` (dash) for unordered lists.
        `,
                practiceInstructions:
                    "Create an unordered list of your favorite foods with at least 2 nested sub-items.",
                practiceDefaultCode: `# My Favorite Foods

- Pizza
  - Margherita
  - Pepperoni
- Sushi
- Tacos
  - Chicken
  - Beef
`,
            },
            {
                slug: "ordered-lists",
                title: "Ordered Lists",
                description: "Create numbered lists with automatic ordering.",
                content: `
## Ordered Lists

Use numbers followed by a period to create ordered (numbered) lists.

## Syntax

\`\`\`markdown
1. First item
2. Second item
3. Third item
\`\`\`

## Auto-Numbering

The actual numbers don't matter! Markdown will auto-number them:

\`\`\`markdown
1. First item
1. Second item
1. Third item
\`\`\`

This still renders as 1, 2, 3. But it's best practice to use correct numbers for readability.

## Starting at a Different Number

The first number determines the starting number:

\`\`\`markdown
5. Fifth item
6. Sixth item
7. Seventh item
\`\`\`

## Nested Ordered Lists

\`\`\`markdown
1. First step
   1. Sub-step one
   2. Sub-step two
2. Second step
3. Third step
\`\`\`

## Mixing Ordered and Unordered

\`\`\`markdown
1. First main item
   - Sub-bullet one
   - Sub-bullet two
2. Second main item
   - Another sub-bullet
\`\`\`

> 💡 Ordered lists are great for step-by-step instructions, tutorials, and procedures.
        `,
                practiceInstructions:
                    "Create a numbered step-by-step guide for making tea or coffee, with at least one nested sub-list.",
                practiceDefaultCode: `# How to Make Coffee

1. Boil water
2. Prepare your cup
   - Add coffee powder
   - Add sugar if desired
3. Pour hot water
4. Stir well
5. Enjoy!
`,
            },
            {
                slug: "task-lists",
                title: "Task Lists",
                description: "Create interactive checklists with checkboxes.",
                content: `
## Task Lists

Task lists (or checklists) are a GitHub Flavored Markdown (GFM) feature. They create interactive checkboxes.

## Syntax

\`\`\`markdown
- [ ] Unchecked item
- [x] Checked item
\`\`\`

## Example — Project Checklist

\`\`\`markdown
- [x] Design the homepage
- [x] Build the navbar
- [ ] Create the learn page
- [ ] Add playground feature
- [ ] Deploy to production
\`\`\`

## Nesting Task Lists

\`\`\`markdown
- [ ] Frontend
  - [x] Components
  - [ ] Styling
  - [ ] Testing
- [ ] Backend
  - [ ] API routes
  - [ ] Database
\`\`\`

## Important Notes

- Task lists need the **dash and space** before the brackets: \`- [ ]\`
- Use a lowercase \`x\` to check: \`- [x]\`
- On GitHub, you can actually **click the checkboxes** to toggle them!
- Not all Markdown renderers support task lists (it's a GFM extension)

## Common Uses

- Project tracking
- Todo lists
- Feature checklists
- Bug reporting templates

> 💡 Task lists are one of the most useful features on GitHub issues and pull requests!
        `,
                practiceInstructions:
                    "Create a weekend todo list with at least 6 items. Mark some as completed and some as pending.",
                practiceDefaultCode: `# Weekend Todo

- [x] Wake up early
- [x] Morning exercise
- [ ] Read a book
- [ ] Cook lunch
- [ ] Practice Markdown
- [ ] Watch a movie
`,
            },
        ],
    },
    {
        name: "Links & Media",
        lessons: [
            {
                slug: "links",
                title: "Links",
                description: "Add clickable links to your Markdown documents.",
                content: `
## Links

Links are one of the most essential Markdown features. They let you connect to other pages, websites, or sections.

## Inline Links

\`\`\`markdown
[Link Text](https://example.com)
\`\`\`

## Links with Titles

Add a hover title in quotes:

\`\`\`markdown
[Google](https://google.com "Search Engine")
\`\`\`

## Reference Links

For cleaner documents, you can define links separately:

\`\`\`markdown
[Click here][1] to visit Google.
[And here][homepage] for the homepage.

[1]: https://google.com
[homepage]: https://example.com
\`\`\`

## Autolinks

URLs and emails are auto-linked in most renderers:

\`\`\`markdown
https://example.com
user@example.com
\`\`\`

## Section Links (Anchors)

Link to headings within the same document:

\`\`\`markdown
[Jump to Introduction](#introduction)

## Introduction
Content here...
\`\`\`

## Best Practices

- Use **descriptive link text** (not "click here")
- Use reference links for **repeated URLs**
- Always add the \`https://\` protocol
- Test your links after writing!

> 💡 On GitHub, heading anchors are auto-generated from the heading text in lowercase with hyphens.
        `,
                practiceInstructions:
                    "Create 3 different types of links: inline, with title, and a reference-style link.",
                practiceDefaultCode: `# Link Practice

## Inline Link
Visit [Google](https://google.com) for searching.

## Link with Title
Check out [MDN](https://developer.mozilla.org "Mozilla Developer Network")

## Reference Link
Read the [documentation][docs] for more info.

[docs]: https://markdownverse.com
`,
            },
            {
                slug: "images",
                title: "Images",
                description: "Embed images in your Markdown content.",
                content: `
## Images

Images in Markdown work similarly to links, but with an exclamation mark \`!\` in front.

## Syntax

\`\`\`markdown
![Alt text](image-url)
\`\`\`

## With Title

\`\`\`markdown
![Alt text](image-url "Optional title")
\`\`\`

## Examples

\`\`\`markdown
![Sunset](https://example.com/sunset.jpg)
![Logo](./images/logo.png "Company Logo")
\`\`\`

## Reference-Style Images

\`\`\`markdown
![Alt text][image-id]

[image-id]: https://example.com/image.png
\`\`\`

## Linked Images

Wrap an image in a link to make it clickable:

\`\`\`markdown
[![Alt text](image-url)](link-url)
\`\`\`

## Important Notes

- **Alt text** is required for accessibility (screen readers)
- Markdown doesn't support image **resizing** natively
- For resizing, you can use HTML: \`<img src="url" width="300">\`
- Use **relative paths** for local images
- Use **absolute URLs** for web images

## Best Practices

- Always include meaningful **alt text**
- Optimize image file sizes for faster loading
- Use descriptive file names
- Host images on reliable servers or CDNs

> 💡 Alt text describes the image for users who can't see it — it's important for accessibility!
        `,
                practiceInstructions:
                    "Add an image with alt text, then create a linked image (image that links to a URL when clicked).",
                practiceDefaultCode: `# Image Practice

## Basic Image
![Placeholder](https://via.placeholder.com/400x200)

## Linked Image
[![Click me](https://via.placeholder.com/200x100)](https://markdownverse.com)
`,
            },
        ],
    },
    {
        name: "Code",
        lessons: [
            {
                slug: "inline-code",
                title: "Inline Code",
                description: "Highlight code words within your text.",
                content: `
## Inline Code

Use backticks to highlight code, commands, or technical terms within a sentence.

## Syntax

\`\`\`markdown
Use the \\\`console.log()\\\` function to print output.
\`\`\`

Renders as: Use the \`console.log()\` function to print output.

## When to Use Inline Code

- **Function names**: \`useState()\`, \`map()\`, \`filter()\`
- **Variable names**: \`userName\`, \`isActive\`
- **Commands**: \`npm install\`, \`git commit\`
- **File names**: \`package.json\`, \`index.html\`
- **Keyboard shortcuts**: \`Ctrl+C\`, \`Cmd+V\`
- **Technical terms**: \`API\`, \`HTTP\`, \`JSON\`

## Backticks Inside Inline Code

To include a backtick inside inline code, use double backticks:

\`\`\`markdown
\`\`Use \\\`code\\\` here\`\`
\`\`\`

## Don't Overuse It

Inline code is for **technical terms and code references**. Don't use it for regular emphasis — use **bold** or *italic* for that.

> 💡 Inline code uses a monospace font, making it stand out from regular text.
        `,
                practiceInstructions:
                    "Write a paragraph about programming that uses at least 5 inline code references for functions, variables, or commands.",
                practiceDefaultCode: `# Inline Code Practice

To start a React project, run \`npx create-next-app\` in your terminal.

The \`useState\` hook returns a \`state\` variable and a \`setState\` function.

Press \`Ctrl+S\` to save your file.
`,
            },
            {
                slug: "code-blocks",
                title: "Code Blocks",
                description: "Display multi-line code with syntax highlighting.",
                content: `
## Code Blocks

Code blocks display multiple lines of code with proper formatting and optional syntax highlighting.

## Fenced Code Blocks

Use triple backticks to create a code block:

\`\`\`markdown
\\\`\\\`\\\`
function hello() {
  console.log("Hello, World!");
}
\\\`\\\`\\\`
\`\`\`

## Syntax Highlighting

Add the language name after the opening backticks:

\`\`\`markdown
\\\`\\\`\\\`javascript
const name = "Markdown";
console.log(\`Hello, \${name}!\`);
\\\`\\\`\\\`
\`\`\`

## Common Language Identifiers

| Language | Identifier |
|---|---|
| JavaScript | \`javascript\` or \`js\` |
| TypeScript | \`typescript\` or \`ts\` |
| Python | \`python\` or \`py\` |
| HTML | \`html\` |
| CSS | \`css\` |
| Bash/Shell | \`bash\` or \`sh\` |
| JSON | \`json\` |
| Markdown | \`markdown\` or \`md\` |

## Indented Code Blocks

You can also create code blocks by indenting with 4 spaces:

\`\`\`markdown
    function hello() {
        return "world";
    }
\`\`\`

> ⚠️ Fenced code blocks (with backticks) are preferred over indented code blocks.

## Best Practices

- Always specify the **language** for syntax highlighting
- Keep code blocks **focused and short**
- Add comments in your code for clarity

> 💡 Code blocks are essential for documentation, tutorials, and README files!
        `,
                practiceInstructions:
                    "Create code blocks in 3 different languages (JavaScript, Python, and HTML) with syntax highlighting.",
                practiceDefaultCode: `# Code Block Practice

\`\`\`javascript
function greet(name) {
  return "Hello, " + name + "!";
}
\`\`\`

\`\`\`python
def greet(name):
    return f"Hello, {name}!"
\`\`\`

\`\`\`html
<h1>Hello, World!</h1>
<p>This is HTML.</p>
\`\`\`
`,
            },
        ],
    },
    {
        name: "Advanced Elements",
        lessons: [
            {
                slug: "horizontal-rules",
                title: "Horizontal Rules",
                description: "Create visual dividers between content sections.",
                content: `
## Horizontal Rules

Horizontal rules create a visual line that separates content sections.

## Syntax

You can use any of these (3 or more characters):

\`\`\`markdown
---
***
___
\`\`\`

All three produce the same result — a horizontal line.

## Usage Example

\`\`\`markdown
## Section One

Content for section one goes here.

---

## Section Two

Content for section two goes here.
\`\`\`

## Important Rules

- Use **three or more** characters
- Put a **blank line** before and after the rule
- With \`---\`, make sure there's a blank line above it, otherwise it may be interpreted as a heading underline

## Best Practices

- Use \`---\` consistently (most common)
- Don't overuse horizontal rules
- Use them to separate **major sections** of content
- They're useful in long documents to break up content

> 💡 Think of horizontal rules as chapter dividers in a book.
        `,
                practiceInstructions:
                    "Create a document with 3 sections separated by horizontal rules. Use all three syntax variations.",
                practiceDefaultCode: `# Section One

This is the first section of content.

---

# Section Two

This is the second section.

***

# Section Three

This is the third section.
`,
            },
            {
                slug: "tables",
                title: "Tables",
                description: "Organize data in rows and columns with tables.",
                content: `
## Tables

Tables let you display data in organized rows and columns.

## Basic Syntax

\`\`\`markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
\`\`\`

## Column Alignment

Use colons in the separator row:

\`\`\`markdown
| Left | Center | Right |
|:-----|:------:|------:|
| L    | C      | R     |
| L    | C      | R     |
\`\`\`

- \`:---\` = left align (default)
- \`:---:\` = center align
- \`---:\` = right align

## Formatting in Tables

You can use inline formatting inside table cells:

\`\`\`markdown
| Feature | Status |
|---------|--------|
| **Bold** | *Italic* |
| \`code\` | ~~strike~~ |
| [Link](url) | Normal |
\`\`\`

## Tips for Tables

- You don't need to align the pipes perfectly — it just looks nicer
- The minimum separator is \`---\` (3 dashes)
- Tables must have a **header row** and a **separator row**
- Each row must have the **same number of columns**

## Minimal Syntax

This is valid too:

\`\`\`markdown
|Name|Age|
|-|-|
|John|25|
\`\`\`

> 💡 For complex tables, consider using an online Markdown table generator tool!
        `,
                practiceInstructions:
                    "Create a table with 3 columns and 4 rows. Use different alignments for each column (left, center, right).",
                practiceDefaultCode: `# Table Practice

| Name | Role | Salary |
|:-----|:----:|-------:|
| Alice | Developer | $120,000 |
| Bob | Designer | $110,000 |
| Carol | Manager | $130,000 |
| Dave | Intern | $40,000 |
`,
            },
            {
                slug: "strikethrough",
                title: "Strikethrough",
                description: "Cross out text using strikethrough formatting.",
                content: `
## Strikethrough

Strikethrough draws a line through text, indicating it's been deleted or is no longer relevant.

## Syntax

\`\`\`markdown
~~This text is struck through~~
\`\`\`

Renders as: ~~This text is struck through~~

## Common Uses

### Showing Corrections
\`\`\`markdown
The meeting is at ~~3 PM~~ 4 PM.
\`\`\`

### Todo Items (Completed)
\`\`\`markdown
- ~~Buy groceries~~
- ~~Clean the house~~
- Walk the dog
\`\`\`

### Changelog Updates
\`\`\`markdown
~~v1.0 — Old feature removed~~
v2.0 — New feature added
\`\`\`

### Humor / Tone
\`\`\`markdown
This is ~~totally not~~ a great idea.
\`\`\`

## Important Notes

- Strikethrough is a **GitHub Flavored Markdown** (GFM) extension
- Not all Markdown renderers support it
- Use **double tildes** \`~~\` on both sides
- Can be combined: \`**~~bold strikethrough~~**\`

> 💡 Strikethrough is great for showing changes or corrections without deleting the original text!
        `,
                practiceInstructions:
                    "Write a paragraph that shows corrections using strikethrough. Cross out wrong information and write the correct version.",
                practiceDefaultCode: `# Strikethrough Practice

The Earth is ~~flat~~ round.

Our project deadline is ~~Friday~~ **Monday**.

## Completed Tasks
- ~~Set up the project~~
- ~~Design the UI~~
- Implement features
- Write tests
`,
            },
            {
                slug: "footnotes",
                title: "Footnotes",
                description: "Add reference notes at the bottom of your document.",
                content: `
## Footnotes

Footnotes let you add reference notes without cluttering the main text.

## Syntax

\`\`\`markdown
Here is a sentence with a footnote.[^1]

[^1]: This is the footnote content.
\`\`\`

## Named Footnotes

You can use descriptive names instead of numbers:

\`\`\`markdown
Markdown was created by John Gruber.[^gruber]

[^gruber]: John Gruber created Markdown in 2004 with Aaron Swartz.
\`\`\`

## Multi-line Footnotes

\`\`\`markdown
Here is a complex footnote.[^complex]

[^complex]: This footnote has multiple paragraphs.

    Indent subsequent paragraphs with 4 spaces.

    You can even add code blocks.
\`\`\`

## Important Notes

- Footnote definitions can be placed **anywhere** in the document
- They will always render at the **bottom** of the page
- Footnotes are **auto-numbered** regardless of your label
- Not all renderers support footnotes (it's an extension)
- GitHub supports footnotes in Markdown files

## Best Practices

- Use footnotes for **citations and references**
- Keep footnote content **concise**
- Don't overuse footnotes — they interrupt reading flow

> 💡 Footnotes are perfect for academic writing, blog posts, and documentation!
        `,
                practiceInstructions:
                    "Write a short paragraph about any topic and add 2 footnotes with references.",
                practiceDefaultCode: `# Footnote Practice

Markdown[^1] is a lightweight markup language created in 2004[^2].

It is widely used for documentation and content writing.

[^1]: Markdown was created by John Gruber.
[^2]: The first version was released in March 2004.
`,
            },
            {
                slug: "escaping-characters",
                title: "Escaping Characters",
                description: "Display special Markdown characters as literal text.",
                content: `
## Escaping Characters

Sometimes you want to display special Markdown characters literally, without them being interpreted as formatting.

## The Backslash

Use a backslash \`\\\` before any special character:

\`\`\`markdown
\\* This is not a list item
\\# This is not a heading
\\**This is not bold\\**
\`\`\`

## Characters You Can Escape

| Character | Name |
|-----------|------|
| \`\\\` | Backslash |
| \`\\\`\` | Backtick |
| \`*\` | Asterisk |
| \`_\` | Underscore |
| \`{}\` | Curly braces |
| \`[]\` | Square brackets |
| \`()\` | Parentheses |
| \`#\` | Hash |
| \`+\` | Plus sign |
| \`-\` | Hyphen |
| \`.\` | Period |
| \`!\` | Exclamation mark |
| \`|\` | Pipe |

## Common Scenarios

### Showing Markdown Syntax
\`\`\`markdown
To make text bold, wrap it in \\*\\*double asterisks\\*\\*.
\`\`\`

### Using Special Characters in Text
\`\`\`markdown
The price is \\$100.
Use the C\\# programming language.
\`\`\`

### In Code Blocks
Characters inside code blocks (backticks) don't need escaping:
\`\`\`markdown
\`**this stays as-is**\`
\`\`\`

> 💡 When in doubt, use a backslash! It won't hurt if the character didn't need escaping.
        `,
                practiceInstructions:
                    "Try displaying these literally: asterisks, hashes, brackets, and pipes — without them being interpreted as Markdown.",
                practiceDefaultCode: `# Escaping Practice

\\*This is not italic\\*

\\# This is not a heading

\\[This is not a link\\](https://example.com)

The price is \\$50 and the discount is 20\\%.

Show a pipe: \\| in text.
`,
            },
            {
                slug: "html-in-markdown",
                title: "HTML in Markdown",
                description: "Use raw HTML tags for features Markdown doesn't support.",
                content: `
## HTML in Markdown

Most Markdown renderers support inline HTML, giving you access to features Markdown doesn't have natively.

## Common HTML Uses

### Text Alignment
\`\`\`markdown
<p align="center">This text is centered.</p>
\`\`\`

### Image Sizing
\`\`\`markdown
<img src="image.png" width="300" alt="Description">
\`\`\`

### Details/Accordion
\`\`\`markdown
<details>
<summary>Click to expand</summary>

Hidden content goes here.
You can use **Markdown** inside!

</details>
\`\`\`

### Line Breaks
\`\`\`markdown
Line one<br>Line two
\`\`\`

### Colored Text (limited support)
\`\`\`markdown
<span style="color: red;">Red text</span>
\`\`\`

### Keyboard Keys
\`\`\`markdown
Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.
\`\`\`

## Important Notes

- Not all HTML tags work everywhere (GitHub restricts some)
- \`<script>\` tags are **always blocked** for security
- Markdown inside HTML blocks may not render (depends on the renderer)
- Use a blank line before and after HTML blocks
- Don't overuse HTML — it defeats the purpose of Markdown's simplicity

## Best Practices

- Use HTML only when Markdown **can't do what you need**
- Keep HTML usage **minimal**
- Test rendering on your target platform
- Common safe tags: \`<br>\`, \`<img>\`, \`<details>\`, \`<kbd>\`, \`<sup>\`, \`<sub>\`

> 💡 Think of HTML in Markdown as a fallback for edge cases, not a primary tool!
        `,
                practiceInstructions:
                    "Try using HTML for image sizing, a details/accordion element, and keyboard key styling.",
                practiceDefaultCode: `# HTML in Markdown Practice

## Centered Text
<p align="center">This text is centered!</p>

## Accordion
<details>
<summary>Click to see the answer</summary>

Markdown was created by **John Gruber** in 2004!

</details>

## Keyboard Shortcuts
Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.

## Superscript
E = mc<sup>2</sup>
`,
            },
        ],
    },
];

// Flatten all lessons for easy access
export function getAllLessons(): Lesson[] {
    return lessonCategories.flatMap((cat) => cat.lessons);
}

// Get a lesson by its slug
export function getLessonBySlug(slug: string): Lesson | undefined {
    return getAllLessons().find((l) => l.slug === slug);
}

// Get the index of a lesson
export function getLessonIndex(slug: string): number {
    return getAllLessons().findIndex((l) => l.slug === slug);
}

// Get next and previous lessons
export function getAdjacentLessons(slug: string) {
    const all = getAllLessons();
    const index = all.findIndex((l) => l.slug === slug);
    return {
        prev: index > 0 ? all[index - 1] : null,
        next: index < all.length - 1 ? all[index + 1] : null,
    };
}

// Get the category for a lesson
export function getLessonCategory(slug: string): string | undefined {
    for (const cat of lessonCategories) {
        if (cat.lessons.find((l) => l.slug === slug)) {
            return cat.name;
        }
    }
    return undefined;
}
