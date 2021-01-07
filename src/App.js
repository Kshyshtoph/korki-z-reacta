import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, NotFound, Form } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/form" exact component={Form} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
