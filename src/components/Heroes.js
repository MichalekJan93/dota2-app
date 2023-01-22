import HeroesIcons from "./HeroesIcons";
import { useState, useEffect, useContext } from "react";
import { MyContext } from "../App";

const Heroes = () => {

    const [heroData, setHeroData] = useState();
    const getData = useContext(MyContext);

    useEffect(() => {
        setHeroData(getData);
    }, [getData]);

    const openHeroStats = (id) => {
        window.location.href = `/hero/${id}`;
    }

    return  (
        <div className="heroes">
            <h2 className="heroes-title">Heroes</h2>
            <div className="heroes-divideds">
                <div className="heroes-divided">
                    <div className="heroes-attr heroes-str">
                        <img src="./img/strength.png" alt="dota2-app" />
                        <div className="heroes-divided-paragraph">
                            <p>STRENGTH</p>
                        </div>
                    </div>
                </div>
                <div className="heroes-divided">
                    <div className="heroes-attr heroes-agl">
                        <img src="./img/agility.png" alt="dota2-app" />
                        <div className="heroes-divided-paragraph">
                            <p>AGILITY</p>
                        </div>
                    </div>
                </div>
                <div className="heroes-divided">
                    <div className="heroes-attr heroes-int">
                        <img src="./img/intelligence.png" alt="dota2-app" />
                        <div className="heroes-divided-paragraph">
                            <p>INTELLIGENCE</p>
                        </div>
                    </div>
                </div>
            </div>
            {heroData && <HeroesIcons data={heroData} fn={openHeroStats}/>}
        </div>
    )
}

export default Heroes;