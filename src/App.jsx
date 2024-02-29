import { useState } from "react";
import Card from "./components/Card";
import Form from "./Components/Form";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card/>
      <Form/>
    </>
  );
}

export default App;
