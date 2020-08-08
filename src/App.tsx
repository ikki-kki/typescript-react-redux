import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greetings from "./Greeting";

function App() {
  const onClick = (name: string) => {
    console.log(`${name} say Hello`);
  };
  return <Greetings name="hello" onClick={onClick} />;
}

export default App;
