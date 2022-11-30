import React from "react";
import BarChart1 from "./Charts/BarChart1";
import BarChart2 from "./Charts/BarChart2";
import PieChart1 from "./Charts/PieChart1";
import PieChart2 from "./Charts/PieChart2";
import ScatterChart1 from "./Charts/ScatterChart1";
import ScatterChart2 from "./Charts/ScatterChart2";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <h1 className="font-weight-light">World University Rankings Visualized</h1>
            <p>
              Below are charts depicting subsets of the 
              <a href="https://www.topuniversities.com/university-rankings/world-university-rankings/2023" style={{color: 'blue'}}> QS World University Rankings 2023</a>
              . The following data is pulled from a PostgreSQL Database and displayed via Plotly.js.
            </p>
          </div>
            <ScatterChart1 />
            <p>*How rank correlates to scoring for 496 universities (Hover over point for University Name). </p>
            <ScatterChart2 />
            <p>*Higher reputation is not an exact correlation for a better score (Hover over points for University Name).</p>
            <PieChart1 />
            <BarChart1 />
            <BarChart2 />
            <PieChart2 />
            <p>*Tech schools were filtered as naming Tech inside university name</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
