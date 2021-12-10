import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";

import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import TypeBar from "../components/TypeBar";
import { Context } from "..";
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceApi";
import Pages from "../components/Pages";

const Shop = observer(() => {
  const { device } = useContext(Context);
  useEffect(() => {
    fetchTypes().then(types => device.setTypes(types));
    fetchBrands().then(brands => device.setBrands(brands));
  }, []);
  useEffect(() => {
    fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 3).then(devices => {
      device.setDevices(devices.rows);
      device.setTotalCount(devices.count);
    });
  }, [device.page, device.selectedType, device.selectedBrand]);

  return (
    <Container>
      <Row className="mt-3">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
