# Next.js Blog Generator

A Server-Side Rendered (SSR) blog generator built with Next.js and Markdown.

## Features

- ✅ Server-Side Rendering with Next.js
- ✅ Markdown-based blog posts
- ✅ Dynamic routing for individual posts
- ✅ Beautiful UI with Tailwind CSS
- ✅ Metadata extraction (title, date, author, excerpt)
- ✅ Fully responsive design

## Project Structure

```
├── pages/
│   ├── _app.js          # App wrapper with global styles
│   ├── index.js         # Homepage listing all posts
│   └── posts/
│       └── [slug].js    # Dynamic post page
├── posts/               # Markdown blog posts
│   ├── getting-started-with-nextjs.md
│   ├── understanding-react-hooks.md
│   └── building-restful-apis.md
├── components/
│   └── Layout.js        # Layout component (header, footer)
├── lib/
│   └── posts.js         # Utility functions for reading posts
└── styles/
    └── globals.css       # Global styles with Tailwind
```

## Getting Started

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the blog.

### Building for Production

```bash
npm run build
npm start
```

## Adding New Posts

1. Create a new `.md` file in the `posts/` directory
2. Add frontmatter metadata at the top:

```markdown
---
title: "Your Post Title"
date: "2024-03-30"
author: "Your Name"
excerpt: "A brief description of your post"
---

# Your Post Content

Write your markdown content here...
```

3. The post will automatically appear on the homepage and be accessible at `/posts/your-filename`

## Technologies Used

- **Next.js** - React framework with SSR
- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **gray-matter** - Parse frontmatter from markdown files
- **remark** - Markdown processor
- **remark-html** - Convert markdown to HTML

## License

MIT

