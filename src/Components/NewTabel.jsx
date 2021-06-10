import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'

class NewTabel extends React.Component {
render(){
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Liga 1</Nav.Link>
                <Nav.Link href="#link">Liga 2</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}
}

export default NewTabel;