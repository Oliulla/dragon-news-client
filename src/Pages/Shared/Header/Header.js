import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AuthContext } from '../../../contexts/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    console.log(user)

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => {
            console.log(error);
        })
    }


    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to='/'>Dragon News</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">All News</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <>
                            {
                                user?.uid ?
                                <>
                                    <span className='text-white'>{user?.displayName}</span>
                                    <Button variant='primary mx-2' onClick={handleLogOut}>Log Out</Button>
                                </>
                                :
                                <>
                                    <Link to="/login" className='mx-2'>Log in</Link>
                                    <Link to="register" >Register</Link>
                                </>
                            }
                    </>
                    <Link to='/profile' className='mx-2' >
                            {
                                user?.photoURL ?
                                <Image 
                                    style={{height: "30px"}}
                                    roundedCircle
                                    src={user?.photoURL}
                                />
                                :
                                <FaUserAlt />
                            }   
                    </Link>
                </Nav>
                <div className='d-lg-none'>
                    <LeftSideNav />
                </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;