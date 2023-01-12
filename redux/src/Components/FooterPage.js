import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function FooterPage() {
  return (
    <>
      <Navbar style={{ marginTop:"200px"}} bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{height:"15rem", textAlign:"center" }} >
            Benna WALID - Redux Check Point
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default FooterPage;