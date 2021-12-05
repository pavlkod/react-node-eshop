import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Form, Modal, Button, Dropdown, Row, Col } from "react-bootstrap";
import { Context } from "../..";
import { fetchBrands, fetchTypes } from "../../http/deviceApi";

const CreateDevice = observer(({ show, onHide }) => {
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
  const changeInfo = (key, value, number) => {
    setProps(props.map(prop => (prop.number === number ? { ...prop, [key]: value } : prop)));
  };
  const addType = () => {
    onHide();
  };
  useEffect(() => {
    fetchTypes().then(types => device.setTypes(types));
    fetchBrands().then(brands => device.setBrands(brands));
  }, []);
  return (
    <Modal show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Добавить устройство</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-3">
            <Dropdown.Toggle>{device.selectedType.name || "Choose type"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map(type => (
                <Dropdown.Item onClick={() => device.setSelectedType(type)} key={type.id}>
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-3">
            <Dropdown.Toggle>{device.selectedBrand.name || "Choose brand"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map(brand => (
                <Dropdown.Item onClick={() => device.setSelectedBrand(brand)} key={brand.id}>
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Form.Control
            placeholder="Input device..."
            className="mt-3"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Form.Control
            placeholder="Input price..."
            className="mt-3"
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
          <Form.Control
            placeholder="Input image..."
            className="mt-3"
            type="file"
            value={file}
            onChange={e => setFile(e.target.files[0])}
          />
          <hr />
          <Button variant="outline-dark" onClick={addInfo}>
            Add new prop
          </Button>
          {props.map((prop, i) => (
            <Row key={i} className="mt-3">
              <Col md={4}>
                <Form.Control
                  placeholder="Input title"
                  value={prop.title}
                  onChange={e => changeInfo("title", e.target.value, prop.number)}
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  placeholder="Input description"
                  value={prop.description}
                  onChange={e => changeInfo("description", e.target.value, prop.number)}
                />
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
        <Button onClick={addType} variant="outline-success">
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateDevice;
