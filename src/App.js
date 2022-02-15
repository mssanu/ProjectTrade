
import './App.css';
import Footer from './Footer';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sample from './Sample';
import Main from './Main'
function App() {
  return (
    <Router>
    <div className="App">
  <Switch>
    <Header/>
    <Main/>
    <Footer/>
    <Route path="Sample">
      <Sample/>
    </Route>
  </Switch>
    </div>
        </Router>
  );
}

export default App;
