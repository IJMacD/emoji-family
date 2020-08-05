import React from 'react';
import './App.css';

function App() {
  const [ adults, setAdults ] = React.useState(["👩", "👨"]);
  const [ children, setChildren ] = React.useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Emoji Family</h1>
        <div className="emoji-family">{[...adults, ...children].join("\u200d")}</div>
      </header>
      <div>
        <section className="section-members">
          <h1>Members</h1>
          <div className="members-list">
            <h2>Adults</h2>
            <p>{adults.map((p,i) => <span onClick={() => setAdults(adults.filter((_,j) => i !== j))}>{p}</span>)}</p>
          </div>
          <div className="members-list">
            <h2>Children</h2>
            <p>{children.map((p, i) => <span onClick={() => setChildren(children.filter((_,j) => i !== j))}>{p}</span>)}</p>
          </div>
        </section>
        <section className="section-add">
          <h1>Add Members</h1>
          <p>
            <button onClick={() => setAdults([...adults, "👨"])}>👨</button>
            <button onClick={() => setAdults([...adults, "👩"])}>👩</button>
            <button onClick={() => setChildren([...children, "👦"])}>👦</button>
            <button onClick={() => setChildren([...children, "👧"])}>👧</button>
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
