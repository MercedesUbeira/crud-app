import React from 'react';
import GameCard from './GameCard';

const GameList = ({ games }) => (
  <div>
    {games.length > 0 ? (
      games.map(game => (
        <GameCard key={game.name} game={game} />
      ))
    ) : (
      <p>No games available</p>
    )}
  </div>
);

export default GameList;
