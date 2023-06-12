import { useEffect, useState } from 'react';
import { getAllTypes } from '../../../services/getAllTypes';

import './FiltersForm.css';
import { Form } from 'react-router-dom';

const FiltersForm = ({ nameInitial, typeInitial }) => {
    
    const [types, setTypes] = useState([]);
    const [pokemonNameValue, setPokemonNameValue] = useState('nameInitial');
    const [typeValue, setTypeValue] = useState('typeInitial');

    
    const handleChange = (e) => {
      setPokemonNameValue(e.target.value);

    }
  

    const handleTypeChange = (e) => {
        const newTypeValue = e.target.value;
        setTypeValue(newTypeValue);
    }

    useEffect(() => {
      const loadTypes = async () => {
        const typesList = await getAllTypes();
        setTypes(typesList);
      }
      loadTypes();
    }, []);

    useEffect(() => {
      setPokemonNameValue(nameInitial);
      setTypeValue(typeInitial);
    }, [nameInitial, typeInitial ])

  return (
    <Form>
        <div className='inputs_container'>
              
            <div className='inputs_seach_btn'>
                <input type="text" className='form_input_name' value={pokemonNameValue} onChange={handleChange} placeholder="Escribe tu Pokemón" name="pokemonName"></input>
                
            </div>
            
            <select name="pokemonType" className='form_select_type' onChange={handleTypeChange} value={typeValue} >
                <option value={''}>Filtrar - todos</option>
                { types.map(type => (
                    <option key={type.id} value={type.id}>{type.name}</option>
                )) }
            </select>

            <button className='form_btn_search'>PokeSearch</button>
         </div>
        
    </Form>
  )
}

export default FiltersForm