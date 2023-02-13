import React from 'react'

const CharacterCard = ({ character }) => {
  return (
    <div className="m-auto mt-6 cursor-pointer">
      <div key={character.id}>
        <img src={character.image} className="rounded-full" />
      </div>
      <div className="bg-slate-700 mt-2 rounded-lg">
        <div className="p-3">
          <p>
            <span className="text-slate-300 font-bold">Name :</span>{" "}
            <span className="font-bold text-white hover:text-amber-500">
              {character.name}
            </span>
          </p>
          <p>
            <span className="text-slate-300 font-bold">Gender :</span>
            <span className="font-bold text-white  hover:text-amber-500">
              {" "}
              {character.gender}
            </span>
          </p>
          <p>
            <span className="text-slate-300 font-bold">Species : </span>
            <span className="font-bold text-white  hover:text-amber-500">
              {character.species}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard
