
const HeroesIcons = ({data}) => {

    return(
        <div className="heroes-icons">
            {
                data.map(hero => {
                    return <div className="container-hero" style={{ backgroundImage: `url(${hero.img})`}} key={hero._id}></div>
                })
            }
        </div>
    )
}

export default HeroesIcons;