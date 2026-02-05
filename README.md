# Vibe Portfolio - Editable Portfolio with CMS

A clean, minimal portfolio with built-in content management. Edit your content through a visual dashboard at `/admin` - no code required.

## The Setup

**Hook:** Deploy once, edit forever through a clean admin panel.

**What you get:**
- Clean, modern portfolio site
- `/admin` dashboard for editing content
- Automatic updates when you save changes
- No code editing needed after setup

---

## Deploy to Netlify (5 minutes)

### Step 1: Push to GitHub

1. Create a new GitHub repository
2. Upload all these files to your repo:
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Connect to Netlify

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub and select your portfolio repo
4. Build settings are already configured in `netlify.toml`
5. Click "Deploy site"

### Step 3: Enable Identity & Git Gateway

**This is crucial for editing:**

1. In your Netlify dashboard, go to **Site settings** → **Identity**
2. Click **Enable Identity**
3. Under **Registration preferences**, select **Invite only** (recommended)
4. Scroll to **Services** → **Git Gateway** and click **Enable Git Gateway**

### Step 4: Invite Yourself

1. Go to **Identity** tab
2. Click **Invite users**
3. Enter your email
4. Check your email and accept the invitation
5. Set your password

---

## Edit Your Portfolio

### Access the CMS

1. Go to `your-site-name.netlify.app/admin`
2. Login with the credentials you set
3. You'll see a clean dashboard

### What You Can Edit

**Pages → Home**
- Your hero title
- Your subtitle/tagline

**Pages → About**
- Your about section content

**Pages → Contact**
- Email, Twitter, GitHub, LinkedIn links

**Projects**
- Add new projects
- Edit existing ones
- Upload project images
- Add tags, links, descriptions
- Reorder by changing the "Order" number

### How Editing Works

1. Click on any item in the CMS
2. Edit the fields
3. Click **Publish** (top right)
4. Netlify automatically rebuilds your site (takes ~1 minute)
5. Your changes are live

**The flow:**
You edit in dashboard → CMS saves to GitHub → GitHub triggers Netlify → Site rebuilds → Changes are live

---

## Customize Appearance

### Colors

Edit `styles.css` and change these variables:

```css
:root {
    --bg-primary: #0a0a0a;        /* Main background */
    --bg-secondary: #111111;      /* Section backgrounds */
    --text-primary: #ffffff;       /* Main text */
    --text-secondary: #a0a0a0;    /* Secondary text */
    --accent: #3b82f6;            /* Links and buttons */
}
```

### Your Name/Logo

Edit `index.html`, find:
```html
<h1 class="logo">YourName</h1>
```

### Custom Domain

1. Buy a domain (Namecheap, Google Domains, etc.)
2. In Netlify: **Domain settings** → **Add custom domain**
3. Follow the DNS setup instructions
4. SSL/HTTPS is automatic

---

## File Structure

```
vibe-portfolio/
├── index.html              # Main site structure
├── styles.css              # All styling
├── script.js               # Loads content from CMS
├── admin/
│   ├── index.html          # CMS interface
│   └── config.yml          # CMS configuration
├── content/
│   ├── pages/              # Page content (home, about, contact)
│   └── projects/           # Project markdown files
├── images/
│   └── uploads/            # Uploaded images go here
├── build-projects.js       # Converts projects to JSON
├── netlify.toml            # Netlify configuration
└── package.json
```

---

## The Tech

**Stack:**
- HTML/CSS/JavaScript (no framework bloat)
- Decap CMS (formerly Netlify CMS)
- Netlify hosting + Identity
- Git-based content storage

**Why this setup:**
- Zero dependencies to maintain
- Content lives in your repo (you own it)
- Edit from anywhere via web dashboard
- Free to host and run
- Automatic deployments

---

## Troubleshooting

**Can't access /admin:**
- Make sure Identity and Git Gateway are enabled in Netlify
- Check that you've accepted the email invitation
- Try accessing in incognito mode

**Changes not appearing:**
- Check **Deploys** tab in Netlify dashboard
- Wait for build to complete (~1 minute)
- Hard refresh your browser (Cmd+Shift+R or Ctrl+F5)

**Projects not loading:**
- Run `node build-projects.js` locally
- Commit and push the generated `projects-list.json`

---

## The Insight

Most portfolios die because updating them is painful. This separates content from code. You edit in a dashboard, not in HTML files. The result: a portfolio you'll actually keep current.

---

## Next Steps

1. Replace placeholder content with your actual info
2. Add real project images
3. Customize colors to match your brand
4. Point a custom domain
5. Update whenever you ship something new

**Alpha:** The portfolio that's easiest to update is the portfolio that wins. Build it once, maintain it forever.
