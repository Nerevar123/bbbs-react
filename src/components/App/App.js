import { Router, Route, Switch, useHistory } from "react-router-dom";
import styles from "./App.module.scss";
import Header from "../Header/Header";
import Calendar from "../Calendar/Calendar";
import Menu from "../Menu/Menu";

function App() {
  const history = useHistory();
  return (
    <Router history={history} basename="/">
      <Header>
        <Menu />
      </Header>
      <main className={styles.main}>
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route exact path="/calendar">
            <Calendar />
          </Route>
        </Switch>
      </main>
      <footer>Footer</footer>
    </Router>
  );
}

export default App;
