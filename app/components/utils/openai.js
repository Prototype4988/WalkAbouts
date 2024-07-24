import axios from 'axios';

export const fetchopenaicontent = async (prompt) => {
  const apiKey = process.env.OPENAI_API_KEY; // Make sure to set your OpenAI API key in an environment variable
  console.log('Environment Variables:', process.env); 
  console.log('OpenAI API Key:', apiKey);
  console.log('Prompt:', prompt);  // Debugging: Check if the API key is correct
  if (!apiKey) {
    throw new Error('OpenAI API Key is not set');
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
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    }
  );
  console.log('OpenAI response:', response.data); // Debugging: Log the response

  return response.data.choices[0].text.trim();
} catch (error) {
  console.error('Error fetching OpenAI content:', error.response ? error.response.data : error.message);
  throw error;
}
};
