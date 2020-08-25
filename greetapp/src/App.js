import React, { useState } from "react";

const App = () => {
  let currtime = new Date().toLocaleTimeString();

  //concept of hooks
  let [ctime, sctime] = useState(currtime);
  setInterval(() => {
    currtime = new Date().toLocaleTimeString();
    sctime(currtime);
  }, 1000);

  return (
    <div className="greetmsg">
      <span>{currtime}</span>
      {/* <button onClick={updatetime}>Get Time</button> */}
    </div>
  );
};
export default App;
