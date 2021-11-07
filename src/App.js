import './App.css';

import Home from './components/Pages/Home'
import Register from './components/Pages/Register';
import Login from "./components/Pages/Login"
import NavBar from './components/includes/NavBar';
import LoanCalculatorMember from './components/Pages/LoanCalculatorMember';
import LoanCalculatorDemo from './components/Pages/LoanCalculatorDemo';

import Dashboard from './components/Pages/Dashboard';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";







export default function App() {
  return (
    <Router>
      <NavBar/>
      <div className="bg-indigo-900">
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/loan_calculator/:id">
            <LoanCalculatorMember />
          </Route>

          <Route path="/loan_calculator_demo/">
            <LoanCalculatorDemo />
          </Route>
          
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>
          
          <Route path="/dashboard/:id"  >
            <Dashboard />
          </Route>

          {/* <Redirect from="/login" to="/dashboard/{id}" /> */}

          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

