import { Link } from 'react-router-dom';
import './PokemonDetailData.css';


const PokemonDetailData = ({ pokemon }) => {
  return (
    <section className='pokemon_container'>
       
           <Link to="/pokedex">
                <button className='btn_back_pokedex'>
                    Atras 
                </button>
           </Link>
        
       <section className='pokemon_detail_container'>
            <div className='dv_pokemon_img'>
                <img src={pokemon.image} alt="pokemon img" />
            </div>

            <div className='pokemon_data_name_id'>
                <p># {pokemon.id}</p>
                <h2>{pokemon.name}</h2>
            </div>

            <div className='cls_weigth_height_container'>
                <div className='cls_property'>
                    <p className='cls_property_name'>Weight</p>
                    <p className='cls_property_data'>{pokemon.weight}</p>
                </div>
                <div className='cls_property'>
                    <p className='cls_property_name'>Height</p>
                    <p className='cls_property_data'>{pokemon.height}</p>
                </div>
            </div>

            <div className='cls_type_ability_container'>
                <div className='cls_type'>
                    <p>Type</p>
                    <ul className='cls_list'>
                                            {pokemon.types.map((type, i) => <li key={i} className='cls_item_container'>{type} </li>)}
                    </ul>

                </div>
                <div className='cls_ability'>
                    <p>Abilities</p>
                    <ul className='cls_list'>
                                            {pokemon.abilities.map((ability, i) => <li key={i} className='cls_item_container'>{ability} </li>)}
                    </ul>
                </div>
            </div>

            <div className='stats_container'>

                <h2>Stats</h2>

                <ul className='cls_list_stats'>
                    {pokemon.stats.map((stat, i) => (
                            <li key={i} className='stats_item'>
                                <em>{stat.name.toUpperCase()}</em>
                                <p>{stat.value}</p>
                            </li>
                    ))}
                </ul>
            </div>
        </section> 

        <section className='moves_container'>
            <h2 className='movements_name'>Movements</h2>
            <div className='dv_movement_container'>
                 <ul className='cls_list_movements'>
                    {pokemon.moves.map((move, i) => (
                            <li key={i} className='move_item'>
                                <p>{move.toUpperCase()}</p>
                            </li>
                    ))}
                </ul>
            </div>
          
        </section>


    </section>
  )
}

export default PokemonDetailData