import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function OffcanvasExample() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand}>
          <Container className='mx-auto'>
            <Navbar.Brand href="#"><h1 className='logotext ps-lg-5'><span className='word'>m</span>ohit..</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas className='offcanvass'
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='text-light'>
                  <span className='word'>M</span>ohit..
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 NavItem">
                  <Nav.Link className='fs-6 ps-5  pt-3 text-light fw-bold' href="#home">
                    <Link  to={'/'}>
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link className='fs-6 ps-5  pt-3 text-light fw-bold' href="#sikills">
                     Sikills
                  </Nav.Link>
                  <Nav.Link className='fs-6 ps-5  pt-3 text-light fw-bold' href="#project"> 
                  Project
                  </Nav.Link>
                  <Nav.Link className='fs-6 ps-5  pt-3 text-light fw-bold'> 
                    <Link to={'/resume'}>
                       Resume
                    </Link>
                  </Nav.Link>
                  <Nav.Link className='fs-6 ps-5  pt-3 text-light fw-bold' href="#contact">
                   Contact
                  </Nav.Link>
                  <Nav.Link className='fs-6 ps-5 text-light fw-bold'> 
                    <a href='mailto:mohitgehlot9656@gmail.com' className='btn hiteme fw-bold'>
                        hire me 
                    </a>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;