import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { BsArrowDownCircle } from "react-icons/bs";

import Logo1 from '../images/b3.jpg';
import Logo2 from '../images/img3.jpg';
import Logo3 from '../images/img2.jpg';
import Logo4 from '../images/img1.jpg';
import Logo5 from '../images/img4.jpg';
import Logo6 from '../images/img6.jpg';
import Logo7 from '../images/img5.jpg';
import Logo8 from  '../images/b1.jpg';
import Logo9 from '../images/b2.png';
import Logo10 from '../images/main.png';
import Logo11 from '../images/card5.png';
import Logo12 from '../images/card4.png';
import Logo13 from '../images/card3.png';
import Logo16 from '../images/card6.png';
import Logo17 from '../images/card2.png';
import Logo18 from '../images/card1.png';
import Logo15 from '../images/Screenshot 2023-12-04 180258.png';


function  Home(){
    return (
   <Container>
   
     <Row className="justify-content-center">   
      <Col lg={2} md={6}   sm={12}>
         
         <div className="home-div">
       <img  src={Logo1}  alt="logo"/>
         </div>
      </Col>

      <Col  lg={2}   md={6} sm={12} >
        <div  className="home-div">
           <h5>مبرمج</h5>
           <input type="search"/>
          <a href="#"><BsArrowDownCircle  class="icon1" /></a> 
         </div>
      </Col>

    <Col lg={2}  md={6}  sm={12}>
        <div  className="home-div">
           <h5>لغة برمجة</h5>
           <input type="search"/>
           <a href="#"><BsArrowDownCircle  class="icon1" /></a>
        </div>
    </Col>

    <Col   lg={2}  md={6} sm={12}>
      <div  className="home-div">
           <h5>فريم ورك</h5>
           <input type="search"/>
           <a href="#"><BsArrowDownCircle  class="icon1" /></a>
        </div>
   </Col>

    <Col lg={2}  md={6}  sm={12}>
      <div className="home-div">
         <button   type="submit" className="link-home" >بحث</button>
      </div>
   </Col>  
 </Row>

  <Row className="justify-content-center">
     <Col sm={12}  >
       <div  className="img-div">
          <img src={Logo2} alt="logo"></img>
         <img src={Logo3} alt="logo"></img>
         <img src={Logo4} alt="logo"></img>
         <img src={Logo5} alt="logo"></img>
         <img src={Logo6} alt="logo"></img>
         <img src={Logo7} alt="logo"></img>
      </div>
     </Col>
 </Row>
 
 <Row>     
   <Col xs>
     <h4   className="title1">افضل المنصات التعليمية</h4>
  </Col>
</Row>


 <Row  className="justify-content-center"  >     
    <Col  sm={12}   >
      <div class="imgdiv">
      <img className="img-home" src={Logo10} alt="image1"/>
      <img className="img-home" src={Logo8} alt="image1"/>
      <img className="img-home" src={Logo9} alt="image1"/>
      </div>
      </Col>
</Row>

<Row  className="align-items-center " >
   <Col  lg={12} sm={12}>
      <div className="img-div2">
            <img src={Logo15}  alt="image11"/>
         </div>
       </Col>
      </Row>
<Row>     
   <Col xs>
     <h4   className="title1">افضل الدورات</h4>
     <br/>
  </Col>
</Row>
     
<Row  className="justify-content-center">
   <Col lg={4} sm={12} md={6} >
      <img className="img3" src={Logo11} alt="images"></img></Col>
    <Col lg={4} md={6} sm={12} >
      <img className="img3" src={Logo12} alt="images"></img></Col>
   <Col lg={4} md={6} sm={12} >
      <img  className="img3" src={Logo13} alt="images"></img> </Col>
</Row>

<Row  className="justify-content-center">
   <Col lg={4} md={6} sm={12} >
      <img  className="img3" src={Logo16} alt="images"></img></Col>
    <Col lg={4} md={6} sm={12} >
      <img className="img3" src={Logo17} alt="images"></img></Col>
   <Col lg={4} md={6} sm={12} >
      <img className="img3" src={Logo18} alt="images"></img> </Col>
</Row>
</Container>
    );
}
export default Home;