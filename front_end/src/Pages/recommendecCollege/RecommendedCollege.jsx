import React from "react";
import CollegeCrad from "../../components/collegeCard/CollegeCrad";
import "./recommandCollege.css";
const RecommendedCollege = () => {
  return (
    <div className="project-section">
      <div class="album py-5">
        <div class="container">
          <div class="row">
            <CollegeCrad />
            <CollegeCrad />
            <CollegeCrad />
            <CollegeCrad />
            <CollegeCrad />
            <CollegeCrad />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedCollege;
