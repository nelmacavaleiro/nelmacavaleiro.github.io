# Nelma Cavaleiro: portfolio

Personal portfolio website, hosted free on GitHub Pages.

## Structure

```
index.html                     All page content
assets/css/style.css           Design and layout (light and dark mode)
assets/js/main.js              Video section and small behaviours
assets/Nelma_Cavaleiro_CV.pdf  The CV offered for download
.nojekyll                      Tells GitHub Pages to serve files as they are
```

## Publishing on GitHub Pages

1. On GitHub, create a new public repository named exactly `nelmacavaleiro.github.io`.
2. Upload every file and folder from this project to the repository (including `.nojekyll`), or push them with Git.
3. In the repository, open Settings, then Pages. Under "Build and deployment", choose "Deploy from a branch", select the `main` branch and the `/ (root)` folder, and save.
4. After a few minutes the site is live at https://nelmacavaleiro.github.io

## Adding the video

Upload the video to YouTube as Unlisted, copy the ID from the link (the part after `v=`), and paste it into `YOUTUBE_VIDEO_ID` at the top of `assets/js/main.js`. The video section appears automatically once the ID is set.

## Updating the CV

Replace `assets/Nelma_Cavaleiro_CV.pdf` with the new version, keeping the same file name.

## Previewing locally

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000
