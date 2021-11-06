import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
  const [showTypeModal, setShowTypeModal] = useState(false);
  const [showBrandModal, setShowBrandModal] = useState(false);
  const [showDeviceModal, setShowDeviceModal] = useState(false);
  return (
    <Container className="d-flex flex-column gap-3 mt-3">
      <Button variant="outline-primary" onClick={() => setShowTypeModal(true)}>
        Add type
      </Button>
      <Button variant="outline-primary" onClick={() => setShowBrandModal(true)}>
        Add brand
      </Button>
      <Button variant="outline-primary" onClick={() => setShowDeviceModal(true)}>
        Add device
      </Button>
      <CreateType show={showTypeModal} onHide={() => setShowTypeModal(false)} />
      <CreateBrand show={showBrandModal} onHide={() => setShowBrandModal(false)} />
      <CreateDevice show={showDeviceModal} onHide={() => setShowDeviceModal(false)} />
    </Container>
  );
};

export default Admin;
