import { useState } from "react";
import "./App.css";
import Buttons from "./Buttons";
import Display from "./Display";
function App() {
  const [calVal, setCalVal] = useState("");
  const onbuttonclick = (buttonText) => {
    if (buttonText === "C" || buttonText === "c") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayvalue = calVal + buttonText;
      setCalVal(newDisplayvalue);
    }
  };
  return (
    <div id="calculator">
      <Display displayValue={calVal} />
      <Buttons onbuttonclick={onbuttonclick} />
    </div>
  );
}
export default App;
