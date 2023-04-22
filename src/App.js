// import logo from './logo.svg';
// import './App.css';
// import './Pokedex.css';
// import React, { useEffect, useState } from 'react';

// function App() {
//   document.body.style.zoom = "200%";

//   useEffect(() => {
//     fetchCurrent10Pokemon();
//   });

//   let [pageNumber, setPageNumber] = useState(1);
//   const changePage = (direction) => {
//     if (direction === "next" && pageNumber < 15) {
//       setPageNumber(pageNumber + 1);
//     } else if (direction === "previous" && pageNumber > 1) {
//       setPageNumber(pageNumber - 1);
//     }
//     fetchCurrent10Pokemon();
//   }

//   const fetchCurrent10Pokemon = () => {
//     fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${Math.max(pageNumber - 1, 0) * 10}`)
//       .then(response => {
//         if (!response.ok) throw new Error('Network response was not ok');
//         return response.json();
//       })
//       .then(pokemon => displayCurrent10Pokemon(pokemon.results))
//       .catch(error => console.log("Error: " + error))
//   }

//   const displayCurrent10Pokemon = (current10Pokemon) => {
//     for (let i = 0; i < current10Pokemon.length; i++) {
//       let url = current10Pokemon[i].url;
//       fetchPokemon(url, loadSmallSprite);
//     }
//   }

//   const fetchPokemon = (url, action) => {
//     fetch(url)
//       .then(response => {
//         if (!response.ok) throw new Error('Network response was not ok');
//         return response.json();
//       })

//       .then(pokemon => action(pokemon))
//       .catch(error => console.log("Error: " + error))
//   }

//   const loadSmallSprite = (pokemon) => {
//     let id = pokemon.id % 10;
//       if (id === 0) id = 10;
//     const pokemonDiv = document.getElementById(`pokemon${id}`);
//     pokemonDiv.innerHTML = "";

//     let clickable = document.createElement("div");
//     clickable.id = `clickable${id}`;
//     clickable.className = "small-pokemon-clickable";
//     clickable.addEventListener("click", () => loadSelectedPokemon(pokemon));
  
//     clickable.style.backgroundImage = `url(${pokemon.sprites.front_default})`;
//     pokemonDiv.appendChild(clickable);
//   }

//   const loadSelectedPokemon = (pokemon) => {
//     console.log(pokemon);

//     const glitchButton = document.getElementById("mew-glitch");
//     glitchButton.innerHTML = "";

//     const mainScreen = document.getElementById("main-screen");
//     mainScreen.innerHTML = "";
//     mainScreen.style.backgroundImage = `url(${pokemon.sprites.front_default})`;

//     const name = document.getElementById("name-screen");
//     name.innerHTML = "#" + pokemon.id + "<br>" +  pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

//     const about = document.getElementById("about-screen");
//     about.style.fontSize = "8.5px";
//     about.innerHTML = `Height: ${pokemon.height * 10} cm Weight: ${pokemon.weight / 10} kg`;

//     const type1 = document.getElementById("type1-screen");
//     type1.innerHTML = pokemon.types[0].type.name.toUpperCase();
//     const type2 = document.getElementById("type2-screen");
//     type2.innerHTML = pokemon.types[1] ? pokemon.types[1].type.name.toUpperCase() : "";

//     if (pokemon.name === "mew") {
//       about.style.fontSize = "6px";
//       about.innerHTML = "So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide."
//     }

//     if (pokemon.id === 79) {
//       const glitchButton = document.getElementById("mew-glitch");
//       glitchButton.innerHTML = "m̸̘̪̼̬̊͜e̶̩̔̂͠w̸̰̌";
//       glitchButton.addEventListener("click", () => {
//         const mewUrl = "https://pokeapi.co/api/v2/pokemon/mew"
//         fetchPokemon(mewUrl, loadSelectedPokemon);
//       });
//     }
//   }

//   const showAbout = () => {
//     const mainScreen = document.getElementById("main-screen");
//     mainScreen.innerHTML = "";
//     mainScreen.style.backgroundImage = "url(https://i.imgur.com/9ZQZ7Zm.png)";

//     const name = document.getElementById("name-screen");
//     name.innerHTML = "POKEDEX";

//     const about = document.getElementById("about-screen");
//     about.style.fontSize = "8.5px";
//     about.innerHTML = "A device for viewing data about Pokémon. It is capable of storing and displaying information of up to 1000 Pokémon.";

//     const type1 = document.getElementById("type1-screen");
//     type1.innerHTML = "";
//     const type2 = document.getElementById("type2-screen");
//     type2.innerHTML = "";
//   }


//   return (
//     <PokedexGrid arrowFunction={changePage} pageNumber={pageNumber} showAbout={showAbout}/>
//   );
// }

// export default App;

