import { Router, Route, Switch, useHistory } from "react-router-dom";
import styles from "./App.module.scss";
import Header from "../Header/Header";
import Calendar from "../Calendar/Calendar";
import Menu from "../Menu/Menu";
import Main from "../Main/Main";

function App() {
  const history = useHistory();
  return (
    <Router history={history} basename="/">
      <Header />
      <main className={styles.main}>
        <Switch>
          <Route exact path="/">
            <Main />
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
