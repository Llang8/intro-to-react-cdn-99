import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../contexts/DataProvider';

export default function Pokedex() {
    const [pokemon, setPokemon] = useState({})
    const [pokemonState, setPokemonState] = useState("LOADING")
    const [pokemonId, setPokemonId] = useState(1)
    const { getPokemon } = useContext(DataContext)

    useEffect(() => {
        getPokemon(pokemonId, function(data) {
            setPokemon(data)
            setPokemonState("LOADED")
        })
        console.log('FETCHING')
    }, [pokemonId])

    return (
        <div>
            <h1>Pokedex</h1>
            {  
                (pokemonState === "LOADED") ?
                (
                    <div className="pokemon">
                        <h2>{ pokemon.name }</h2>
                        <img src={pokemon.sprites.front_default} alt="" />
                        <h3>Types:</h3>
                        <ul>
                            { pokemon.types.map((type) => <li key={type.slot}>{type.type.name}</li>) }
                        </ul>
                    </div>
                ) :
                ""
            }
            {
                (pokemonId > 1) ?
                (<button onClick={() => setPokemonId(pokemonId - 1)}>Previous Pokemon</button>)
                :
                ''
            }
            <button onClick={() => setPokemonId(pokemonId + 1)}>Next Pokemon</button>
        </div>
    )
}