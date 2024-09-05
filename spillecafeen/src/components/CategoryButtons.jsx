import React, { useState } from 'react';

const categories = [
  { id: 'talk', label: 'To Talk', image: 'path/to/talk-image.png' },
  { id: '2players', label: 'Good for 2', image: 'path/to/2players-image.png' },
  { id: 'kids', label: 'For Kids', image: 'path/to/kids-image.png' },
  { id: 'escape', label: 'Escape Rooms', image: 'path/to/escape-image.png' },
  { id: 'negotiation', label: 'Negotiation', image: 'path/to/negotiation-image.png' }
];

const CategoryButtons = () => {
  const [selected, setSelected] = useState([]);

  const handleClick = (id) => {
    setSelected(prevSelected =>
      prevSelected.includes(id)
        ? prevSelected.filter(item => item !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {categories.map(category => (
        <button
          key={category.id}
          className={`flex items-center p-2 border rounded ${selected.includes(category.id) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleClick(category.id)}
        >
          <img src={category.image} alt={category.label} className="w-8 h-8 mr-2" />
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
