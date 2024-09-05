import React, { useState } from 'react';

const AddGame = ({ onAddGame }) => {
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');
  const [description, setDescription] = useState('');
  const [howToPlay, setHowToPlay] = useState('');
  const [timeOfPlay, setTimeOfPlay] = useState('');
  const [players, setPlayers] = useState('');
  const [section, setSection] = useState('');
  const [availability, setAvailability] = useState([]);
  const [category, setCategory] = useState('');
  const [language, setLanguage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGame = {
      name,
      picture,
      description,
      how_to_play: howToPlay,
      time_of_play: timeOfPlay,
      players,
      section,
      availability: availability.split(',').map((item) => item.trim()),
      category,
      language,
    };
    onAddGame(newGame);
    setName('');
    setPicture('');
    setDescription('');
    setHowToPlay('');
    setTimeOfPlay('');
    setPlayers('');
    setSection('');
    setAvailability('');
    setCategory('');
    setLanguage('');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Add a New Game</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Picture URL:</label>
          <input
            type="text"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-1">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 rounded w-full"
          ></textarea>
        </div>
        <div>
          <label className="block mb-1">How to Play:</label>
          <textarea
            value={howToPlay}
            onChange={(e) => setHowToPlay(e.target.value)}
            className="border p-2 rounded w-full"
          ></textarea>
        </div>
        <div>
          <label className="block mb-1">Time of Play:</label>
          <input
            type="text"
            value={timeOfPlay}
            onChange={(e) => setTimeOfPlay(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-1">Players:</label>
          <input
            type="text"
            value={players}
            onChange={(e) => setPlayers(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-1">Section (A1, B1, etc.):</label>
          <input
            type="text"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-1">Availability (comma-separated):</label>
          <input
            type="text"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-1">Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-1">Language:</label>
          <input
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Add Game
        </button>
      </form>
    </div>
  );
};

export default AddGame;
