import { useEffect, useState } from 'react'
import { getPokemonById } from '../../../services/getPokemonById'

import './PokemonCard.css'

const statsTarget = ['hp', 'attack', 'defense', 'speed'];

const PokemonCard = ({ pokemonId }) => {
   const [pokemon, setPokemon] = useState(null);

   const stats = pokemon?.stats.filter(stat => statsTarget.includes(stat.name.toLowerCase()));

    useEffect(() => {
      const loadPokemon = async () => {
        const pokemonData = await getPokemonById(pokemonId);
        setPokemon(pokemonData);
      }
      loadPokemon();
    }, [])
    
  return (
    <article className='pokemon_card_container'>

        {(!pokemon) ? <p>Loading pokemons...</p> 
                            :(
                            <section className='pokemon_card'>

                                    <h2 className='pokemon_card_name'>{pokemon.name}</h2>

                                     <div className='pokemon_card_img'>
                                        <img src={pokemon.image} alt={pokemon.name} />
                                    </div>

                                    <section className='pokemon_card_types'>
                                        <h3>Type</h3>
                                        <ul className='types_container_list'>
                                            {pokemon.types.map((type, i) => <li key={i} className='types_container_item'>{type} </li>)}
                                        </ul>
                                    </section>

                                    <section className='pokemon_card_stats'>
                                        <ul>
                                            {stats.map((stat, i) => (
                                                
                                                    <li key={i}>
                                                        <em>{stat.name.toUpperCase()}</em>
                                                        <p>{stat.value}</p>
                                                    </li>
                                            ))}
                                        </ul>
                                    </section>
                            </section>
                            )} 
    </article>
  )
}

export default PokemonCard