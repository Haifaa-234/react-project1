import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaStar } from "react-icons/fa";
import { BsArrowDownCircle } from "react-icons/bs";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Logo1 from '../images/book1.jpg';
import Logo2 from '../images/book6.jpg';
import Logo3 from '../images/book2.jpg';
import Logo4 from '../images/book4.jpg';
import Logo5 from '../images/book1.jpg';
import Logo6 from '../images/boo.jpg';
import Logo7 from '../images/book7.jpg';
import Logo8 from '../images/book2.jpg';

function Book (){
  return (
  <Container>
     <Row className="justify-content-between">
    <Col lg={6} md={8} sm={12}>
     
      <div className="book1">
             <span>كتب  برمجية</span> 
             <div className="followers" >
                 <span>المتابعون</span>
                 <span className="number">99</span>
             </div>
      </div>

      <div  className="dropdown-div">
           <span className="num-book"> 19 كتاب</span>
           <Dropdown>
             <Dropdown.Toggle  id="dropdown-basic">
                ترتيب حسب
            </Dropdown.Toggle>
            <Dropdown.Menu>
               <Dropdown.Item href="#/action-1">تاريخ الاصدار</Dropdown.Item>
               <Dropdown.Item href="#/action-2">اسم المؤلف</Dropdown.Item>
               <Dropdown.Item href="#/action-3">الاكثر تفاعلا</Dropdown.Item>
           </Dropdown.Menu>
         </Dropdown>
     </div>
     <div className="sec-book">
     <Row clssName="justify-content-center">
        <Col lg={4} md={6} sm={12}>
          <div className="book2-img" >
            <img src={Logo2} alt="logo-book"/>
           </div>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <div className="book2-content" >
               <h4>البرمجة بلغة ريست</h4>
                <span>بواسطة اكاديمية حاسوب</span>
                <p>
                   اهلا بك بلغة البرمجة ريست كتاب  حول ريست في كتابة برمجيات اكثر سرعه ودقة وعادة يكون اكثر اريحية
                  باستخدام مستوى مرتفع والتحكم الذي يقدمه المستوى المنخفض كطريق عليك الاختيار بينهما
                </p>
               <div ClassName="icon-book">
                 <BsArrowDownCircle /> 49 تنزيل
              </div>
            </div>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <div className="review">
            <div className="div-review">
                  (0) مراجعات 
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
             </div >
             <div className="edit">اخر  تحديث يوم السبت  الساعه 11:35</div>
           
          </div>
          </Col>
      </Row> 
     <Row  clssName="justify-content-center">
        <Col lg={4} md={6} sm={12}>
          <div className="book2-img" >
            <img src={Logo1}   alt="Logo-book"/>
           </div>
        </Col>
        <Col lg={4} md= {6} sm={12}>
          <div className="book2-content" >
               <h4>
                 هياكل البيانات
               </h4>
                <span>بواسطة اكاديمية حاسوب</span>
                <p>
                تعد هياكل البانات والخوارزميات من  اهم الاختراعات التي حصلت في الخمسين عاما الماضية
                 وهي لابد من دراستهاوالتمكن منها لاي مهندس برمجيات حمل الكتاب لمعرفة المزيد
                </p>
               <div ClassName="icon-book">
                 <BsArrowDownCircle />886 تنزيل
              </div>
            </div>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <div className="review">
            <div className="div-review">
                  (0) مراجعات 
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
             </div >
             <div className="edit">اخر تحديث 20 اكتوبر</div>
          </div>
          </Col>
      </Row>     

       <Row clssName="justify-content-center">
        <Col lg={4} md={6} sm={12}>
          <div className="book2-img" >
            <img src={Logo3}   alt="Logo-book"/>
           </div>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <div className="book2-content" >
              <h4>تعلم البرمجة للمبتدئين</h4>
                <span>بواسطة اكاديمية حسوب</span>
                <p>
                  لا يزال تعلم البرمجة مفيدا لكثير من مستخدمي الحواسيب حتى لو كانو بكتبو البرامج بانفسهم عليهم 
                 تعلم طريقة تفكير الحاسوب وعمل برامج اكثر منطقية وسهلة الاستخدام بحيث يسمح التعديل عليها
                </p>
               <div ClassName="icon-book">
                 <BsArrowDownCircle /> 3603 تنزيل
              </div>
            </div>
        </Col>
        <Col lg={4}   md={6} sm={12}>
          <div className="review">
            <div className="div-review">
                  (2) مراجعات 
                <FaStar  className="icon-star" /> <FaStar  className="icon-star" /> <FaStar  className="icon-star" /> <FaStar  className="icon-star" /> <FaStar  className="icon-star" />
             </div >
             <div className="edit">اخر  تحديث  24 سبتمبر</div>
           
          </div>
          </Col>
      </Row> 

       
      </div>   
 </Col>

 <Col lg={6} sm={12}>
   <div  className="Download">
     <h3> الاكثر تنزيلا</h3>
     <hr/>
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="tab1"
    >
      <Tab    className="tab-item" eventKey="home" title="اسبوع"></Tab>
      <Tab    className="tab-item" eventKey="profile" title="شهر"></Tab>
      <Tab    className="tab-item" eventKey="contact" title="سنة" ></Tab>
      <Tab    className="tab-item"  eventKey="start" title="البداية"></Tab>
    </Tabs>
    <br/>
    <hr/>
  
   <div className="book-download">
     <img src={Logo4} alt="logo-image"/>
     <div className="content">
        <h3>البرمجة بلغة بايثون</h3>
        <p>بواسطة اكاديمية حوسب</p>
        <span>461   <BsArrowDownCircle />   <FaStar  className="icon-star" />  <FaStar  className="icon-star" />  <FaStar  className="icon-star" />  <FaStar  className="icon-star" />  <FaStar  className="icon-star" /> </span>
     </div>
   </div>
  
 
   <div className="book-download">
     <img src={Logo1} alt="logo-image"/>
     <div className="content">
        <h3>هياكل البيانات</h3>
        <p>بواسطة اكاديمية حوسب</p>
        <span>461   <BsArrowDownCircle />  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
     </div>
   </div>
  
   <div className="book-download">
     <img src={Logo6} alt="logo-image"/>
     <div className="content">
        <h3>البرمجة بلغة جافا سكريبت</h3>
        <p>بواسطة اكاديمية حوسب</p>
        <span>461   <BsArrowDownCircle /><FaStar  className="icon-star" /><FaStar  className="icon-star" /><FaStar  className="icon-star" /><FaStar  className="icon-star" /><FaStar  className="icon-star" />  </span>
     </div>
   </div>
  

   <div className="book-download">
     <img src={Logo7} alt="logo-image"/>
     <div className="content">
      <h3>مدخل الى الذكاء الاصطناعي وتعلم الالة</h3>
        <p>لواسطة اكاديمية حوسب</p>
        <span>461   <BsArrowDownCircle />  <FaStar  className="icon-star" /><FaStar  className="icon-star" /><FaStar  className="icon-star" /><FaStar  className="icon-star" /><FaStar  className="icon-star" /></span>
     </div>
   </div>
  
   <div className="book-download">
     <img src={Logo3} alt="logo-image"/>
     <div className="content">
      <h3>تعلم البرمجة للمبتديئين</h3>
        <p>لواسطة اكاديمية حوسب</p>
        <span>461   <BsArrowDownCircle />  <FaStar  className="icon-star" /><FaStar  className="icon-star" /><FaStar  className="icon-star" /><FaStar  className="icon-star" /><FaStar  className="icon-star" /></span>
     </div>
   </div>
 </div>

    </Col>
    </Row>
    </Container>
    )
  

}
export default Book;