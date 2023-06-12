import { Outlet, useNavigate } from "react-router-dom";
import LinesTopStyle from "./LinesTopStyle/LinesTopStyle";
import './Layout.css';
import { useContext } from "react";
import { UserNameContext } from "../../../context/UserNameContext";

const Layout = () => {
  const { removeUserName } = useContext(UserNameContext);
  const navigate = useNavigate();

  const logout = () => {
    removeUserName();
    navigate('/');

  }

  return (
    <section className="layout_container">
      <header>
        <LinesTopStyle /> 
        <button onClick={logout}></button>
      </header>
      <main className="main_container">
        <Outlet />
      </main>
      <footer>
       
      </footer>
    </section>
  );
};

export default Layout;
