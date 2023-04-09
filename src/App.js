import logo from './logo.svg';
import './App.css';
import './Pokedex.css';
import React, { useEffect, useState } from 'react';

function App() {
  document.body.style.zoom = "200%";

  useEffect(() => {
    fetchCurrent10Pokemon();
  });

  let [pageNumber, setPageNumber] = useState(1);
  const changePage = (direction) => {
    if (direction === "next" && pageNumber < 15) {
      setPageNumber(pageNumber + 1);
    } else if (direction === "previous" && pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
    fetchCurrent10Pokemon();
  }

  const fetchCurrent10Pokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${Math.max(pageNumber - 1, 0) * 10}`)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(pokemon => displayCurrent10Pokemon(pokemon.results))
      .catch(error => console.log("Error: " + error))
  }

  const displayCurrent10Pokemon = (current10Pokemon) => {
    for (let i = 0; i < current10Pokemon.length; i++) {
      let url = current10Pokemon[i].url;
      fetchPokemon(url);
    }
  }

  const fetchPokemon = (url) => {
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })

      .then(pokemon => loadSmallSprite(pokemon))
      .catch(error => console.log("Error: " + error))
  }

  const loadSmallSprite = (pokemon) => {
    let image = new Image();
    image.src = pokemon.sprites.front_default;

    image.style.objectFit = "contain";
    image.style.objectPosition = "center";
    image.style.margin = "auto";
    image.style.display = "block";
    // image.style.width = "24px";
    // image.style.height = "10px";
    image.style.width = "100%";
    image.style.height = "100%";

    let id = pokemon.id % 10;
      if (id === 0) id = 10;
    const pokemonDiv = document.getElementById(`pokemon${id}`);
    pokemonDiv.innerHTML = "";
    pokemonDiv.appendChild(image);
  }

  return (
    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <h2>Current Pokemon: {pokemon?.name}</h2>
    //     <GetPokemonButton callback={updatePokemon}/>
    //   </header>
    // </div>
    <PokedexGrid arrowFunction={changePage} pageNumber={pageNumber} />
  );
}

export default App;

function PokedexGrid({ arrowFunction, pageNumber }) {
  return (
    <>
      <div id="pokedex">
        {/* Left panel */}
        <div id="left-panel">
          {/* Top Lights */}
          <div className="left-top-container">
            <svg height="100" width="225" className="left-svg">
              <polyline
                points="0,75 70,75 90,38 224,38"
                style={{ fill: "none", stroke: "black", "strokeWidth": "3" }}
              />
            </svg>
            <div className="lights-container">
              <div className="big-light-boarder">
                <div className="big-light blue">
                  <div className="big-dot light-blue"></div>
                </div>
              </div>
              <div className="small-lights-container">
                <div className="small-light red">
                  <div className="dot light-red"></div>
                </div>
                <div className="small-light yellow">
                  <div className="dot light-yellow"></div>
                </div>
                <div className="small-light green">
                  <div className="dot light-green"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Screen */}
          <div className="screen-container">
            <div className="screen">
              <div className="top-screen-lights">
                <div className="mini-light red"></div>
                <div className="mini-light red"></div>
              </div>
              <div id="main-screen"></div>
              <div className="bottom-screen-lights">
                <div className="small-light red">
                  <div className="dot light-red"></div>
                </div>
                <div className="burger">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="buttons-container">
            <div className="upper-buttons-container">
              <div className="big-button"></div>
              <div className="long-buttons-container">
                <div className="long-button red"></div>
                <div className="long-button light-blue"></div>
              </div>
            </div>
            <div className="nav-buttons-container">
              <div className="dots-container">
                <div>.</div>
                <div>.</div>
              </div>
              <div className="green-screen">
                <span id="name-screen">bulbasaur</span>
              </div>
              <div className="right-nav-container">
                <div className="nav-button">
                  <div className="nav-center-circle"></div>
                  <div className="nav-button-vertical"></div>
                  <div className="nav-button-horizontal">
                    <div className="border-top"></div>
                    <div className="border-bottom"></div>
                  </div>
                </div>
                <div className="bottom-right-nav-container">
                  <div className="small-light red">
                    <div className="dot light-red"></div>
                  </div>
                  <div className="dots-container">
                    <div className="black-dot">.</div>
                    <div className="black-dot">.</div>
                    <div className="black-dot">.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Left panel */}

        {/* Right-panel */}
        <div id="right-panel">
          {/* Blank container */}
          <div className="empty-container">
            <svg height="100%" width="100%">
              <polyline
                points="0,0 0,40 138,40 158,75 250,75 250,0 0,0"
                style={{ fill: "#f2f2f2", stroke: "none", "strokeWidth": "3" }}
              />
              <polyline
                points="0,40 138,40 158,75 250,75"
                style={{ fill: "none", stroke: "black", "strokeWidth": "3" }}
              />
            </svg>
          </div>
          {/* Top screen  */}
          <div className="top-screen-container">
            <div id="about-screen" className="right-panel-screen">
              Height: 70cm Weight: 6.9kg
            </div>
          </div>
          {/* Blue Buttons */}
          <div className="square-buttons-container">
            <div className="blue-squares-container">
              <div className="blue-square" id="pokemon1"></div>
              <div className="blue-square" id="pokemon2"></div>
              <div className="blue-square" id="pokemon3"></div>
              <div className="blue-square" id="pokemon4"></div>
              <div className="blue-square" id="pokemon5"></div>
              <div className="blue-square" id="pokemon6"></div>
              <div className="blue-square" id="pokemon7"></div>
              <div className="blue-square" id="pokemon8"></div>
              <div className="blue-square" id="pokemon9"></div>
              <div className="blue-square" id="pokemon10"></div>
            </div>
          </div>
          {/* Center Buttons */}
          <div className="center-buttons-container">
            <div className="center-left-container">
              <div className="small-reds-container">
                <div className="small-light red">
                  <div className="dot light-red"></div>
                </div>
                <div className="small-light red">
                  <div className="dot light-red"></div>
                </div>
              </div>
              <div className="white-squares-container">
                <div className="white-square" onClick={() => arrowFunction("previous")}><i className="arrow facing-left"></i></div>
                <div className="white-square" onClick={() => arrowFunction("next")}><i className="arrow facing-right"></i></div>
              </div>
            </div>
            <div className="center-right-container">
              <div className="thin-buttons-container">
                <div className="thin-button"></div>
                <div className="thin-button"></div>
              </div>
              <div className="yellow-button yellow">
                <div id="pageNumber">
                  {(pageNumber - 1) * 10 + 1}-{(pageNumber - 1) * 10 + 10}
                </div>
              </div>
            </div>
          </div>
          {/* Bottom screens */}
          <div className="bottom-screens-container">
            <div id="type-screen" className="right-panel-screen">grass</div>
            <div id="id-screen" className="right-panel-screen">#1</div>
          </div>
        </div>
      </div>
    </>
  )
}