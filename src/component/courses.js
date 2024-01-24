import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Logo1 from '../images/Screenshot 2023-12-04 180258.png';
import Logo11 from '../images/card5.png';
import Logo12 from '../images/card4.png';
import Logo13 from '../images/card3.png';
import Logo16 from '../images/card6.png';
import Logo17 from '../images/card2.png';
import Logo18 from '../images/card1.png';

function Course (){
  return (
  <Container>
    <Row className="justify-content-center">
       <Col lg={12}  md={12}  sm={12}>
         
         <div className="img-div2">
            <img src={Logo1} alt="course-mage"/>

         </div>
 </Col>
</Row>
<Row>     
   <Col xs>
     <h4   className="title1">افضل الدورات</h4>
     <span className="det-para" >انقر على اي من الدورات للاطلاع على التفاصيل</span>
     <br/>
  </Col>
</Row>


<Row  className="justify-content-center">
   <Col lg={4} sm={12} md={6} >
     <a href="/corse-details"> <img className="img3" src={Logo11} alt="images"></img> </a> </Col>
    <Col lg={4} md={6} sm={12} >
    <a href="/course2"> <img className="img3" src={Logo12} alt="images"></img> </a> </Col>
   <Col lg={4} md={6} sm={12} >
   <a href="/course3"> <img className="img3" src={Logo13} alt="images"></img> </a> </Col>
</Row>

<Row  className="justify-content-center">
   <Col lg={4} md={6} sm={12} >
   <a href="/course4"> <img className="img3" src={Logo16} alt="images"></img> </a> </Col>
    <Col lg={4} md={6} sm={12} >
    <a href="/course5"> <img className="img3" src={Logo17} alt="images"></img> </a> </Col>
   <Col lg={4} md={6} sm={12} >
   <a href="/courses6"> <img className="img3" src={Logo18} alt="images"></img> </a> </Col>

</Row>
  </Container>





  )
}
  
export default Course ;