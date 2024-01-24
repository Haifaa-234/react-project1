import React from 'react';

import Form from "./Form";
import Particiate from "./Particiate";
import Subsection from "./Subsection";
import Tabs from "./Tabs";
import {Container ,Row ,Col} from 'react-bootstrap';


function Ques() {

return (

    <Container>
      <Row className="justify-content-center">
        <Col >
        
    <div className="ques-div">
        <div>
         <h4>أسئلة البرمجة</h4>
         <p>
      أسئلة حول البرمجة بمختلف فنونها:برمجة الويب,تطيبقات سطح المكتب ,واجهات
      المستخدم,تطبيقات الهواتف الذكيةوغيرها
      </p>
    </div>
  </div>
  
    <div className="right-side">
      <div className="followers">
        <div className="followersNum">
          <span>المتابعون</span>
          <p>145</p>
        </div>
      </div>
    </div>
    
    <Row className="justify-content-center">
    <Col Lg={6}  md={12}  sm={12}>
      <div className="forms">
    <div>
    <Tabs />
    </div>

    <div className="left-side">
          <h4 >أشهر المشاركين</h4>

          <Particiate />
        </div>
        </div>
        </Col>
        </Row>
      <div>
        
        <h4>أقسام فرعية</h4>
        <Subsection />
        <Subsection />
        <Subsection />
        <Subsection />
      </div>

      <div>
        <Form />
      </div>
      </Col>
      </Row>
    </Container>


)
}




export default Ques;