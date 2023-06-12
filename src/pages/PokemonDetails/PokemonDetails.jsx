import { useParams } from 'react-router-dom'
import './PokemonDetails.css'
import { useEffect, useState } from 'react';
import { getPokemonById } from '../../services/getPokemonById';
import PokemonDetailData from '../../components/PokemonDetailData/PokemonDetailData';

const PokemonDetails = () => {
    const { pokemonId } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
      const loadPokemonById = async () => {
        setPokemon(await getPokemonById(pokemonId))
      }

      loadPokemonById();
    }, [pokemonId])
    
  return (
    <section>
       { !pokemon ? <p>Loading pokemon</p> 
                  :( <PokemonDetailData pokemon={pokemon}/>    )  }
    </section>
  )
}

export default PokemonDetails