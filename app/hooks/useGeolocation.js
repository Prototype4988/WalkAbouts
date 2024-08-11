// src/hooks/useGeolocation.js
import { useState, useEffect } from 'react';

const useGeolocation = () => {
  const [coordinates, setCoordinates] = useState(null);
  const [addressComponent, setAddressComponent] = useState('');
  const [error, setError] = useState(null);

  const apiKey = 'AIzaSyCDZl77BVmJju1DV3txKuAG1BFBctBfMV4'; // Replace with your actual Google Maps API key

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    const successCallback = (position) => {
      const { latitude, longitude } = position.coords;
      setCoordinates({ latitude, longitude });
      getAddressFromCoordinates(latitude, longitude);
    };

    const errorCallback = (error) => {
      setError(error.message);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  const getAddressFromCoordinates = async (latitude, longitude) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results && data.results.length > 0 && data.results[0].address_components.length > 3) {
        const addressComponent = data.results[0].address_components[3].short_name;
        setAddressComponent(addressComponent);
      } else {
        setError('No address found for the provided coordinates');
      }
    } catch (error) {
      setError('Error with reverse geocoding: ' + error.message);
    }
  };

  return { coordinates, addressComponent, error };
};

export default useGeolocation;
