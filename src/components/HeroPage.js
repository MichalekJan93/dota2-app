import Menu from "./Menu";
import HeroStats from "./HeroStats";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const HeroPage = () => {
    const [heroID, setHeroID] = useState(null);
    
    const { id } = useParams();

    useEffect(() =>{
        setHeroID(id);
    }, [])

    return(
        <>
            <Menu />
            {heroID && <HeroStats heroid={heroID}/>}
        </>
    )
}

export default HeroPage;