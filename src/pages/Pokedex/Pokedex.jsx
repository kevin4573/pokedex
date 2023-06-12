import { useContext, useEffect, useState } from 'react';
import { UserNameContext } from "../../context/UserNameContext";
import { getAllPokemons } from '../../services/getAllPokemons';



import './Pokedex.css'
import PokemonList from '../../components/Pokedex/PokemonList/PokemonList';
import { useLoaderData } from 'react-router-dom';
import FiltersForm from '../../components/Pokedex/FiltersForm/FiltersForm';
import LoadingPokemons from '../../components/LoadingPokemons/LoadingPokemons';
const Pokedex = () => {
   const { userName } = useContext(UserNameContext);
   const { pokemons, pokemonName, pokemonTypeId } = useLoaderData();
   

  return (
    <section className='pokedex_container'>
        <p className='pokedex_messege'>
            <em className='pokedex_username'>Bienvenido Maestro {userName}!,</em> aquí puedes encontrar tu pokemón favorito
        </p>

        <FiltersForm nameInitial={pokemonName} typeInitial={pokemonTypeId}/> 
        
        { !pokemons.length ?  (<section className='no_pokemons_container'>
                                <LoadingPokemons/> 
                                <h2>Pokemón no encontrado, debe ser un pokemón muy raro</h2>
                              </section>
                                ) 
                           : <PokemonList pokemons={pokemons}/> }
    </section>
  )
}

export default Pokedex