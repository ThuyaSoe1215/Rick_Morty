import React, { useEffect, useState } from 'react'
import '../App.css';

const Character = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setTimeout( async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        setCharacters(data.results);
        setIsLoading(false);
      }, 1000)
    })();
  }, []);

  console.log(characters)

  return (
    <>
      <h1>Character</h1>
      {isLoading ? (
        <div className='loading'>Loading....</div>
      ) : (
        <div className="w-4/5 flex flex-wrap items-center gap-6 m-auto">
          {characters.map((character) => (
            <div key={character.id} className="m-auto mt-6">
              <img src={character.image} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Character
