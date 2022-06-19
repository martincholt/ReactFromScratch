import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      <Message/>
      {/* <Greet name="Martin" heroName="Sirius">
        <p>This is children props</p>
      </Greet>
      <Greet name="Cris" heroName="Hermione">
        <button>Action</button>
      </Greet>
      <Greet name="Lobita" heroName="Hedwig"/>
      <Welcome name="Martin" heroName="Sirius"/>
      <Welcome name="Cris" heroName="Hermione"/>
      <Welcome name="Lobita" heroName="Hedwig"/>
      <Hello /> */}
    </div>
  );
}

export default App;
