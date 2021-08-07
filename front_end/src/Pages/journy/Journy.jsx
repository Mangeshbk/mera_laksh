import React from "react";
import SingleJourny from "../../components/singleJourney/SingleJourney";

function Journy() {
  return (
    <div style={{ margin: "100px auto 50px" }}>
      <h2 style={{ textAlign: "center", padding: "20px" }}>
        START YOUR JOURNY
      </h2>
      <SingleJourny />
      <SingleJourny />
    </div>
  );
}

export default Journy;
