import React from 'react';

const GameCard = ({ game }) => (
  <div className="bg-white p-4 rounded shadow-md mb-4">
    <img
      src={`/assets/${game.picture}`}
      alt={game.name}
      className="w-400 h-auto mb-2 rounded"
    />
    <h3 className="text-xl font-semibold">{game.name}</h3>
    <p className="mt-2 text-gray-700">{game.description}</p>
    <p className="text-gray-600"><strong>Players:</strong> {game.players}</p>
    <p className="text-gray-600"><strong>Time:</strong> {game.time_of_play}</p>
    <p className="text-gray-600"><strong>Language:</strong> {game.language}</p>
    <p className="text-gray-600"><strong>Difficulty:</strong> {game.difficulty}</p>
    <p className="text-gray-600"><strong>Classification:</strong> {game.section}</p>
  </div>
);

export default GameCard;
