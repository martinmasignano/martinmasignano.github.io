# Martin Masignano — personal site

A minimalist portfolio and journal built with Jekyll and GitHub Pages.

## Local preview

Install Ruby and Bundler, then run:

```sh
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000` to preview changes. The site uses the GitHub Pages `minima` theme and its supported plugins.

## Add a journal entry

Create a Markdown file in `_posts/` named `YYYY-MM-DD-your-title.md` and add front matter:

```yaml
---
layout: post
title: Your title
date: 2026-11-16 09:00:00 -0000
categories: notes
excerpt: A one-sentence preview.
---
```

Write the entry below the front matter. The home page and journal page list posts automatically. Replace or remove the included starter entry in `_posts/` as you like.

## Add portfolio projects

Edit `portfolio.md`, remove the starter guidance, and add project headings, descriptions, your role, and links. Update `about.md` with any contact details you want to publish.

GitHub Pages is enabled for this repository. Push changes to the configured publishing branch to publish the site.
