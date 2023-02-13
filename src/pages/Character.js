import React  from 'react'
import CharacterCard from '../components/CharacterCard';
import { useFetchData } from '../hooks/useFetchData';

const Character = () => {
  const { data, isLoading } = useFetchData(
    "https://rickandmortyapi.com/api/character"
  );

  return (
    <div className="bg-slate-900">
      {isLoading ? (
        <div className="loading">Loading....</div>
      ) : (
        <div className="w-4/5 flex flex-wrap items-center gap-6 m-auto">
          {Array.isArray(data) &&
            data.map((character) => <CharacterCard key={character.id} character={character} />)}
        </div>
      )}
    </div>
  );
}

export default Character
