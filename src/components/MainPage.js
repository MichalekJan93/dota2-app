
const MainPage = (props) => {
    if(props.data !== undefined){
        return(
            <div>
                 {
                props.data.map((hero) => {
                    return <img srcSet={hero.img} alt="img"/>
                })
            }
            </div>
        )
    }
    
    return(
        <p>Loading ...</p>
    )
}

export default MainPage;