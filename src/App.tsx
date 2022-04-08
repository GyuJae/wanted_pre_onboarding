import React from "react";
import Input from "./components/Input";
import Slider from "./components/Slider";
import Tab from "./components/Tab";
import Toggle from "./components/Toggle";

function App() {
  return (
    <div className="py-10 flex flex-col space-y-28 justify-center items-center pb-52">
      <Toggle />
      <Tab />
      <Slider />
      <Input />
    </div>
  );
}

export default App;
