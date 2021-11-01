import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Stack } from "react-bootstrap";
import { Context } from "..";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Stack direction="horizontal" gap={2} className="flex-wrap">
      {device.brands.map(brand => (
        <Card
          style={{ cursor: "pointer" }}
          key={brand.id}
          className="p-2"
          onClick={() => device.setSelectedBrand(brand)}
          bg={brand.id === device.selectedBrand.id ? "info" : "light"}
        >
          {brand.name}
        </Card>
      ))}
    </Stack>
  );
});

export default BrandBar;
