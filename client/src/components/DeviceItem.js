import React from "react";
import { Card, Stack } from "react-bootstrap";
import { useHistory } from "react-router";

import { ReactComponent as Img } from "../assets/img/Star_list.svg";
import { DEVICE_ROUTE } from "../utils/const";

const DeviceItem = ({ device: { id, name, img } }) => {
  const history = useHistory();
  return (
    <Card onClick={() => history.push(`${DEVICE_ROUTE}/${id}`)}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <div className="d-flex flex-wrap justify-content-between">
          <div>Rating</div>
          <Stack direction="horizontal" gap={1}>
            5 <Img />
          </Stack>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DeviceItem;
