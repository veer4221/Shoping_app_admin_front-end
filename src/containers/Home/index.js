import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import "./style.css";

function Home(props) {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col md={2} className="sidebar">
            Side-Bar
          </Col>
          <Col md={10} style={{ marginLeft: "auto" }}>
            continer
          </Col>
        </Row>
      </Container>

      {/* <Jumbotron
        style={{ margin: "5rem", background: "white" }}
        className="text-center"
      >
        <h1>Welcome to Admin Deshbord</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab
          placeat fugiat numquam. Perspiciatis illum cupiditate rem doloribus,
          nihil quisquam velit nom dolor sit amet consectetur adipisicing elit.
          Veniam ab placeat fugiat numquam. Perspiciatis illum cupiditate rem
          doloribus, nihil quisquam velit nom dolor sit amet consectetur
          adipisicing elit. Veniam ab placeat fugiat numquam. Perspiciatis illum
          cupiditate rem doloribus, nihil quisquam velit nom dolor sit amet
          consectetur adipisicing elit. Veniam ab placeat fugiat numquam.
          Perspiciatis illum cupiditate rem doloribus, nihil quisquam velit nom
          dolor sit amet consectetur adipisicing elit. Veniam ab placeat fugiat
          numquam. Perspiciatis illum cupiditate rem doloribus, nihil quisquam
          velit nom dolor sit amet consectetur adipisicing elit. Veniam ab
          placeat fugiat numquam. Perspiciatis illum cupiditate rem doloribus,
          nihil quisquam velit nom dolor sit amet consectetur adipisicing elit.
          Veniam ab placeat fugiat numquam. Perspiciatis illum cupiditate rem
          doloribus, nihil quisquam velit nom dolor sit amet consectetur
          adipisicing elit. Veniam ab placeat fugiat numquam. Perspiciatis illum
          cupiditate rem doloribus, nihil quisquam velit nom dolor sit amet
          consectetur adipisicing elit. Veniam ab placeat fugiat numquam.
          Perspiciatis illum cupiditate rem doloribus, nihil quisquam velit nom
          dolor sit amet consectetur adipisicing elit. Veniam ab placeat fugiat
          numquam. Perspiciatis illum cupiditate rem doloribus, nihil quisquam
          velit nom dolor sit amet consectetur adipisicing elit. Veniam ab
          placeat fugiat numquam. Perspiciatis illum cupiditate rem doloribus,
          nihil quisquam velit non, mollitia soluta possimus voluptatibus at eum
          delectus ad!
        </p>
      </Jumbotron> */}
    </Layout>
  );
}

export default Home;
