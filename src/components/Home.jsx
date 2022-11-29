import React from "react";
import QS from "./QS.png"
import { NavLink } from "react-router-dom";

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
              Take a look at some of the data that was compiled for the 2023 rankings:
              <br /><br />
            </p>
            <div className="navigation">
              <nav className="navbar navbar-expand navbar-dark" style={{backgroundColor: '#576F72'}}>
                <div className="container" style={{fontFamily: 'Roboto'}}>
                  <div>
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/charts" style={{color: 'white', fontSize: 'xx-large'}}>
                          View Summary Statistics
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
