import './gameStatus.css';

const GameStatus = (props) => {

    let status = <p>INVALID MOVE!</p>
    const temparr = [...props.moves];
    const gameOver = () => {
        if ((temparr[0].value === temparr[1].value && temparr[1].value === temparr[2].value && (temparr[0].value === "X" || temparr[0].value === "O"))
            || (temparr[3].value === temparr[4].value && temparr[4].value === temparr[5].value && (temparr[4].value === "X" || temparr[4].value === "O"))
            || (temparr[6].value === temparr[7].value && temparr[7].value === temparr[8].value && (temparr[7].value === "X" || temparr[7].value === "O"))
            || (temparr[0].value === temparr[3].value && temparr[3].value === temparr[6].value && (temparr[3].value === "X" || temparr[3].value === "O"))
            || (temparr[1].value === temparr[4].value && temparr[4].value === temparr[7].value && (temparr[4].value === "X" || temparr[4].value === "O"))
            || (temparr[2].value === temparr[5].value && temparr[5].value === temparr[8].value && (temparr[5].value === "X" || temparr[5].value === "O"))
            || (temparr[0].value === temparr[4].value && temparr[4].value === temparr[8].value && (temparr[4].value === "X" || temparr[4].value === "O"))
            || (temparr[2].value === temparr[4].value && temparr[4].value === temparr[6].value && (temparr[4].value === "X" || temparr[4].value === "O"))) {
            props.finish();
            props.makeWinner();
            return true;

        }
        else if (!(temparr[0].value === " " || temparr[1].value === " " || temparr[2].value === " "
            || temparr[3].value === " " || temparr[4].value === " " || temparr[5].value === " "
            || temparr[6].value === " " || temparr[7].value === " " || temparr[8].value === " ")) {
            props.finish();
            return true;
        }
        return false;
    }

    if (props.isValid === true) {
        if (gameOver() !== true)
            status = <p><div className="pname"><b>{props.n1} - [X]</b></div><div className="pname"><b>{props.n2} - [O]</b></div></p>
        else
            status = <p>No moves remaining</p>

    }

    return (
        <div className="status-wrapper">
            {status}
        </div>
    );
}

export default GameStatus;