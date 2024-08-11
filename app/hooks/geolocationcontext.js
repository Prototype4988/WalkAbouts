// GeolocationContext.js
import React, { createContext, useContext } from 'react';
import useGeolocation from './useGeolocation';

const GeolocationContext = createContext();

export const GeolocationProvider = ({ children }) => {
  const geolocation = useGeolocation();
  console.log("GeolocationProvider - geolocation:", geolocation);

  return (
    <GeolocationContext.Provider value={geolocation}>
      {children}
    </GeolocationContext.Provider>
  );
};

export const useGeolocationContext = () => {
  const context = useContext(GeolocationContext);
  if (context === undefined) {
    throw new Error('useGeolocationContext must be used within a GeolocationProvider');
  }
  return context;
};
