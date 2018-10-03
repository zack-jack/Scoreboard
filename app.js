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

const App = () => (
  <div className="scoreboard">
    <Header title="Scoreboard" totalPlayers={1} />
    <Player name="Zack" score={35} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
