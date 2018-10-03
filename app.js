const players = [
  {
    name: "Player 1",
    score: 50,
    id: 1
  },
  {
    name: "Player 2",
    score: 85,
    id: 2
  },
  {
    name: "Player 3",
    score: 95,
    id: 3
  }
];

const Header = props => (
  <header>
    <h1>{props.title}</h1>
    <span className="stats">Players: {props.totalPlayers}</span>
  </header>
);

class Counter extends React.Component {
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{this.props.score}</span>
        <button className="counter-action increment"> + </button>
      </div>
    );
  }
}

const Player = props => (
  <div className="player">
    <span className="player-name">{props.name}</span>
    <Counter score={props.score} />
  </div>
);

const App = props => (
  <div className="scoreboard">
    <Header title="Scoreboard" totalPlayers={props.initialPlayers.length} />
    {props.initialPlayers.map(player => (
      <Player
        name={player.name}
        score={player.score}
        key={player.id.toString()}
      />
    ))}
  </div>
);

ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById("root")
);
