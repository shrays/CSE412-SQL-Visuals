import React from "react";
import QS from "./QS.png"

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={QS}
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">University Stats</h1>
            <p>
              The QS World University Rankings are an annual publication by Quacquarelli Symonds 
              that analyze university data globally. With this data we are able to analyze common 
              trends as well as compare various institutions on multiple ranking benchmarks. 

              These benchmarks all have a score and rank associated with them and are as follows: 
              Academic reputation, employer reputation, faculty student ratio, citations per faculty, 
              international faculty ratio, international students ratio, international research network,
               employment outcome, overall rating.
               <br /><br />
              Take a look at some of the data that was compiled for the 2023 rankings:
            </p>
            <form action="/charts">
            <input style={{backgroundColor: '#576F72', color:'white', fontFamily:'Roboto', fontSize:'xx-large', 
            border:'none', borderRadius:'5px'}} 
              type="submit" value=' View Summary Statistics '></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
