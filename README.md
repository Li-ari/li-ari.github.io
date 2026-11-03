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
- Posts: ep. 2 “행운의 여신은 용감한 자를 좋아한다.” / “Fortuna Favors the Bold.” at `#posts/fortuna-favors-the-bold`, and ep. 1 “미래상” / “A Vision of the Future” at `#posts/future-outlook`, both published November 3, 2026; the two temporary sample articles have been removed

To replace the profile photo, replace `assets/profile.jpg` with a new image using the same filename.
The two temporary sample articles have been removed. The post styling and hash routing are preserved. To add a post, place a `.post-item` in `.post-list` with a `.post-link` to `#posts/your-slug` and a `.post-date` time element. Add a `.post-article` with `data-post-article="your-slug"`, `hidden`, and `aria-labelledby` pointing to its unique heading ID inside `posts-panel`. Its structure is a `.post-back` link to `#posts`, a `.post-header` containing the full `h2` title and a muted `.post-meta` date, then a `.post-body` with paragraphs and optional `h3` subheadings. Add matching Korean and English translation strings; use `data-i18n-title` on the list link so the full title is available when it is truncated. Keep the list in reverse chronological order.
The email address text copies the address when clicked.

Episode numbers are fixed by publication order. When adding a post, assign the current `data-next-post-episode` value from `posts-panel` to the article's `data-post-episode`, then increase the next value by one. Never decrease it or renumber existing posts when reordering or deleting them. Keep translation titles free of prefixes: `updatePostEpisodeTitles()` adds the number to the list title, article heading, and tooltip. Include the same number in the HTML fallback titles.

## Publishing Changes

After a requested change has been verified, stage only its related files, create a concise commit, and push the tracked branch. Leave unrelated files such as `Logo_Liari.ico` out of the commit. Confirm that the GitHub Pages deployment succeeds.

## Preview

Open `index.html` in a browser to preview the site locally.
For browser-based checks, a background local HTTP server may also be used. Do not generate preview image files unless requested.
