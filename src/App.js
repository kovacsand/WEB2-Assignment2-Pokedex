import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  let [pokemon, setPokemon] = React.useState(null);
  const updatePokemon = (newPokemon) => {
    setPokemon(newPokemon);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Current Pokemon: {pokemon?.name}</h2>
        <GetPokemonButton callback={updatePokemon}/>
      </header>
    </div>
  );
}

export default App;

function fetchPokemon({name, callback}) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(pokemon => callback(pokemon))
    .catch(error => console.log("Error: " + error))
}

function GetPokemonButton({callback}) {
  return (
    <>
      <input type="text" id="inputName"/>
      <button 
        onClick={ () => {
            const name = document.getElementById("inputName").value;
            fetchPokemon({name, callback})
          }
        }
      >
        Update Pokemon
      </button>
    </>
  )
}