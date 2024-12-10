
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    return (
      <>        
    <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="#/">Home</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#/add">Add</Nav.Link>
        <Nav.Link href="#/view">View</Nav.Link>
        <Nav.Link href="#/update">Update</Nav.Link>
      </Nav>
    </Container>
    </Navbar>
    </>
    );
}

export default Navigation;
