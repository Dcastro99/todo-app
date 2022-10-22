import * as React from "react";
import SpaceBetween from "@cloudscape-design/components/button";
import Header from "@cloudscape-design/components/header";
import './homeNav.css'

export default function homeNav() {
  return (
    <Header
      className="header"
      variant="h1"
      actions={
        <SpaceBetween id='spaceButton' direction="horizontal" size="xs">
          <button className='loginButton' variant="primary">Login
          </button>
        </SpaceBetween>
      }
    >
      <div id='title'>Home</div>

    </Header>
  );
}