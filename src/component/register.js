import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  Logo from '../images/b3.jpg';
function Registeration() {
  return (
   <Container className="reg-sec">
     <Row  className="justify-vontent-center">
        <Col lg={6} sm={12}>
            <div className="image-div-form">
               <img src={Logo} alt="form-logo"/>
            </div>
        </Col>
        <Col lg={6} sm={12}>
            <Form className="form2">
              <div className="buttons">
            <Button   className="btn4" type="submit">تسجيل ياستخدام جوجل </Button>
            <Button   className="btn5" type="submit">تسجيل ياستخدام مايكروسوفت</Button>
            <hr/>         
             </div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label  className="label1"> الاسم الاول</Form.Label>
             <Form.Control  id="t1" type="text" placeholder="ادخل الاسم باللغة العربية" />
             <Form.Label  className="label1">اسم العائلة</Form.Label>
             <Form.Control  id="t1"  type="text" placeholder="ادخل اسم العائلة  باللغة العربية" />
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="label1">البريد الالكتروني</Form.Label>
        <Form.Control  id="t1" type="email" placeholder="ادخل بريدك الالكتروني" />
      </Form.Group>
 
          <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="label1">كلمة السر</Form.Label>
        <Form.Control  id="t1" type="password" placeholder="ادخل كلمة السر " />
      </Form.Group>

      <Form.Group  controlId="formBasicCheckbox">
      <Form.Label className="label1"> اوافق على الشروط والاحكام </Form.Label>
        <Form.Check className="checked" type="checkbox"  />
      </Form.Group>

      <Button variant="primary"  className="btn" type="submit">
        ارسال
      </Button>
    
      </Form>
    </Col>
  </Row>
 </Container>

  )
}

export default Registeration;