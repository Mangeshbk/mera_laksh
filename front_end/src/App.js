import logo from "./logo.svg";
import "./App.css";
import { Redirect, useHistory } from "react-router-dom";
import Routes from "./Pages/Routes";
// import Journy from "./Pages/journy/Journy";

function App() {
  const history = useHistory();
  const redirect = () => {
    window.location.href = "localhost://3000?apple=1";
  };
  console.log(history);
  return (
    <div>
      <Routes />
      {/* <Journy /> */}
    </div>
  );
}

export default App;
