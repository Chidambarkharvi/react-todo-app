import React from "react";

function RemoveAll(props) {
  
  return (
    <div>
      <div className="showItems">
        {props?.items && props?.items?.length > 0 ? (
          <button
            title="Remove all"
            style={{
              borderRadius: "10px",
              padding: "7px",
              border: "1px solid rgb(52, 152, 219)",
              outline: "none",
              backgroundColor: "#719ece",
            }}
            className="btn effect04"
            onClick={props.remove}
          >
            <span>Remove All </span>{" "}
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default RemoveAll;
