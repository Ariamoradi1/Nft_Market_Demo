
import React, { useState } from "react";
import { useRoutes } from "react-router";
import { routes } from "./Routes";
import userData from "./Context/Shopping";




function App() {
  const [Counter, setCounter] = useState(0)
  const [UserBasket, setUserBasket] = useState([])
  

  const route = useRoutes(routes)
  return ( 
    <>
    <userData.Provider value={{
    Counter,
    setCounter,
    UserBasket,
    setUserBasket
    }}>
  {route}
  </userData.Provider>
  </>
  );
}

export default App;
