import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import "./navbar1.css";
import eylogo from "../img/ey-edited-br.png";

function Navbar1() {
  return (
    <>
      <Navbar className="nav1">
        <Navbar.Brand href="#home">
          <img src={eylogo} alt="vjhgjhbk" />
        </Navbar.Brand>
        <Nav className="nav3">
          <Nav.Item>
            <Nav.Link className="text-white" href="#home">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-white" href="#seervices">
              Services
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-white" href="#reports">
              Reports
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-white" href="#quicklink">
              Quick Link
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-white" href="#rssfeed">
              RSS Feed
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
}

export default Navbar1;
