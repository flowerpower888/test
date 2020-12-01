import React, { useState, useEffect } from "react";
import { Form } from "./components/Form";
import "./App.css";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://www.mrsoft.by/data.json";
    fetch(proxyurl + url)
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
