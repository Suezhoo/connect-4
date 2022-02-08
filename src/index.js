import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Circle(props) {
    return (
        <button
            className="circle"
            style={{ backgroundColor: props.value }}
            onClick={props.onClick}
        ></button>
    );
}

function WinAlert(props) {
    return (
        <div className="WinAlert">
            <button>Play Again</button>
        </div>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            circles: Array(42).fill(null),
            xIsNext: true,
            color: "rgba(255,255,255,0.75)",
            gameOver: false,
        };
    }

    handleClick(i) {
        if (this.state.gameOver) return;
        const circles = this.state.circles.slice();
        if (circles[i]) return;
        this.dropCoin(i);
    }

    dropCoin(i) {
        do {
            if (
                this.state.circles[i] == null &&
                this.state.circles[i + 7] == null &&
                i <= 34
            ) {
                i += 7;
            } else if (this.state.circles[i] == null || i >= 35) {
                this.state.circles[i] = this.state.xIsNext ? "Yellow" : "Red";
                this.setState({
                    circles: this.state.circles,
                    xIsNext: !this.state.xIsNext,
                });
                this.checkWin(i);
            }
        } while (this.state.circles[i] == null);
    }

    renderCircle(i) {
        return (
            <Circle
                value={this.state.circles[i]}
                onClick={() => {
                    this.handleClick(i);
                }}
            />
        );
    }
    // Win conditions
    checkVertical(i) {
        const circles = this.state.circles.slice();
        if (
            circles[i] === circles[i + 7] &&
            circles[i] === circles[i + 14] &&
            circles[i] === circles[i + 21]
        ) {
            return true;
        } else return false;
    }

    checkWin(i) {
        if (this.checkVertical(i)) {
            this.setState({ gameOver: true });
            console.log(`Game won by ${this.state.circles[i]}`);
        }
    }

    replay() {
        this.setState({
            circles: Array(42).fill(null),
            xIsNext: true,
            color: "rgba(255,255,255,0.75)",
        });
    }

    render() {
        const status = `Next player: ${this.state.xIsNext ? "Yellow" : "Red"}`;
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderCircle(0)}
                    {this.renderCircle(1)}
                    {this.renderCircle(2)}
                    {this.renderCircle(3)}
                    {this.renderCircle(4)}
                    {this.renderCircle(5)}
                    {this.renderCircle(6)}
                </div>
                <div className="board-row">
                    {this.renderCircle(7)}
                    {this.renderCircle(8)}
                    {this.renderCircle(9)}
                    {this.renderCircle(10)}
                    {this.renderCircle(11)}
                    {this.renderCircle(12)}
                    {this.renderCircle(13)}
                </div>
                <div className="board-row">
                    {this.renderCircle(14)}
                    {this.renderCircle(15)}
                    {this.renderCircle(16)}
                    {this.renderCircle(17)}
                    {this.renderCircle(18)}
                    {this.renderCircle(19)}
                    {this.renderCircle(20)}
                </div>
                <div className="board-row">
                    {this.renderCircle(21)}
                    {this.renderCircle(22)}
                    {this.renderCircle(23)}
                    {this.renderCircle(24)}
                    {this.renderCircle(25)}
                    {this.renderCircle(26)}
                    {this.renderCircle(27)}
                </div>
                <div className="board-row">
                    {this.renderCircle(28)}
                    {this.renderCircle(29)}
                    {this.renderCircle(30)}
                    {this.renderCircle(31)}
                    {this.renderCircle(32)}
                    {this.renderCircle(33)}
                    {this.renderCircle(34)}
                </div>
                <div className="board-row">
                    {this.renderCircle(35)}
                    {this.renderCircle(36)}
                    {this.renderCircle(37)}
                    {this.renderCircle(38)}
                    {this.renderCircle(39)}
                    {this.renderCircle(40)}
                    {this.renderCircle(41)}
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-info">
                    {/* {Shows player turn, ect} */}
                </div>
                <div className="game-board">{<Board />}</div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
