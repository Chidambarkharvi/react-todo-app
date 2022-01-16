import React, { useState, useEffect } from "react";
import Completed from "./Completed";
import RemoveAll from "./RemoveAll";
function Delete(props) {
  const [isCompletedArray, setIsCompletedArray] = useState([]);

  return (
    <div>
      <div className="showItems">
        {props.item.map((ele, ind) => {
          return (
            <div
              key={ind}
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "15px",
              }}
              className="eachItem"
            >
              <label
                style={{
                  backgroundColor: "white",
                  color: "black",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                  textDecoration: isCompletedArray.includes(ind)
                    ? "line-through"
                    : "none",
                }}
              >
                {" "}
                {ele}{" "}
              </label>

              <button
                style={{
                  width: "60px",
                  color: "rgb(52, 152, 219) ",
                  backgroundColor: "black",
                  borderRadius: "6px",
                  outline: "none",
                  border: "1px solid rgb(52, 152, 219)",
                }}
                className=" add-btn"
                title="Delete Item"
                onClick={() => {
                  props.delete(ind);
                }}
              >
                Delete
              </button>
              <Completed
                onClick={() => {
                  if (isCompletedArray.includes(ind)) {
                    let item = isCompletedArray.indexOf(ind);
                    setIsCompletedArray([isCompletedArray.splice(item, 1)]);
                  } else {
                    setIsCompletedArray([...isCompletedArray, ind]);
                  }
                }}
              />
            </div>
          );
        })}
      </div>
      <RemoveAll
        items={props?.item}
        remove={() => {
          props.removeAll();
        }}
      />
    </div>
  );
}

export default Delete;
