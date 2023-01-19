import Menu from "./Menu";
import Content from "./Content";

const MainPage = () => {
    /* if(props.data !== undefined){
        return(
            <div>
                 {
                props.data.map((hero) => {
                    return <img srcSet={hero.img} alt="img"/>
                })
            }
            </div>
        )
    } */

    return(
        <>
            <Menu />
            <Content />
        </>
    )
}

export default MainPage;