import React from "react";
import ReactDOM from "react-dom/client";
import * as math from "../Math";
import Header from "./components/Header";
import Body from "./components/Body";
{/* <div>
  <di>
    <div>This is title</div>
  </di>
</div> */}
// const title = React.createElement('div', {}, React.createElement('div', {}, React.createElement('div', {}, "This is Title"))); // react element 


console.log(math.add(2, 3));



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
