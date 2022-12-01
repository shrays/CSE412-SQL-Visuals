import React from "react";
import DeLuca from "./DeLuca.png"

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img className="img-fluid rounded mb-4 mb-lg-0"
            src={DeLuca} alt="test"/>
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">About</h1>
            <p>
              This project was completed as the final submission for CSE412 for De Luca Fall 2022.
              The goal of this website is to show summary statistics of the current global university rankings.
              This is achieved because the visuals rely on a database which can be updated yearly and as a result
              the summary statistics visualizations do not have to be edited at all assuming the ranking criteria remain the same.
              This project is locally hosted and uses a local PostgreSQL server and Javascript Plotly. By Javier Aguilar, Joseph Olakkengil, and Shray Swarup.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
