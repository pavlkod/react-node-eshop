import React, { useContext, useState } from "react";
import { Card, Container, Form, Button, Stack } from "react-bootstrap";
import { LOGIN_ROUTE, REGISTER_ROUTE, SHOP_ROUTE } from "../utils/const";
import { useHistory, useLocation } from "react-router-dom";
import { login, registration } from "../http/userApi";

import { observer } from "mobx-react-lite";
import { Context } from "..";

const Auth = observer(() => {
  const history = useHistory();
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useContext(Context);

  const goToPage = () => {
    if (isLogin) {
      history.push(REGISTER_ROUTE);
    } else {
      history.push(LOGIN_ROUTE);
    }
  };
  const signAction = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(data.id);
      user.setIsAuthorize(true);
      history.push(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
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
});

export default Auth;
