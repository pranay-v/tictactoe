import './Welcomeform.css';

const Welcomeform = (props) => {


    return (
        <div className="Welcome-wrap">
            <div className="Welcome-inner">
                <center><h2 className="welcome-h2">Tic Tac Toe</h2></center>
                <form onSubmit={props.submit}>
                    <center>Player 1:</center><input className="welcome-input" type="text" onInput={props.nameInput1} />
                    <center>Player 2:</center><input className="welcome-input" type="text" onInput={props.nameInput2} />
                    <button className="welcome-button">Start</button>
                </form>
            </div>
        </div>
    )

}

export default Welcomeform;