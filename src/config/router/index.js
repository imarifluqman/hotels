import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Signup, About, Property } from "./approuter";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand href="#home">Book Hotels</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link> */}
              </Nav>
              <Nav>
              <NavLink className="li" to="/">
                  Home
                </NavLink>
                <NavLink className="li" to="/about">
                  About
                </NavLink>
                <NavLink className="li navbtn" to="/property">
                  List Your Property
                </NavLink>

                <NavLink className="li navbtn" to="/login">
                  LogIn
                </NavLink>
                <NavLink className="li navbtn" to="/signup">
                  SignuUp
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/property" element={<Property />} />

        </Routes>
      </Router>
    </>
  );
}
