import React, { useState, useEffect } from "react";
import { Form } from "./components/Form";
import "./App.css";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
        "https://www.mrsoft.by/data.json"
      )
      .then((res) => res.json())
      .then(dogs => setData(dogs.data))
  }, [data])

  return (
    <div className="container">
      <Form data={data} />
    </div>
  );
}

export default App;
