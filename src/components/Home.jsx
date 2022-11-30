import React from "react";
import QS from "./QS.png"

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={QS}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">University Stats</h1>
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
