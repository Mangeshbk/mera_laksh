import logo from './logo.svg';
import './App.css';
import {Redirect,useHistory} from 'react-router-dom';
// import useHistory from ''
function App() {
  const history = useHistory();
  const redirect = () =>{
    window.location.href="localhost://3000?apple=1"

  }
  console.log(history);
  return (
    <div className="App">
      <header className="App-header">
        MeraLaksh <br/>
        Search Params:{window.location.search}
        <button onClick={redirect}>Reload</button>
      </header>
    </div>
  );
}

export default App;
