import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { createBrand } from "../../http/deviceApi";

const CreateBrand = ({ show, onHide }) => {
  const [value, setValue] = useState("");
  const addBrand = () => {
    createBrand({ name: value }).then(() => {
      setValue("");
      onHide();
    });
  };
  return (
    <Modal show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Добавить бренд</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder="Input type..." value={value} onChange={e => setValue(e.target.value)} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} variant="outline-primary">
          Close
        </Button>
        <Button onClick={addBrand} variant="outline-success">
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
