import { useState } from "react";
import Card from "./Components/Card";
import Form from "./Components/Form";
import "./Styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Form/>
    </>
  );
}

export default App;
