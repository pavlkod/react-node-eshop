import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const CreateType = ({ show, onHide }) => {
  return (
    <Modal show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Добавить тип</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder="Input type..." />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} variant="outline-primary">
          Close
        </Button>
        <Button onClick={onHide} variant="outline-success">
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType;
