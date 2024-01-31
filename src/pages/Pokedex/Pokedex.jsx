import { useState } from "react"
import { Link } from "react-router-dom"
import "./Pokedex.css"
import { pokeData } from "../../data/pokeData"
console.log(pokeData)


const Pokedex = () => {
  const displayCount = 10
  const [currIdx, setCurrIdx] = useState(0)
  const [displayedPokemon, setDisplayedPokemon] = useState(filterPokemonData(0))

  function filterPokemonData(newIdx) {
    //filter pokeData to a new array of 10 pokemon (newIdx+displayCount)
    const filteredData = pokeData.filter((pokemon, idx) => {
      //falsey: 10th = > 10 >= 0 10 !< 0+10
      return idx >=newIdx && idx < newIdx + displayCount
    })
    return filteredData
  }

  return ( 
    <>
      <h1>Pokemon List</h1>
      <div className="pagination-container">
        <button>&lt;</button>
        <button>&gt;</button>
      </div>
      <div className="num-results-container">
        Results ## - ## of {pokeData.length}
      </div>
      <div className="pokemon-container">
        {displayedPokemon.map(pokemon => 
          <Link to={`/pokemon/${pokemon.number - 1}`} key={pokemon._id}>
            <div className="pokemon-link">
              <img src={pokemon.image} alt="a fierce pokemon" />
              <p>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</p>  
            </div>
          </Link>
        )}
      </div>
    </>
  )
}

export default Pokedex