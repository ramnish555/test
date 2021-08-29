import Login from './components/Login';
import Home from './components/Home';
import {Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/test" component={Login}></Route>
        <Route exact path="/test/login" component={Login}></Route>
        <Route exact path="/test/home" component={Home}></Route>
      </Switch>
    </>
  );
}

export default App;
