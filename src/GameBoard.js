import './GameBoard.css';

const GameBoard = (props) => {
    return (
        <div className="Board-wrap">
            <div className="Board-row">
                <button onClick={() => { props.clickhandler(0) }}>{props.nums[0].value}</button>
                <button onClick={() => { props.clickhandler(1) }}>{props.nums[1].value}</button>
                <button onClick={() => { props.clickhandler(2) }}>{props.nums[2].value}</button>
            </div>

            <div className="Board-row">
                <button onClick={() => { props.clickhandler(3) }}>{props.nums[3].value}</button>
                <button onClick={() => { props.clickhandler(4) }}>{props.nums[4].value}</button>
                <button onClick={() => { props.clickhandler(5) }}>{props.nums[5].value}</button>
            </div>

            <div className="Board-row">
                <button onClick={() => { props.clickhandler(6) }}>{props.nums[6].value}</button>
                <button onClick={() => { props.clickhandler(7) }}>{props.nums[7].value}</button>
                <button onClick={() => { props.clickhandler(8) }}>{props.nums[8].value}</button>
            </div>
        </div>
    )
}

export default GameBoard;