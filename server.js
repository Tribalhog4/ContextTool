const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '1mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// Proxy endpoint — keeps the API key server-side
app.post('/api/linkage', async (req, res) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || !apiKey.startsWith('sk-ant-')) {
    return res.status(400).json({ error: 'Valid Anthropic API key required (must start with sk-ant-)' });
  }

  const { prospectName, prospectDesc, companyName, companyDesc } = req.body;
  if (!prospectName || !prospectDesc || !companyName || !companyDesc) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const prompt = `You are a BD advisor helping craft personalized outreach. Identify 2-3 specific similarities between a prospect and a BD target company that make the outreach relevant and credible.

PROSPECT: ${prospectName}
${prospectDesc}

TARGET: ${companyName}
${companyDesc}

Output ONLY a JSON array of 2-3 short bullet strings (each under 20 words). Each bullet should highlight a specific similarity — shared technology focus, overlapping customer type, same market, or comparable problem being solved. The goal is to show the target that the prospect deeply understands their world. Be specific and reference actual details from both companies. Avoid partnership or integration language. No preamble, no explanation, just the JSON array.

Example format: ["Bullet 1 here.", "Bullet 2 here.", "Bullet 3 here."]`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 300,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      return res.status(response.status).json({ error: err.error?.message || `Anthropic API error ${response.status}` });
    }

    const data = await response.json();
    const text = data.content.map(i => i.text || '').join('').trim();
    const clean = text.replace(/```json|```/g, '').trim();
    const bullets = JSON.parse(clean);
    res.json({ bullets });
  } catch (err) {
    res.status(500).json({ error: err.message || 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`BD Linkage Tool running on port ${PORT}`);
});
