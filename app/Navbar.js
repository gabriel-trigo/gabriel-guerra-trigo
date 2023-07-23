import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar() {

  return (
    <Nav>
      <Nav.Item>
        <Nav.Link href="#About">
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#Education" eventKey="2" title="Item">
          Education
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#Experience" eventKey="2" title="Item">
          Experience
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#Projects" eventKey="2" title="Item">
          Projects
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#Contact" eventKey="2" title="Item">
          Contact
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;