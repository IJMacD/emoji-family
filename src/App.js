import React from 'react';
import './App.css';

const SKIN_MODIFIERS = "\u{1f3fb}\u{1f3fc}\u{1f3fd}\u{1f3fe}\u{1f3ff}";
const HAIR_MODIFIERS = "\u{1f9b0}\u{1f9b1}\u{1f9b2}\u{1f9b3}";

function App() {
  const [ adults, setAdults ] = React.useState(["👩", "👨"]);
  const [ children, setChildren ] = React.useState([]);

  const [ skin, setSkin ] = React.useState("");
  const [ hair, setHair ] = React.useState("");

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
            <button onClick={() => setAdults([...adults, "👨" + skin + hair])}>{`👨${skin}${hair}`}</button>
            <button onClick={() => setAdults([...adults, "👩" + skin + hair])}>{`👩${skin}${hair}`}</button>
            <button onClick={() => setChildren([...children, "👦" + skin + hair])}>{`👦${skin}${hair}`}</button>
            <button onClick={() => setChildren([...children, "👧" + skin + hair])}>{`👧${skin}${hair}`}</button>
          </p>
          <p style={{display:"flex",justifyContent:"center"}}>
            <button onClick={() => setSkin("")}>Default</button>
            {
              [...SKIN_MODIFIERS].map(c => <button onClick={() => setSkin(c)}>{c}</button>)
            }
          </p>
          {/* <p style={{display:"flex",justifyContent:"center"}}>
            <button onClick={() => setHair("")}>Default</button>
            {
              [...HAIR_MODIFIERS].map(c => <button onClick={() => setHair("\u200d" + c)}>{c}</button>)
            }
          </p> */}
        </section>
      </div>
    </div>
  );
}

export default App;
