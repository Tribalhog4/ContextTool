# BD Linkage Analyzer

Strategic fit bullet generator for BD outreach. Paste in a prospect description, run against your target list, get 2-3 linkage bullets per company — ready to drop into personalized emails.

## Deploy to Railway

1. Push this repo to GitHub
2. Go to [railway.app](https://railway.app) → New Project → Deploy from GitHub repo
3. Select this repo — Railway auto-detects Node.js and deploys
4. Your app will be live at `https://your-app.railway.app`

No environment variables needed. Users enter their own Anthropic API key in the UI — it's sent as a header to the `/api/linkage` endpoint and never stored.

## Local development

```bash
npm install
npm start
# Open http://localhost:3000
```

## How it works

- `server.js` — Express server, serves static files, proxies calls to Anthropic API
- `public/index.html` — Single-page app
- `public/companies.js` — The 136-company BD list (pre-loaded)
- API key is entered in the browser and passed as `x-api-key` header per request; it's held only in sessionStorage (cleared on tab close)

## Customizing the company list

Replace `public/companies.js` with a new file in the same format:

```js
const COMPANIES = [
  {
    "Name": "Company Name",
    "Organizations": "Display name <website.com>",
    "Description [Organization]": "Full company description..."
  },
  ...
];
```
