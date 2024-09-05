import React from 'react';

const GameCard = ({ game }) => (
  <div className="bg-white p-4 rounded shadow-md mb-4">
    <img
      src={`/assets/${game.picture}`}
      alt={game.name}
      className="w-400 h-auto mb-2 rounded"
    />
    <div className='flex1'><h3 className="text-xl font-bold">{game.name}</h3>
    <p className="mt-2 text-gray-700">{game.description}</p>
    <p><strong>Players:</strong> {game.players}</p>
    <p ><strong>Time:</strong> {game.time_of_play}</p>
    <p ><strong>Language:</strong> {game.language}</p>
    <p ><strong>Difficulty:</strong> {game.difficulty}</p>
    <p className="text-red-600 font-bold mt-2">{game.section}</p></div>
    
  </div>
);

export default GameCard;
