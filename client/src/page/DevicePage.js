import React, { useContext } from "react";
import { Card, Col, Container, Image, Row, Stack, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Context } from "..";

import { ReactComponent as Star } from "../assets/img/Star_detail.svg";

const DevicePage = () => {
  const { device } = useContext(Context);
  const params = useParams();
  const item = device.devices.find(device => device.id === +params.id);
  const characteristics = [
    { id: 1, title: "Volume", description: "5 Mb" },
    { id: 2, title: "Memory", description: "512 Mb" },
    { id: 3, title: "Color", description: "Black" },
    { id: 4, title: "Size", description: "10 inch" },
  ];
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image src={item.img} />
        </Col>
        <Col md={4}>
          <Stack className="text-center">
            <h2>{item.name}</h2>
            <div style={{ position: "relative", fontSize: "50px" }}>
              <Star />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  left: "50%",
                }}
              >
                {item.rating}
              </div>
            </div>
          </Stack>
        </Col>
        <Col md={4}>
          <Card className="p-4" style={{ fontSize: 32 }}>
            <Stack gap={4}>
              <div>{item.price}</div>
              <Button variant="primary">Buy</Button>
            </Stack>
          </Card>
        </Col>
      </Row>
      <div>
        {characteristics.map(char => (
          <Row key={char.id}>
            <Col xs={6}>{char.title}</Col>
            <Col xs={6}>{char.description}</Col>
          </Row>
        ))}
      </div>
    </Container>
  );
};

export default DevicePage;