// function PokedexGrid({ arrowFunction, pageNumber, showAbout }) {
//   return (
//     <>
//       <div id="pokedex">
//         {/* Left panel */}
//         <div id="left-panel">
//           {/* Top Lights */}
//           <div className="left-top-container">
//             <svg height="100" width="225" className="left-svg">
//               <polyline
//                 points="0,75 70,75 90,38 224,38"
//                 style={{ fill: "none", stroke: "black", "strokeWidth": "3" }}
//               />
//             </svg>
//             <div className="lights-container">
//               <div className="big-light-boarder">
//                 <div className="big-light blue">
//                   <div className="big-dot light-blue"></div>
//                 </div>
//               </div>
//               <div className="small-lights-container">
//                 <div className="small-light red">
//                   <div className="dot light-red"></div>
//                 </div>
//                 <div className="small-light yellow">
//                   <div className="dot light-yellow"></div>
//                 </div>
//                 <div className="small-light green">
//                   <div className="dot light-green"></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Center Screen */}
//           <div className="screen-container">
//             <div className="screen">
//               <div className="top-screen-lights">
//                 <div className="mini-light red"></div>
//                 <div className="mini-light red"></div>
//               </div>
//               <div id="main-screen"></div>
//               <div className="bottom-screen-lights">
//                 <div className="small-light red">
//                   <div className="dot light-red"></div>
//                 </div>
//                 <div className="burger"  onClick={() => showAbout()}>
//                   <div className="line" onClick={() => showAbout()}></div>
//                   <div className="line" onClick={() => showAbout()}></div>
//                   <div className="line" onClick={() => showAbout()}></div>
//                   <div className="line" onClick={() => showAbout()}></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Buttons */}
//           <div className="buttons-container">
//             <div className="upper-buttons-container">
//               <div id="mew-glitch" className="big-button"></div>
//               <div className="long-buttons-container">
//                 <div className="long-button red"></div>
//                 <div className="long-button light-blue"></div>
//               </div>
//             </div>
//             <div className="nav-buttons-container">
//               <div className="dots-container">
//                 <div>.</div>
//                 <div>.</div>
//               </div>
//               <div className="green-screen">
//                 <span id="name-screen"></span>
//               </div>
//               <div className="right-nav-container">
//                 <div className="nav-button">
//                   <div className="nav-center-circle"></div>
//                   <div className="nav-button-vertical"></div>
//                   <div className="nav-button-horizontal">
//                     <div className="border-top"></div>
//                     <div className="border-bottom"></div>
//                   </div>
//                 </div>
//                 <div className="bottom-right-nav-container">
//                   <div className="small-light red">
//                     <div className="dot light-red"></div>
//                   </div>
//                   <div className="dots-container">
//                     <div className="black-dot">.</div>
//                     <div className="black-dot">.</div>
//                     <div className="black-dot">.</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* End of Left panel */}

//         {/* Right-panel */}
//         <div id="right-panel">
//           {/* Blank container */}
//           <div className="empty-container">
//             <svg height="100%" width="100%">
//               <polyline
//                 points="0,0 0,40 138,40 158,75 250,75 250,0 0,0"
//                 style={{ fill: "#f2f2f2", stroke: "none", "strokeWidth": "3" }}
//               />
//               <polyline
//                 points="0,40 138,40 158,75 250,75"
//                 style={{ fill: "none", stroke: "black", "strokeWidth": "3" }}
//               />
//             </svg>
//           </div>
//           {/* Top screen  */}
//           <div className="top-screen-container">
//             <div id="about-screen" className="right-panel-screen"></div>
//           </div>
//           {/* Blue Buttons */}
//           <div className="square-buttons-container">
//             <div className="blue-squares-container">
//               <div className="blue-square" id="pokemon1"></div>
//               <div className="blue-square" id="pokemon2"></div>
//               <div className="blue-square" id="pokemon3"></div>
//               <div className="blue-square" id="pokemon4"></div>
//               <div className="blue-square" id="pokemon5"></div>
//               <div className="blue-square" id="pokemon6"></div>
//               <div className="blue-square" id="pokemon7"></div>
//               <div className="blue-square" id="pokemon8"></div>
//               <div className="blue-square" id="pokemon9"></div>
//               <div className="blue-square" id="pokemon10"></div>
//             </div>
//           </div>
//           {/* Center Buttons */}
//           <div className="center-buttons-container">
//             <div className="center-left-container">
//               <div className="small-reds-container">
//                 <div className="small-light red">
//                   <div className="dot light-red"></div>
//                 </div>
//                 <div className="small-light red">
//                   <div className="dot light-red"></div>
//                 </div>
//               </div>
//               <div className="white-squares-container">
//                 <div className="white-square" onClick={() => arrowFunction("previous")}><i className="arrow facing-left"></i></div>
//                 <div className="white-square" onClick={() => arrowFunction("next")}><i className="arrow facing-right"></i></div>
//               </div>
//             </div>
//             <div className="center-right-container">
//               <div className="thin-buttons-container">
//                 <div className="thin-button"></div>
//                 <div className="thin-button"></div>
//               </div>
//               <div className="yellow-button yellow">
//                 <div id="pageNumber">
//                   {(pageNumber - 1) * 10 + 1}-{(pageNumber - 1) * 10 + 10}
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Bottom screens */}
//           <div className="bottom-screens-container">
//             <div id="type1-screen" className="right-panel-screen"></div>
//             <div id="type2-screen" className="right-panel-screen"></div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }