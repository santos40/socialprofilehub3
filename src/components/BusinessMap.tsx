import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

interface BusinessMapProps {
  latitude: number;
  longitude: number;
}

export const BusinessMap: React.FC<BusinessMapProps> = ({ latitude, longitude }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
  });

  if (!isLoaded) return <div className="h-[300px] bg-muted animate-pulse" />;

  return (
    <GoogleMap
      zoom={15}
      center={{ lat: latitude, lng: longitude }}
      mapContainerClassName="w-full h-[300px] rounded-lg"
    >
      <Marker position={{ lat: latitude, lng: longitude }} />
    </GoogleMap>
  );
};