const Header = props => (
  <header>
    <h1>{props.title}</h1>
    <span className="stats">Players: {props.totalPlayers}</span>
  </header>
);

class Counter extends React.Component {
  state = {
    score: 0
  };

  incrementScore = () => {
    this.setState(prevState => ({
      score: prevState.score + 1
    }));
  };

  decrementScore = () => {
    this.setState(prevState => ({
      score: prevState.score - 1
    }));
  };

  render() {
    return (
      <div className="counter">
        <button
          className="counter-action decrement"
          onClick={this.decrementScore}
        >
          -
        </button>
        <span className="counter-score">{this.state.score}</span>
        <button
          className="counter-action increment"
          onClick={this.incrementScore}
        >
          +
        </button>
      </div>
    );
  }
}

const Player = props => (
  <div className="player">
    <span className="player-name">
      <button
        className="remove-player"
        onClick={() => props.removePlayer(props.id)}
      >
        ✖
      </button>
      {props.name}
    </span>
    <Counter score={props.score} />
  </div>
);

class App extends React.Component {
  state = {
    players: [
      {
        name: "Player 1",
        id: 1
      },
      {
        name: "Player 2",
        id: 2
      },
      {
        name: "Player 3",
        id: 3
      }
    ]
  };

  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(player => player.id !== id)
      };
    });
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />
        {this.state.players.map(player => (
          <Player
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
          />
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
