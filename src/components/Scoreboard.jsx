import style from "../styles/Scoreboard.module.css";


function Scoreboard({ score, highScore }) {
    return (
        <div className={style["header-container"]}>
            <div className={style["title-container"]}>
                <h1>Poke Memory</h1>
                <p>Test your memory on wild pokemon</p>
            </div>
            <div className={style["score-container"]}>
                <p>Score: {score}</p>
                <p>High Score: {highScore}</p>
            </div>
        </div>
    )
}

export default Scoreboard;