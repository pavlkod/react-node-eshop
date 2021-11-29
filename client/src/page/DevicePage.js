import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Container, Image, Row, Stack, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Context } from "..";

import { fetchOneDevice } from "../http/deviceApi";
import { ReactComponent as Star } from "../assets/img/Star_detail.svg";

const DevicePage = () => {
  const { id } = useParams();
  const characteristics = [
    { id: 1, title: "Volume", description: "5 Mb" },
    { id: 2, title: "Memory", description: "512 Mb" },
    { id: 3, title: "Color", description: "Black" },
    { id: 4, title: "Size", description: "10 inch" },
  ];
  const [device, setDevice] = useState({ info: [] });
  useEffect(() => {
    fetchOneDevice(id).then(device => setDevice(device));
  }, []);
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image src={`${process.env.REACT_APP_API_URL}/assets/${device.img}`} />
        </Col>
        <Col md={4}>
          <Stack className="text-center">
            <h2>{device.name}</h2>
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
                {device.rating}
              </div>
            </div>
          </Stack>
        </Col>
        <Col md={4}>
          <Card className="p-4" style={{ fontSize: 32 }}>
            <Stack gap={4}>
              <div>{device.price}</div>
              <Button variant="primary">Buy</Button>
            </Stack>
          </Card>
        </Col>
      </Row>
      {characteristics.length && (
        <div>
          <h2>Characteristics</h2>
          {characteristics.map((char, i) => (
            <Row key={char.id} style={{ background: i % 2 === 0 ? "#fff" : "#f2f2f2" }}>
              <Col xs={6}>{char.title}</Col>
              <Col xs={6}>{char.description}</Col>
            </Row>
          ))}
        </div>
      )}
    </Container>
  );
};

export default DevicePage;
