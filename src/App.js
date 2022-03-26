import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import "./App.css";
import Home from './pages/Home'
import Search from './pages/Search'
import Tutor from './pages/Tutor'
import Selected  from "./pages/Selected";
function App() {
    return (
    <Router>
    
        <Switch>
        <Route path='/search' component={Search} />
        <Route path='/tutor' component={Tutor} />
        <Route path='/selected' component ={Selected}/>
        <Route path='/' exact component={Home} />
            
        </Switch>
        
    </Router>
      
    );
}

export default App;
