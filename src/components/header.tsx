import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import reactLogo from '../assets/react.svg'

function Header() {
  return (
    <>
    <header>
      <Navbar fixed="top"  className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={reactLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Airbnb
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
    </>
  );
}

export default Header;
