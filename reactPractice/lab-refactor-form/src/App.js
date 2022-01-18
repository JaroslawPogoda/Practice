import ControlledForm from "./components/ControlledForm.jsx";
import React, { useState } from "react";
import "./App.css";
import Print from "./components/Print";
import UncontrolledForm from "./components/UncontrolledForm";

function App() {
  let [data, setValue] = useState({ dataProperty: [] });
  const getData = (inputData) => {
    setValue((data1) => {
      return { ...data1, dataProperty: [...data.dataProperty, inputData] };
    });
  };
  return (
    <div className="App">
      <ControlledForm getData={getData} />
      {data.dataProperty.map((data) => (
        <Print data={data} />
        
      ))}
      <UncontrolledForm/>
    </div>
  );
}

export default App;
