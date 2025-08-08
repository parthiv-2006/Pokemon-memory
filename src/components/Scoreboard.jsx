function Scoreboard({ score, highScore }) {
    return (
        <div>
            <div>
                <h1>Poke Memory</h1>
                <p>Test your memory on wild pokemon</p>
            </div>
            <div>
                <p>Score: {score}</p>
                <p>High Score: {highScore}</p>
            </div>
        </div>
    )
}

export default Scoreboard;