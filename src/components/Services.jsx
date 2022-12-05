import "./services.css";
import { Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

function Services() {
  return (
    <>
      {/*===============| Services Section |==================*/}
      <div>
        <h1>Services</h1>
      </div>
      <Card style={{ width: "18rem" }}>
        <Card.Img src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Legal Management Services</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      {/*------------------------------------------------------------*/}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Legal Function Consulting</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Services;
