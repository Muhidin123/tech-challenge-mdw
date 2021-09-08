import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

import "./Styles/App.scss";

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
