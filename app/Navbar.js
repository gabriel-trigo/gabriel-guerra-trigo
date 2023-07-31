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
        <Nav.Link href="#Education">
          Education
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#Experience">
          Experience
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#Projects">
          Projects
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#Contact">
          Contact
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;