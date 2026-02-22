# React Portfolio with CMS

**Hook:** Modern React portfolio with Sveltia CMS. Edit content through a clean admin dashboard - no code required.

---

## What You Get

- ⚡ React + Vite for fast development
- 🎨 Clean, modern design
- 📝 Sveltia CMS for easy editing
- 🚀 Deploy-ready for Netlify
- 📱 Fully responsive

---

## Quick Deploy (5 Minutes)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial React portfolio"
git branch -M main
git remote add origin https://github.com/KingMikun/react-vibe-portfolio.git
git push -u origin main
```

### Step 2: Deploy on Netlify

1. Go to [netlify.com](https://netlify.com)
2. **Add new site** → **Import an existing project**
3. Connect GitHub → Select your repo
4. Build settings are already configured
5. Click **Deploy site**

### Step 3: Setup GitHub OAuth

1. Go to https://github.com/settings/developers
2. **OAuth Apps** → **New OAuth App**
3. Fill in:
   - **Application name:** `Portfolio CMS`
   - **Homepage URL:** `https://your-site.netlify.app`
   - **Authorization callback URL:** `https://your-site.netlify.app/admin/`
4. Click **Register application**
5. Copy **Client ID** and generate **Client Secret**

### Step 4: Update CMS Config

In `public/admin/config.yml`, update the backend repo to your actual repo:

```yaml
backend:
  name: github
  repo: YOUR_USERNAME/YOUR_REPO_NAME
  branch: main
```

Push this change to GitHub.

---

## Edit Your Portfolio

1. Go to `your-site.netlify.app/admin`
2. Click **"Login with GitHub"**
3. Authorize the app
4. Edit content:
   - **Pages → Home**: Update title and subtitle
   - **Pages → About**: Edit your bio
   - **Pages → Contact**: Add your links
   - **Projects**: Add, edit, or remove projects
5. Click **Publish** - changes go live in ~1 minute

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## File Structure

```
react-portfolio/
├── src/
│   ├── components/        # React components
│   ├── App.jsx           # Main app
│   └── main.jsx          # Entry point
├── public/
│   ├── admin/            # CMS admin panel
│   ├── content/          # Your content files
│   └── images/           # Uploaded images
├── build-projects.js     # Converts markdown to JSON
└── netlify.toml          # Netlify config
```

---

## Customize

### Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --bg-primary: #0a0a0a;
  --accent: #3b82f6;
  /* etc... */
}
```

### Your Name

Update in `src/components/Navigation.jsx` and `Footer.jsx`

---

## The Tech

- **React 18** - UI framework
- **Vite** - Build tool
- **Sveltia CMS** - Content management
- **GitHub** - Content storage
- **Netlify** - Hosting

**The Alpha:** React gives you component flexibility. Vite keeps builds fast. Sveltia CMS handles editing without the auth headaches of Decap CMS. Your content lives in markdown files you own.

---

## Troubleshooting

**CMS shows error:**
- Check `config.yml` has correct repo name
- Verify GitHub OAuth callback URL includes `/admin/`

**Projects not loading:**
- Run `npm run build` locally to test
- Check browser console for errors

**Changes not appearing:**
- Wait for Netlify deploy to finish (~1 min)
- Hard refresh browser (Cmd+Shift+R)

---

Built with intention. Ship it.
