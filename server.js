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

  const prompt = `You are a strategic M&A advisor. Identify 2-3 specific linkage points between a prospect company and a BD target.

PROSPECT: ${prospectName}
${prospectDesc}

TARGET: ${companyName}
${companyDesc}

Output ONLY a JSON array of 2-3 short bullet strings (each under 20 words). Each bullet should describe one specific, concrete strategic overlap or complementarity between the two companies. Focus on technology overlap, customer overlap, or market adjacency. Be specific — reference actual capabilities of both companies. Do not use generic statements. No preamble, no explanation, just the JSON array.

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
        model: 'claude-sonnet-4-20250514',
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
