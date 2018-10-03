const players = [
  {
    name: "Player 1",
    score: 50
  },
  {
    name: "Player 2",
    score: 85
  },
  {
    name: "Player 3",
    score: 95
  }
];

const Header = props => (
  <header>
    <h1>{props.title}</h1>
    <span className="stats">Players: {props.totalPlayers}</span>
  </header>
);

const Counter = props => (
  <div className="counter">
    <button className="counter-action decrement"> - </button>
    <span className="counter-score">{props.score}</span>
    <button className="counter-action increment"> + </button>
  </div>
);

const Player = props => (
  <div className="player">
    <span className="player-name">{props.name}</span>
    <Counter score={props.score} />
  </div>
);

const App = props => (
  <div className="scoreboard">
    <Header title="Scoreboard" totalPlayers={props.players.length} />
    {props.players.map(player => (
      <Player name={player.name} score={player.score} />
    ))}
  </div>
);

ReactDOM.render(<App players={players} />, document.getElementById("root"));
