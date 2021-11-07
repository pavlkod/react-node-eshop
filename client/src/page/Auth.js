import React, { useState } from "react";
import { Card, Container, Form, Button, Stack } from "react-bootstrap";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "../utils/const";
import { useHistory, useLocation } from "react-router-dom";
import { login, registration } from "../http/userApi";

const Auth = () => {
  const history = useHistory();
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goToPage = () => {
    if (isLogin) {
      history.push(REGISTER_ROUTE);
    } else {
      history.push(LOGIN_ROUTE);
    }
  };
  const signAction = async () => {
    console.log(email, password);
    if (isLogin) {
      const response = await login(email, password);
      console.log(response);
    } else {
      const response = await registration(email, password);
      console.log(response, process.env.REACT_APP_API_URL);
    }
  };
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: "calc(100vh - 56px)" }}>
      <Card style={{ width: "40rem" }} className="p-4">
        <h2 className="text-center mb-4">{isLogin ? "Login" : "Register"}</h2>
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Control type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Form.Group>
          <Stack direction="horizontal" gap={3}>
            <Button variant="outline-primary" onClick={signAction}>
              Ok
            </Button>
            <Button variant="outline-primary ms-auto" onClick={goToPage}>
              {isLogin ? "Register" : "Login"}
            </Button>
          </Stack>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
