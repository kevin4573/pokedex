import { useState } from 'react'
import { usePagination } from '../../../hooks/UsePagination';
import PagesComponents from '../PagesComponents/PagesComponents';
import PokemonCard from '../PokemonCard/PokemonCard';
import { Link } from 'react-router-dom';


import './PokemonList.css'
const PokemonList = ({ pokemons }) => {

  const [pokemonsPerPege, setPokemonsPerPege] = useState(20);
  const [currentPage, totalPages, pokemonsSlice, changePageTo ] = usePagination(pokemons, pokemonsPerPege);

  return (
    <section className='pagination_container'>
      
        <PagesComponents totalPages={totalPages} onChangePage={changePageTo} 
                         onNextPage={()=>changePageTo(currentPage + 1)}
                         onBackPage={()=>changePageTo(currentPage - 1)}
                         />

        <ul className='pokemons_list_container'>
            { pokemonsSlice.map((pokemon)=> <li key={pokemon.url}>
                                            <Link className='link_list_container' to={`/pokedex/${pokemon.url.split("/").at(-2)}`}>
                                               <PokemonCard pokemonId={pokemon.url.split("/").at(-2)} /> 
                                            </Link>
                                            </li> )}
        </ul>   

        <PagesComponents totalPages={totalPages} onChangePage={changePageTo} 
                         onNextPage={()=>changePageTo(currentPage + 1)}
                         onBackPage={()=>changePageTo(currentPage - 1)}
                         />   
        <div className='space_footer'/>
     
    </section>
  )
}

export default PokemonList