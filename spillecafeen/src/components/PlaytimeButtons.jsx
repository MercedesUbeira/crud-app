import React, { useState } from 'react';

const playtimes = [
  { id: '10-24', label: '10-24\' (Fast Game)' },
  { id: '25-60', label: '25-60\' I Have Time' },
  { id: '60+', label: '60\' + I Have Nothing Better to Do' }
];

const PlaytimeButtons = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex space-x-2 mb-4">
      {playtimes.map(playtime => (
        <button
          key={playtime.id}
          className={`flex-1 p-2 text-white rounded ${selected === playtime.id ? 'bg-blue-500' : 'bg-gray-500'}`}
          onClick={() => setSelected(playtime.id)}
        >
          {playtime.label}
        </button>
      ))}
    </div>
  );
};

export default PlaytimeButtons;
