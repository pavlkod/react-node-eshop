import React, { useContext, useState } from "react";
import { Form, Modal, Button, Dropdown, Row, Col } from "react-bootstrap";
import { Context } from "../..";

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [props, setProps] = useState([]);
  const addInfo = () => {
    setProps([...props, { title: "", description: "", number: Date.now() }]);
  };
  const removeInfo = number => {
    setProps(props.filter(value => value.number !== number));
  };
  return (
    <Modal show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Добавить устройство</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-3">
            <Dropdown.Toggle>Choose type</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map(type => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-3">
            <Dropdown.Toggle>Choose brand</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map(brand => (
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Form.Control placeholder="Input device..." className="mt-3" />
          <Form.Control placeholder="Input price..." className="mt-3" type="number" />
          <Form.Control placeholder="Input image..." className="mt-3" type="file" />
          <hr />
          <Button variant="outline-dark" onClick={addInfo}>
            Add new prop
          </Button>
          {props.map((prop, i) => (
            <Row key={i} className="mt-3">
              <Col md={4}>
                <Form.Control placeholder="Input title" />
              </Col>
              <Col md={4}>
                <Form.Control placeholder="Input description" />
              </Col>
              <Col md={4}>
                <Button variant={"outline-danger"} onClick={() => removeInfo(prop.number)}>
                  Remove
                </Button>
              </Col>
            </Row>
          ))}
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

export default CreateDevice;
