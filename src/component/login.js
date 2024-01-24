import React  from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo  from '../images/b3.jpg';
import {Container,Col,Row} from 'react-bootstrap';
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



function Form1() {
return (
    <div  id="second-sec" className="sec2"  >
      <Container className="sec2-div">
        <Row className="align-items-center">
          <Col lg={6}  sm={12} className='justify-content-center'>
      <div className="image-div-form">
          <img src={logo}  alt="animation2"/>
          </div>
          </Col>

    <Col  lg={6}   sm={12} className="f1">
     
      
 <Form  className="form1">
 <a href="#" className="link-form">تسجيل الدخول </a>
      <Row className="justify-content-center">
          <Col size={12} sm={12} className="px-1">
            <Form.Control type="Email" placeholder="اسم المستخدم"   id="t1"/>
          </Col>
          <Col size={12} sm={12} className="px-1">
          <Form.Control type="password" placeholder="كلمة السر"     id="t1"/>
          </Col>
          <Col size={12} sm={12} className="px-1">
            <a  className="password-link" href="#">هل نسيت كلمة السر ؟</a>
          </Col>
         
          <Col size={12} sm={12} className="px-1">
          <Button variant="primary" type="submit"  className="btn3">
            ارسال
          </Button>
          <br/>
          <span >أو</span>
          </Col>
          <Col size={12} sm={6} className="px-1">
            <div className="links">
              <a href="#"><FaFacebook className="icon2"/></a>
              <a href="#"><FaGooglePlus  className="icon4" /></a>
              <a href="#"><FaGithub className="icon3"/></a>
            </div>
          </Col>
          
      </Row>
</Form>
</Col>
</Row>
 </Container>
   </div>
);
};
export default Form1;