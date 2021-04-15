import { Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/organisms/navbar";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import Dashboard from "./components/pages/dashboard";
import About from "./components/pages/about";
import AddUser from "./components/pages/add-user";

function App() {
  return (
    <div>
      <Navbar />

      <div className="container-fluid mt-3 p-2">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/add-user">
            <AddUser />
          </Route>
          <Route exact path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
