import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";

import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import TypeBar from "../components/TypeBar";
import { Context } from "..";
import { fetchBrands, fetchTypes } from "../http/deviceApi";

const Shop = observer(() => {
  const { device } = useContext(Context);
  useEffect(() => {
    fetchTypes().then(types => device.setTypes(types));
    fetchBrands().then(brands => device.setBrands(brands));
  }, []);

  return (
    <Container>
      <Row className="mt-3">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
