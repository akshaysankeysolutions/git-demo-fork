import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="subHeading">
          Hey, this is Git Session & today is Tuesday 8th September. <br />
          And it's a beautiful sunny Day.
        </p>

        <button>Click Here!</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ---Learn Git---
        </a>

        <ul>
          <li>Introduction to Git</li>
          <li>Basic Git Commands</li>
          <li>Branching and Merging</li>
          <li>Amend, Revert & Reset</li>
          <li>Stash and Cherry-Pick</li>
        </ul>
      </header>

      <h2>Lorem Paragraph Below :</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
}

export default App;
