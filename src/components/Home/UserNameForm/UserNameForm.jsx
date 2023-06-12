import { useState } from 'react'
import './UserNameForm.css'

const UserNameForm = ({ onSendName }) => {
   const [userNameValue, setUserNameValue] = useState('');
   const [nameError, setNameError] = useState('');

   const handleChange = (e) => {
      const nameValue = e.target.value;

       if (!nameValue) setNameError(" El campo esta vacio");
       else if (/[^a-z]/i.test(nameValue)) setNameError(" Solo esta permitido letras sin espacios");
       else if (!/^[a-z]{2,} ?/i.test(nameValue)) setNameError(" Debes escribir dos letras como minimo");
       else setNameError("");

       setUserNameValue(nameValue);
   }

   const handleSubmit = (e) => {
     e.preventDefault();
     
     if (userNameValue === '') return;
     if (!nameError) onSendName(userNameValue);
  
   };

  return (
      <form onSubmit={handleSubmit}>
          { Boolean(nameError) && <p style={{color:"red"}}>{nameError}</p> }
        <div className="home_pokedex_start">
          <input className="home_pokedex_input_name" onChange={handleChange} value={userNameValue} type="text" placeholder=" Identificate, maestro pokemón" />
          <button className="home_pokedex_btn_start" type='submit'>PokeSearch</button>
        </div>
      </form>
  )
}

export default UserNameForm