import Routes from "./routes";
import React, { useState, useEffect } from "react";
import { GetHeroes } from "./server/getData";

export const MyContext = React.createContext();

const App = () => {

  const [heroData, setHeroData] = useState();

  useEffect( () => {
    const url = "http://localhost:5000/api/hero";
    const fetchData = async () => {
      try{
        const data = await GetHeroes(url);
        setHeroData(data);
      }catch(error){
        console.log(error)
      }
    }
    fetchData();
  }, []);

    return (
      <MyContext.Provider value = {heroData}>
        <>
          <Routes />
        </>
      </MyContext.Provider>
    );
}

export default App;
