//import GameStatus from "./GameStatus";

import "./MoveDetails.css";
const MoveDetails = (props) => {
    let text = <p>Next move - {props.turn === "X" ? props.n1 : props.n2}</p>
    if (props.status === true) {
        if(props.winner === true)
        text =
            <div>
                <p>Game over! {props.turn === "X" ? props.n2 : props.n1} wins!</p>
                <button onClick={props.restart}>Play Again</button>
            </div>
        else
        text =
            <div>
                <p>Game Drawn!</p>
                <button onClick={props.restart}>Play Again</button>
            </div>

    }

    return (
        <div className="details-wrapper">
            {text}
        </div>
    )
}


export default MoveDetails;