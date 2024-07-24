import axios from 'axios';

export default async function handler(req, res) {
    console.log('Request received');
    const { prompt } = req.body;
    const apiKey = process.env.OPENAI_API_KEY;
    console.log('Environment Variables:', process.env); // Debugging: Log all environment variables
    console.log('OpenAI API Key:', apiKey); // Debugging: Check if the API key is correct
    console.log('Prompt:', prompt); // Debugging: Check if the prompt is correct


  if (!apiKey) {
    return res.status(500).json({ error: 'OpenAI API Key is not set' });
  }

  const endpoint = 'https://api.openai.com/v1/chat/completions';

  try {
    const response = await axios.post(
      endpoint,
      {
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 150, // Adjust as needed
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        }
      }
    );

    return res.status(200).json({ content: response.data.choices[0].message.content.trim() });
  } catch (error) {
      console.error('Error fetching OpenAI content:', error.response ? error.response.data : error.message);
      return res.status(500).json({ error: error.message });
  }
}
