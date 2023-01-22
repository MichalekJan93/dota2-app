import { useContext, useState, useEffect } from "react";
import { MyContext } from "../App";
import RightContent from "./RightContent";

const HeroStats = ({heroid}) => {
    const [hero, setHero] = useState()
    const getData = useContext(MyContext);

    const getHero = (data) => {
        const heroData = data.filter(hero => hero._id === heroid)
        return heroData;
    }

    useEffect(() => {
        if(getData){
            const dataHero = getHero(getData);
            setHero(dataHero)
        }
    },[getData]);

    console.log(hero)

    if(hero){
        const attrClassName = `hero-attr ${hero[0].attr}`;

        return(
            <div className="content">
                <div className="left-content-box hero">
                    <div className="hero-stats">
                        <div className="hero-name">{hero[0].name}</div>
                        <div className={attrClassName}></div>
                    </div>
                    <div className="hero-video">
                        <video poster={hero[0].imgPerson} autoPlay preload="auto" loop playsInline muted>
                            <source src={hero[0].video} type="video/webm" />
                            <img src={hero[0].imgPerson} alt={hero[0].name}/>
                        </video>
                    </div>
                </div>
                <RightContent />
            </div>
        )
    }
}

export default HeroStats;