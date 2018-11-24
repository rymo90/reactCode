import React from "react";
import ReactDOM from "react-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import Home from "./components/Home";
import News from "./components/News";

import "./styles.css";

const NavB = () => {
  return (
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a className="BrandName" href="#home">
              BrandName
            </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            Home
          </NavItem>
          <NavItem eventKey={2} href="#">
            News
          </NavItem>
          <NavItem eventKey={3} href="#">
            Video
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Redwan" };
  }
  render() {
    return (
      <div>
        <NavB />
        <Home />
        <News />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
