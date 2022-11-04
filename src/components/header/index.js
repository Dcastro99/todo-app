import * as React from "react";
import SpaceBetween from "@cloudscape-design/components/button";
import Header from "@cloudscape-design/components/header";
import Login from '../../context/auth/login'

import '../../style/header.css'

export default function TodoHeader() {

  return (
    <Header
      className="header"
      variant="h1"
      actions={
        <SpaceBetween id='spaceButton' direction="horizontal" size="xs">
          <Login />
          {/* <LogoutButton /> */}
        </SpaceBetween>
      }
    >
      <div id='title'>Home</div>

    </Header>
  );
}