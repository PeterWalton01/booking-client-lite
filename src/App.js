import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import MessageBar from "./components/MessageBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Logon from "./components/Logon";
import Register from "./components/Register";
import Logout from "./components/Logout";
import Client from "./components/Client";
/* Function Header
 *
 * function for the main application. This also
 * manages routing.
 * @author Peter Walton
 */
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Nav />
        <MessageBar />
        <Switch>
          <Route path="/appointment">
            <Main />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/login">
            <Logon />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/client">
            <Client />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
