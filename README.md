# Hanson Oshiobughie — IT Executive Portfolio

Personal brand website for Hanson Oshiobughie, Director of IT.  
Built with HTML, CSS, and JavaScript. Deployed via GitHub Pages. Contact form powered by Formspree.

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | Full site content and structure |
| `style.css` | All visual styles (dark theme, responsive layout) |
| `script.js` | Nav scroll effect, mobile menu, form submission |

---

## Step 1 — Set Up Formspree (Contact Form)

1. Go to **https://formspree.io** and create a free account
2. Click **+ New Form**, give it a name (e.g. "Portfolio Contact")
3. Copy your unique form endpoint — it looks like: `https://formspree.io/f/xpzvwrqb`
4. Open `index.html` and find this line (around line 195):
   ```html
   action="https://formspree.io/f/YOUR_FORMSPREE_ID"
   ```
5. Replace `YOUR_FORMSPREE_ID` with your actual ID, e.g.:
   ```html
   action="https://formspree.io/f/xpzvwrqb"
   ```
6. Save the file

---

## Step 2 — Deploy to GitHub Pages

### Option A: Upload via GitHub website (no terminal needed)

1. Go to **https://github.com** and sign in (or create a free account)
2. Click **+ New repository**
3. Name it: `your-username.github.io` — replace `your-username` with your actual GitHub username
4. Set visibility to **Public**, then click **Create repository**
5. On the next screen, click **uploading an existing file**
6. Drag and drop these 3 files: `index.html`, `style.css`, `script.js`
7. Click **Commit changes**
8. Go to **Settings → Pages**
9. Under "Source", select **Deploy from a branch**, choose **main**, folder **/ (root)**
10. Click **Save**

Your site will be live at: `https://your-username.github.io` within ~60 seconds.

---

### Option B: Using Git in terminal

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git push -u origin main
```

Then enable GitHub Pages in Settings → Pages as described above.

---

## Customization Tips

- **Profile photo**: Add an `<img>` tag in the hero or about section pointing to a photo file
- **Resume download**: Add a PDF to the repo and link it with `<a href="resume.pdf" download>`
- **Custom domain**: In GitHub Pages settings, add a custom domain (e.g. `hansonoshiobughie.com`)
- **Analytics**: Add Google Analytics or Plausible by pasting their script tag before `</head>`

---

## Contact

For questions about this site: bughie@gmail.com
