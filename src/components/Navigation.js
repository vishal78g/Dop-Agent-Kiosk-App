
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    return (
      <>        
    <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="/Dop-Agent-Kiosk-App">Home</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/Dop-Agent-Kiosk-App/add">Add</Nav.Link>
        <Nav.Link href="/Dop-Agent-Kiosk-App/view">View</Nav.Link>
        <Nav.Link href="/Dop-Agent-Kiosk-App/update">Update</Nav.Link>
      </Nav>
    </Container>
    </Navbar>
    </>
    );
}

export default Navigation;
