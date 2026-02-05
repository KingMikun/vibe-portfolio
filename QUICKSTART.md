# Quick Start Guide

## Deploy in 5 Minutes

### 1. GitHub
```bash
# In your terminal, inside the vibe-portfolio folder:
git init
git add .
git commit -m "Initial portfolio"
git branch -M main

# Create a new repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2. Netlify
1. Go to netlify.com → Sign up/Login
2. "Add new site" → "Import an existing project"
3. Connect GitHub → Select your repo
4. Click "Deploy site" (settings are auto-configured)

### 3. Enable CMS Access
**In Netlify Dashboard:**
1. **Site settings** → **Identity** → **Enable Identity**
2. **Registration**: Set to "Invite only"
3. **Services** → **Git Gateway** → **Enable Git Gateway**
4. **Identity** tab → **Invite users** → Enter your email
5. Check email → Accept invite → Set password

### 4. Edit Your Content
1. Go to `your-site.netlify.app/admin`
2. Login with your credentials
3. Edit away - changes publish automatically

---

## That's It

Your portfolio is live. Edit anytime at `/admin`.

**Alpha:** Most tutorials make this complicated. It's not. GitHub holds your code. Netlify hosts it. The CMS lets you edit without touching code. Three steps, five minutes, done.
