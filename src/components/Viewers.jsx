import "./viewers.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  MDBCol,
  MDBIcon,
  MDBTypography,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

import bgImg from "../../src/img/bg-img.jpg";

function Viewers() {
  return (
    <>
      <section>
        <div className="test">
          <div className="bg-image">
            <img src={bgImg} alt="" />
          </div>
          <div className="heading">
            <h1>GLINT Executives</h1>
          </div>
          <hr className="un-line" />

          {/*==========================================================================*/}
          <div>
            <MDBContainer>
              <MDBRow className="text-center">
                <div className="tc-box">
                  {/*-----------------------------------------1----------------------------------------*/}
                  <MDBCol lg="1" className="img-1 mb-5 mb-md-0">
                    <div className="d-flex justify-content-center align-items-center img1">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                        className="rounded-circle shadow-1-strong"
                        width="130"
                        height="130"
                      />
                    </div>
                    <h5 className="text-white mb-1 mt-1">Anna Deynah</h5>
                    <h6 className="text-warning mb-1">UX Designer</h6>
                  </MDBCol>

                  {/*-------------------------------------------2--------------------------------------*/}
                  <MDBCol lg="2" className="img-2 mb-5 mb-md-0">
                    <div className="d-flex justify-content-center align-items-center img1">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                        className="rounded-circle shadow-1-strong"
                        width="100"
                        height="100"
                      />
                    </div>
                    <h5 className="text-white mb-1 mt-3">John Doe</h5>
                    <h6 className="text-warning mb-1">Web Developer</h6>
                  </MDBCol>

                  {/*--------------------------------------------3-------------------------------------*/}
                  <MDBCol lg="1" className="mb-5 mb-md-0">
                    <div className="d-flex justify-content-center align-items-center img1">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                        className="rounded-circle shadow-1-strong"
                        width="100"
                        height="100"
                      />
                    </div>
                    <h5 className="text-white mb-1 mt-3">Maria</h5>
                    <h6 className="text-warning mb-1">Photographer</h6>
                  </MDBCol>

                  {/*----------------------------------------------4-----------------------------------*/}
                  <MDBCol lg="2" className="mb-5 mb-md-0">
                    <div className="d-flex justify-content-center align-items-center img1">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                        className="rounded-circle shadow-1-strong"
                        width="100"
                        height="100"
                      />
                    </div>
                    <h5 className="text-white mb-1 mt-3">John Doe</h5>
                    <h6 className="text-warning mb-1">UX Designer</h6>
                  </MDBCol>

                  {/*------------------------------------------------5---------------------------------*/}
                  <MDBCol lg="1" className="mb-5 mb-md-0">
                    <div className="d-flex justify-content-center align-items-center img1">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                        className="rounded-circle shadow-1-strong"
                        width="100"
                        height="100"
                      />
                    </div>
                    <h5 className="text-white mb-1 mt-3">Alex</h5>
                    <h6 className="text-warning mb-1">Web Developer</h6>
                  </MDBCol>

                  {/*--------------------------------------------------6-------------------------------*/}
                  <MDBCol lg="2" className="mb-5 mb-md-0">
                    <div className="d-flex justify-content-center align-items-center img1">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp"
                        className="rounded-circle shadow-1-strong"
                        width="100"
                        height="100"
                      />
                    </div>
                    <h5 className="text-white mb-1 mt-3">Maria Kate</h5>
                    <h6 className="text-warning mb-1">Photographer</h6>
                  </MDBCol>
                </div>
              </MDBRow>
            </MDBContainer>
          </div>
        </div>
      </section>
    </>
  );
}

export default Viewers;
