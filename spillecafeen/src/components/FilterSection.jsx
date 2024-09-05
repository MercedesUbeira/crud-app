import React, { useState } from 'react';

const categories = ['Communication', 'Good for 2', 'For Kids!', 'Escape Rooms', 'Negotiation'];
const times = ['10-24\'', '25-60\'', '60+'];
const places = ['Aarhus Vestergade', 'Aarhus Fredensgade', 'Aalborg Bredegade'];

const FilterSection = ({ setSelectedCategory, setSelectedTime, setSelectedPlace }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeTime, setActiveTime] = useState(null);
  const [activePlace, setActivePlace] = useState(null);

  const handleCategoryClick = (category) => {
    const newCategory = activeCategory === category ? null : category;
    setActiveCategory(newCategory);
    setSelectedCategory(newCategory);
  };

  const handleTimeClick = (time) => {
    const newTime = activeTime === time ? null : time;
    setActiveTime(newTime);
    setSelectedTime(newTime);
  };

  const handlePlaceClick = (place) => {
    const newPlace = activePlace === place ? null : place;
    setActivePlace(newPlace);
    setActivePlace(newPlace);
  };

  return (
    <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Where are you right now?</h2>
      <div className="flex flex-wrap gap-2">
        {places.map(place => (
          <button
            key={place}
            onClick={() => handlePlaceClick(place)}
            className={`px-4 py-2 rounded transition-colors duration-300 
              ${activePlace === place ? 'bg-[#BF171C] text-white' : 'bg-gray-300 text-gray-800'}`}
          >
            {place}
          </button>
        ))}
      </div>
      <h2 className="text-2xl font-semibold mb-4">Search by category</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 rounded transition-colors duration-300 
              ${activeCategory === category ? 'bg-[#BF171C] text-white' : 'bg-gray-300 text-gray-800'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">How long would you like to play?</h2>
      <div className="flex gap-2 mb-4">
        {times.map(time => (
          <button
            key={time}
            onClick={() => handleTimeClick(time)}
            className={`px-4 py-2 rounded transition-colors duration-300 
              ${activeTime === time ? 'bg-[#BF171C] text-white' : 'bg-gray-300 text-gray-800'}`}
          >
            {time}
          </button>
        ))}
      </div>

      
    </div>
  );
};

export default FilterSection;
