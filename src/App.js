import logo from "./logo.svg";
import "./App.css";
import Aqib from "./Components/Aqib/Aqib";
import Khizer from "./Components/Khizer/Khizer";
import Saqib from "./Components/Saqib/Saqib";
import Rafik from "./Components/Rafik/Rafik";
import Athar from "./Components/Athar/Athar";

function App() {
  return (
    <div className="App">
      <Aqib/>
      <Khizer/>
      <Saqib/>
      <Rafik/>
      <Athar/>
    </div>
  );
}

export default App;
