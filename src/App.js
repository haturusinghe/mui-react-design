import React from "react";
import Navbar from "./components/Navbar";
import { Controls } from "./components/controls/Controls";

function App() {
  return (
    <>
      <Navbar />
      <Controls.TextInput label="text goes here" />
    </>
  );
}

export default App;
