import React, { useEffect, useState } from 'react'
import CharacterCard from '../components/CharacterCard';
import '../App.css';

const Character = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (
      async () => {
      setIsLoading(true);
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
      setIsLoading(false);
    })();
  }, []);

  return (
    <div className="bg-gray-700">
      {isLoading ? (
        <div className="loading">Loading....</div>
      ) : (
        <div className="w-4/5 flex flex-wrap items-center gap-6 m-auto">
          {characters.map((character) => (
            <CharacterCard character={character} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Character
