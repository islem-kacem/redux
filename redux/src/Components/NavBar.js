import Container from 'react-bootstrap/Container';
import { NavDropdown, Nav, Navbar } from 'react-bootstrap';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="http://localhost:3000/">
            <img
              alt=""
              src="/redux.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Redux CheckPoint
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="http://localhost:3000/">Home</Nav.Link>
            <Nav.Link href="http://localhost:3000/users">Users</Nav.Link>
            <Nav.Link href="http://localhost:3000/products">Products</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;