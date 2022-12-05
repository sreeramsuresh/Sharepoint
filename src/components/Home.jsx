import "./home.css";
import React from "react";

import bgimg from "../../src/img/p1.jpg";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <>
      <div>
        {/*===============| Home Section |==================*/}
        <div className="home-image">
          <img src={bgimg} />
        </div>
        <div className="home-data">
          <h1>
            Global Law Innovation & <br /> Technology Portal
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            in modi ab earum labore, temporibus <br />
            voluptates esse pariatur omnis laudantium vel autem ipsam dolorum
            ad.Lorem ipsum dolor sit amet <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            in modi ab earum labore, temporibus <br />
            voluptates esse pariatur omnis laudantium vel autem ipsam dolorum
            ad.Lorem ipsum dolor sit amet <br />
          </p>
        </div>
      </div>
      {/*===============| Home Section Ends |==================*/}
    </>
  );
}

export default Home;
