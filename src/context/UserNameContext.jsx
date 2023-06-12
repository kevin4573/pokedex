import { createContext, useState } from "react";

export const UserNameContext = createContext(null);

export const UserNameProvider = ({ children }) => {

    const [userName, setUserName] = useState(localStorage.getItem('userName') ?? '');
 
    const seveUserName = (newUserName) => {
        setUserName(newUserName);
        localStorage.setItem('userName', newUserName);
    }

    const removeUserName = () => {
        setUserName('');
        localStorage.removeItem('userName');
    }
   
return (
    <UserNameContext.Provider value={{ userName, seveUserName, removeUserName }}>
        {children}
    </UserNameContext.Provider>
  )
}

