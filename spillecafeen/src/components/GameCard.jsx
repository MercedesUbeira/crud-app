import React from 'react';

const GameCard = ({ game }) => (
  <div className="bg-white p-4 rounded shadow-md mb-4">
    <h3 className="text-xl font-semibold">{game.name}</h3>
    <img src={game.picture} alt={game.name} className="w-full h-auto mb-2" />
    <p><strong>Description:</strong> {game.description}</p>
    <p><strong>How to Play:</strong> {game.how_to_play}</p>
    <p><strong>Time of Play:</strong> {game.time_of_play}</p>
    <p><strong>Players:</strong> {game.players}</p>
    <p><strong>Section:</strong> {game.section}</p>
    <p><strong>Availability:</strong> {game.availability.join(', ')}</p>
    <p><strong>Category:</strong> {game.category}</p>
    <p><strong>Language:</strong> {game.language}</p>
  </div>
);

export default GameCard;
