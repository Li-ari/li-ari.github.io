# Personal Homepage

A static personal homepage built with HTML, CSS, and JavaScript, published at [li-ari.github.io](https://li-ari.github.io/).

## Approved Design and Writing Style

The current classic, minimal presentation is the approved project baseline. [AGENTS.md](AGENTS.md) records the design, bilingual writing conventions, information hierarchy, validation approach, and publishing workflow for future changes.

- Flat ivory background, dark serif text, thin rules, and a rectangular grayscale portrait.
- Plain text navigation and language controls with underlined selection; no rounded cards, pill buttons, shadows, or gradients.
- Lining numerals with proportional spacing so dates and numbers align naturally with the text.
- Short, natural Korean and English copy that preserves the site's playful personal tone.
- Full English month names, such as `December 2022`.
- Dates and periods appear below their main content, in smaller, muted text using `info-note`.
- No homepage preview images or screenshots unless explicitly requested.

## Files

- `index.html`: page content
- `styles.css`: layout, styling, and responsive design
- `script.js`: tab switching, language switching, and email copy behavior
- `AGENTS.md`: approved project conventions and instructions for future work
- `assets/profile.jpg`: profile photo
- `assets/favicon.ico`: browser tab icon

## Current Content

- Name: `Oh Yuhwan`
- Location: `Seongdong-gu, Seoul`
- Email: `hhaugustin893@gmail.com`
- Left profile column: grayscale photo, `Fortuna favors the bold.`, location, and contact email
- KOR / ENG language toggle
- Home: welcome title, linked nickname, Silver III peak rank, Zeri one-trick introduction, and previous jungle Poppy experience
- Info.: playful milk-themed education, study and military-service periods, airborne training, and Dplus KIA fandom since December 2022
- Posts tab: empty and ready for future posts

To replace the profile photo, replace `assets/profile.jpg` with a new image using the same filename.
To add a post, add content inside the `posts-panel` section.
The email address text copies the address when clicked.

## Publishing Changes

After a requested change has been verified, stage only its related files, create a concise commit, and push the tracked branch. Leave unrelated files such as `Logo_Liari.ico` out of the commit. Confirm that the GitHub Pages deployment succeeds.

## Preview

Open `index.html` in a browser to preview the site locally.
For browser-based checks, a background local HTTP server may also be used. Do not generate preview image files unless requested.
