import React, { useState } from "react";
import "./App.css";
import Listitem from "./Listitem";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [note, setnote] = useState("");
  const [items, setitems] = useState([]);

  const inputEvent = (ev) => {
    console.log(ev.target.value);
    const taskcontent = ev.target.value;
    setnote(taskcontent);
  };
  const onadd = () => {
    setitems((prevdata) => {
      return [...prevdata, note];
    });
    setnote("");
  };
  const ondelete = () => {
    console.log("deleted");
  };
  return (
    <div>
      <div className="container">
        <h1 align="center" className="heading">
          LAZZY-LIST
        </h1>
        <div className="row">
          <div className="col-md-8">
            <div className="form-group">
              <label>Lazzy Task</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your unimportant important lazzy task"
                name="task"
                value={note}
                onChange={inputEvent}
              />
              <small id="taskhelp" className="form-text text-muted">
                We'll never force you to complete this task.
              </small>
            </div>
          </div>

          <div className="col-md-4">
            <div className="row">
              <button
                type="button"
                className="btn btn-success col m-2"
                // disabled
                id="btn_add"
                onClick={onadd}
              >
                <i className="fas fa-plus-square"></i> ADD
              </button>
              <button
                type="button"
                className="btn btn-warning col m-2"
                disabled
                id="btn_reset"
              >
                <i className="fas fa-backspace"></i> RESET
              </button>
            </div>

            <div className="row">
              <button
                type="button"
                className="btn btn-primary col  m-2"
                disabled
                id="btn_sort"
              >
                <i className="fas fa-sort-amount-down"></i> SORT
              </button>
              <button
                type="button"
                className="btn btn-danger col m-2"
                id="btn_delete"
                onClick={ondelete}
              >
                <i className="fas fa-trash-alt"></i> DELETE
              </button>
            </div>
          </div>
        </div>
      </div>

      <ul className="list-group row m-2" id="ultask">
        {/* this is javascript so written {} */}
        {items.map((itemval, index) => {
          return <Listitem val={itemval} key={index} />;
        })}
      </ul>
    </div>
  );
}

export default App;
