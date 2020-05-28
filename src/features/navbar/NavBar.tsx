import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

export const NavBar = () => {
  return (
    <Menu inverted>
      <Container>
        <Menu.Item name="SRE Diagnotic Tool" />
      </Container>
    </Menu>
  );
};

export default NavBar;
