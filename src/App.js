import './App.css';
import Controls from "./components/Controls/Controls"
import Display from "./components/Display/index"

function App() {
  return (
    <div className="App">
    <div className="container">
      <div className="col">
      <Controls/>
      </div>
    <div className="col">
    <Display />
    </div>

     
    </div>
      
    </div>
  );
}

export default App;
