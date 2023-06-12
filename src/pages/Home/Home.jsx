import { useContext } from "react";
import pokeapi from "../../assets/img/pokeapi.png";
import UserNameForm from "../../components/Home/UserNameForm/UserNameForm";
import { UserNameContext } from "../../context/UserNameContext";
import { useLocation, useNavigate } from "react-router-dom";
import esfera from "../../assets/gif/esfera.gif";

import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const { seveUserName } = useContext(UserNameContext);
  const location = useLocation();

  const handleSendName = (userNameValue) => {
    seveUserName(userNameValue);
    navigate(location.state?.from ?? '/pokedex');
  };

  return (
    <section className="home_container">
      <div className="home_pekedex_img">
        <img src={pokeapi} alt="" />
      </div>

      <br></br>

      

      <UserNameForm onSendName={handleSendName} />

      <div className="item_container">
        <img className="esfera" src={esfera} alt="GIF" />
      </div>

 
    </section>
  );
};

export default Home;
