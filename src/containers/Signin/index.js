import React from "react";
import Layout from "../../components/Layout";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input";
import { login } from "../../actions";
import { useDispatch } from "react-redux";

function Signin(props) {
  const dispatch = useDispatch();
  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      email: "patelveer4221@gmail.com",
      password: "123456",
    };
    dispatch(login(user));
  };

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Input
                label="E-Mail"
                placeholder="E-Mail"
                value=""
                type="email"
                onChange={() => {}}
              />

              <Input
                label="Password"
                placeholder="Password"
                value=""
                type="password"
                onChange={() => {}}
              />

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Signin;
