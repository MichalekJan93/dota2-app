import Routes from "./routes";
import { useState, useEffect } from "react";
import { GetHeroes } from "./server/getData";
import MainPage from "./components/MainPage";


const App = () => {

  const [heroData, setHeroData] = useState();

  useEffect( () => {
    const url = "http://localhost:5000/api/hero";
    const fetchData = async () => {
      const data = await GetHeroes(url);
      setHeroData(data);
    }

    fetchData();
  }, []);
  
  return (
    <div className="App">
      <MainPage data={heroData}/>
    </div>
  );
}

export default App;
