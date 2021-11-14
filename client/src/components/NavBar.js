import React from "react";
import { useContext } from "react";
import { Context } from "..";

import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/const";

import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to={SHOP_ROUTE} as={NavLink}>
            ESHOP
          </Navbar.Brand>
          <Nav className="ml-auto">
            {!user.isAuthorized && (
              <Nav.Link to={LOGIN_ROUTE} as={NavLink}>
                Login
              </Nav.Link>
            )}
            {user.isAuthorized && (
              <>
                <Nav.Link to={ADMIN_ROUTE} as={NavLink}>
                  Admin panel
                </Nav.Link>
                <Nav.Link to={SHOP_ROUTE} as={NavLink} onClick={() => user.setIsAuthorize(false)}>
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
});

export default NavBar;
