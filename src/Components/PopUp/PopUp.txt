import React from "react";
import "./PopUp.css";

const PopUp = (props)=> {
  return props.display ? (
    <div className="popup-inner">
      <span class="close" onClick={() => props.setDisplay(false)}>
        X
      </span>

      {props.children}
    </div>
  ) : (
    ""
  );
}

export default PopUp;
