import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {Container,Row,Col} from 'react-bootstrap';

function Form() {
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setEmail("");
    setAddress("");
    setContent("");
  }

  const onchange = () => {};

  return (
    <section className="form-sec2">
    <Container>
      <Row className="justify-content-center">
        <Col lg={12} md={12} sm={12}>
         
      <form onSubmit={handleSubmit} className="container-form">
        <h4>اضافة سؤال جديد</h4>
        <p>
          يمكنك أن تنشر الان وتسجل لاحقا, إذا كان لديك حساب, فسجل الدخول الان
          لتنشر بإسم حسابك.
        </p>
        <div className="childContainer">
          <div>
            <label htmlFor="address" style={{ marginBottom: "3px" }}>
              العنوان
            </label>
           
            <br />
            <input
              id="address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              style={{ width: "80%", height: "40px", margin: "7px" }}
            />
          </div>
          <div>
            <label htmlFor="email">بريدك الإلكتروني</label>
            <br />
            <input
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="inputEmail"
              style={{ width: "50%", height: "40px", margin: "7px" }}
            />
            <br />
            <span style={{ fontSize: "12px" }}>
              لن يظهر إلي بقية المستخدمين.
            </span>

            <div>
              <label htmlFor="Rec">التحقق البشري</label>
              <br />
              <ReCAPTCHA   id="repeach"
                sitekey="Your client site key"
                onChange={onchange}
                style={{ padding: "10px"}}
              />
              <br />
            </div>

            <div  className="col-md-6 col-sm-12 ">
              <label htmlFor="content">المحتوي </label>
              <br />
              <textarea 
             
                id="content"
                onChange={(e) => setContent(e.target.value)}
                value={content}
                style={{width:"100%" , height:"400px"}}
            
              />
             
            </div>
          </div>
        </div>
        <div className="button-container">
        <button className="btn1-style">اضف صورة</button>
          <button className="btn-style">أرسل سؤال</button>
          
        </div>
      </form>
      </Col>
      </Row>
      </Container>
      </section>
  );
}

export default Form;
