import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import FilterSection from './components/FilterSection';
import GameList from './components/GameList';
import AddGame from './components/AddGame'; 
import gameData from './data/games-data.json';

const App = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    setGames(gameData);
    setFilteredGames(gameData);
  }, []);

  useEffect(() => {
    let filtered = games;

    if (selectedCategory) {
      filtered = filtered.filter((game) => game.category === selectedCategory);
    }

    if (selectedTime) {
      filtered = filtered.filter((game) => {
        const time = game.time_of_play.split('-');
        const minTime = parseInt(time[0]);
        const maxTime = time[1] ? parseInt(time[1]) : minTime;

        const [selectedMinTime, selectedMaxTime] = selectedTime.split('-').map((t) =>
          parseInt(t.replace("'", ''))
        );

        return minTime >= selectedMinTime && maxTime <= selectedMaxTime;
      });
    }

    if (selectedPlace) {
      filtered = filtered.filter((game) => game.availability.includes(selectedPlace));
    }

    setFilteredGames(filtered);
  }, [selectedCategory, selectedTime, selectedPlace, games]);

  const handleAddGame = (newGame) => {
    setGames((prevGames) => [...prevGames, newGame]);
    setFilteredGames((prevGames) => [...prevGames, newGame]);
  };

  return (
    <Router>
      <div className="font-sans">
        <Header />
        <div className="flex items-center justify-center"> <h1 className="text-center text-3xl font-bold">Game Finder</h1></div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FilterSection
                  setSelectedCategory={setSelectedCategory}
                  setSelectedTime={setSelectedTime}
                  setSelectedPlace={setSelectedPlace}
                />
                <GameList games={filteredGames} />
              </>
            }
          />
          <Route path="/add-game" element={<AddGame onAddGame={handleAddGame} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
