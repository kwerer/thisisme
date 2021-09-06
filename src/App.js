import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Landing from "./components/Body/Landing";
import "./app.css";
function App() {
  return (
    <>
      <Router>
        <Route
          exact
          path="/"
          component={Landing}
        />
      </Router>
    </>
  );
}

export default App;
