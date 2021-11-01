import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { Context } from "..";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="g-4">
      {device.devices.map(device => (
        <Col key={device.id} md={3}>
          <DeviceItem device={device} />
        </Col>
      ))}
    </Row>
  );
});

export default DeviceList;
