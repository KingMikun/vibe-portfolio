export default async function handler(req, res) {
  const { host } = req.headers;
  const url = new URL(req.url, `https://${host}`);
  const { provider, code } = Object.fromEntries(url.searchParams);

  if (!code) {
    // Redirect to GitHub OAuth
    const clientId = process.env.OAUTH_CLIENT_ID;
    const redirectUri = `https://${host}/api/auth`;
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=repo`;
    
    res.writeHead(302, { Location: githubAuthUrl });
    res.end();
    return;
  }

  // Exchange code for token
  const clientId = process.env.OAUTH_CLIENT_ID;
  const clientSecret = process.env.OAUTH_CLIENT_SECRET;
  
  const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code: code
    })
  });

  const data = await tokenResponse.json();
  
  // Return token to CMS
  res.send(`
    <!DOCTYPE html>
    <html>
    <head><title>Authorization Success</title></head>
    <body>
      <script>
        window.opener.postMessage(
          'authorization:github:success:${JSON.stringify(data)}',
          window.location.origin
        );
        window.close();
      </script>
    </body>
    </html>
  `);
}
```

---

## Step 4: Add Environment Variables to Vercel

1. Go to Vercel dashboard → Your project
2. **Settings** → **Environment Variables**
3. Add these two:
   - `OAUTH_CLIENT_ID` → Your GitHub OAuth Client ID
   - `OAUTH_CLIENT_SECRET` → Your GitHub OAuth Client Secret

---

## Step 5: Update GitHub OAuth Callback

1. Go to https://github.com/settings/developers
2. Click your OAuth app
3. Update **Authorization callback URL** to:
```
   https://mhikuun.vercel.app/api/auth
