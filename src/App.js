import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import SubmissionCreate from "./components/SubmissionCreate";
import SubmissionList from "./components/SubmissionList";
import SubmissionDetail from "./components/SubmissionDetail";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className={'App'}>
          <Home/>
          <Switch>
              <Route exact path={'/'} component={SubmissionCreate}/>
              <Route path={'/list'} component={SubmissionList}/>
              <Route path={'/detail/:id'} component={SubmissionDetail}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
