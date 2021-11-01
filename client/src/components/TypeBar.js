import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { ListGroup } from "react-bootstrap";
const TypeBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <ListGroup>
      {device.types.map(item => (
        <ListGroup.Item
          style={{ cursor: "pointer" }}
          key={item.id}
          onClick={() => device.setSelectedType(item)}
          active={item.id === device.selectedType.id}
        >
          {item.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
