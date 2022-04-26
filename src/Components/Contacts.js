import React, { useEffect } from "react";
import { connect } from "react-redux";

function Contacts() {
  return (
    <React.Fragment>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="container"
      >
        <div>
          <h1>All Contacts</h1>
        </div>
        <div>
          <button className="btn btn-success">ADD CONTACCTS </button>
        </div>
      </div>


    </React.Fragment>
  );
}

export default Contacts;
