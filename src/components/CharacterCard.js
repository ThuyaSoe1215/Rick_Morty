import React from 'react'

const CharacterCard = ({ character }) => {
  return (
        <div className="m-auto mt-6 ">
          <div key={character.id}>
            <img src={character.image} />
          </div>
          <div className="bg-gray-300">
            <div className="p-3">
              <p>
                Name : <span className="font-bold">{character.name}</span>
              </p>
              <p>
                Gender :<span className="font-bold"> {character.gender}</span>
              </p>
              <p>
                Species :<span className="font-bold">{character.species}</span>
              </p>
              <p>
                Status : <span className="font-bold">{character.status}</span>
              </p>
            </div>
          </div>
        </div>
  );
}

export default CharacterCard
