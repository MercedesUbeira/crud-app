import React, { useState } from 'react';

const locations = [
  { id: 'aarhus-v', label: 'Aarhus, Vestergade' },
  { id: 'aarhus-f', label: 'Aarhus Fredensgade' },
  { id: 'aalborg', label: 'Aalborg Bredegade' }
];

const LocationButtons = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex space-x-2 mb-4">
      {locations.map(location => (
        <button
          key={location.id}
          className={`flex-1 p-2 text-white rounded ${selected === location.id ? 'bg-red-500' : 'bg-gray-500'}`}
          onClick={() => setSelected(location.id)}
        >
          {location.label}
        </button>
      ))}
    </div>
  );
};

export default LocationButtons;
