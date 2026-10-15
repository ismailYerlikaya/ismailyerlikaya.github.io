# İsmail Yerlikaya — Cybersecurity Portfolio

Personal GitHub Pages site for cybersecurity lab notes, technical write-ups, projects, and blog posts.

## Local preview

This site uses GitHub Pages' built-in Jekyll support.

```powershell
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

## Publishing

GitHub Pages publishes the `main` branch from the repository root. Every push to `main` triggers a new deployment.

## Adding a lab

Copy one of the Markdown files in `_labs/`, update the front matter, and write the lab notes below it. Store sanitized screenshots under `assets/images/labs/<lab-slug>/`.

> Never publish credentials, session cookies, API keys, private IP addresses, or data from systems you do not own or have permission to test.
