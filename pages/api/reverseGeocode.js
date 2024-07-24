// pages/api/reverseGeocode.js
import axios from 'axios';

export default async function handler(req, res) {
  const { latitude, longitude } = req.body;
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'API Key is not set' });
  }
  
  const endpoint = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

  try {
    const response = await axios.get(endpoint);
    const neighborhoodInfo = response.data.results.find(result => 
      result.types.includes('neighborhood') || result.types.includes('locality')
    );

    if (neighborhoodInfo) {
      return res.status(200).json({ neighborhood: neighborhoodInfo.address_components[0].long_name });
    } else {
      return res.status(404).json({ error: 'Neighborhood not found' });
    }
  } catch (error) {
    console.error('Error fetching geocode data:', error);
    return res.status(500).json({ error: error.message });
  }
}
