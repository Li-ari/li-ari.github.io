# Personal Homepage

A simple personal homepage that can be uploaded directly to GitHub Pages. It uses only HTML, CSS, and JavaScript.

## Files

- `index.html`: page content
- `styles.css`: layout, styling, and responsive design
- `script.js`: current year display and email copy behavior
- `assets/profile.jpg`: profile photo

## Current Content

- Name: `Yuhwan`
- Location: `Seongdong-gu, Seoul`
- Email: `hhaugustin893@gmail.com`
- Posts section: short personal writing cards in `index.html`

To replace the profile photo, replace `assets/profile.jpg` with a new image using the same filename.
To add a post, copy one `<article class="post-card">...</article>` block in the `Posts` section and edit the date, title, and text.

## Uploading to GitHub

You can upload the site through the GitHub website even if Git is not installed.

1. Create a new repository on GitHub.
2. In the repository, click `Add file` > `Upload files`.
3. Upload `index.html`, `styles.css`, `script.js`, `README.md`, `.gitignore`, and the `assets` folder.
4. Do not upload hidden folders such as `.git`, `.codex`, or `.agents`.
5. Click `Commit changes`.
6. Go to `Settings` > `Pages`.
7. Under `Build and deployment`, choose `Deploy from a branch`.
8. Select the `main` branch and `/root` folder, then save.

If you want the site URL to be `https://your-username.github.io`, name the repository `your-username.github.io`. For a regular repository, the URL is usually `https://your-username.github.io/repository-name/`.

## Git Commands

If Git is installed, you can upload with these commands:

```bash
git init
git add .
git commit -m "Add personal homepage"
git branch -M main
git remote add origin https://github.com/your-username/your-repository.git
git push -u origin main
```

## Preview

Open `index.html` in a browser to preview the site locally.
