import React from "react";
import { Container, Button } from "react-bootstrap";

const Admin = () => {
  return (
    <Container className="d-flex flex-column gap-3 mt-3">
      <Button variant="outline-primary">Add type</Button>
      <Button variant="outline-primary">Add brand</Button>
      <Button variant="outline-primary">Add device</Button>
    </Container>
  );
};

export default Admin;
