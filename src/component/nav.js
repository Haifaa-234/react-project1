import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar' ;


function Nav1() {
    return (
     <Navbar expand="lg"   >
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="m-auto">
                    <Nav.Link className="active"    href="/">الصفحة الرئيسية</Nav.Link>
                    <Nav.Link    href="/courses">دورات</Nav.Link>
                    <Nav.Link    href="/books">كتب</Nav.Link>
                    <Nav.Link    href="/language">لغات برمجة</Nav.Link>
                    <Nav.Link    href="/question">أسئلة وأجوبة</Nav.Link>
                </Nav>
                <Nav>
            <Nav.Link id="button1"   href="/login" >تسجيل الدخول</Nav.Link>
            <Nav.Link id="button2" href="/register">حساب جديد</Nav.Link>
            </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        }
    
  export default  Nav1;