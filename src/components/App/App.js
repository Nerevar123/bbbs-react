import React from "react";
import styles from "./App.module.scss";
import Header from "../Header/Header";

function App() {
  return (
    <div className={styles.page}>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles.page__section}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Header />
    </div>
  );
}

export default App;
