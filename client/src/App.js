import './App.css';
import {Route,Switch} from 'react-router-dom';
import Home from './Home';
import AddForm from './AddForm';
import UpdateForm from './UpdateForm';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Accounts api!</h1>
      <Switch>
        <Route path="/addaccount">
          <AddForm />
        </Route>

        <Route path="/updateaccount">
          <UpdateForm />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
