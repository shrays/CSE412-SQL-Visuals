import React from "react";
import BarChart1 from "./Charts/BarChart1";
import PieChart1 from "./Charts/PieChart1";
import PieChart2 from "./Charts/PieChart2";
import ScatterChart1 from "./Charts/ScatterChart1";
import ScatterChart2 from "./Charts/ScatterChart2";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <h1 class="font-weight-light">World University Rankings Visualized</h1>
            <p>
              Below are charts depicting subsets of the 
              <a href="https://www.topuniversities.com/university-rankings/world-university-rankings/2023" style={{color: 'blue'}}> QS World University Rankings 2023</a>
              . The following data is pulled from a PostgreSQL Database and displayed via Plotly.js.
            </p>
            <ScatterChart2 />
            <ScatterChart1 />
            <BarChart1 />
            <PieChart1 />
            <PieChart2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
