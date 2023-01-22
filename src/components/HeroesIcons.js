
const HeroesIcons = (props) => {
    
    const {data, fn} = props;

    return(
        <div className="heroes-icons">
            {
                data.map(hero => {
                    return <div className="container-hero" style={{ backgroundImage: `url(${hero.img})`}} key={hero._id} onClick={() => {fn(hero._id)}}></div>
                })
            }
        </div>
    )
}

export default HeroesIcons;