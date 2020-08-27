import React, { useState } from "react";

const Listitem = (props) => {
  const [toggleclass, setclass] = useState("list-group-item col-8");

  const togglelistitem = (ev) => {
    setclass("list-group-item col-8 done");
  };
  return (
    <div>
      <li className={toggleclass} onClick={togglelistitem}>
        {props.val}
        <i className="fas fa-trash-alt"></i>
      </li>
    </div>
  );
};

export default Listitem;
