import Heroes from "./Heroes";

const LeftContent = () => {
    return(
        <div className="left-content-box">
            <div className="game-header">
                <h1>DOTA2</h1>
                <button>Play now</button>
            </div>
            <Heroes />
        </div>
    )
}

export default LeftContent;