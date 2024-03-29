import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Nav1 from './component/nav';
import Home from  './component/home';
import Footer from './component/footer';
import Form1  from './component/login';
import Registeration from './component/register';
import Book from './component/books';
import  Codelang from './component/language';
import Ques from './component/question';
import Course  from './component/courses';
import Details from './component/corse-details';
import Details1 from './component/course2';
import Details2 from './component/course3';
import Details3  from './component/course4';
import Details4 from './component/course5';
import Details5 from './component/courses6';
function App() { 
  return (
  <div >
    <BrowserRouter>
      <Nav1/>
      
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/login'  element={<Form1/>}/>
          <Route path='/register'  element={<Registeration/>}/>
          <Route path='/books'  element={<Book/>}/>
          <Route path='/language'  element={<Codelang/>}/>
          <Route path='/question'  element={<Ques/>}/>
          <Route path='/courses'  element={< Course/>}/>
          <Route path='/corse-details'  element={< Details />}/>
          <Route path='/course2'  element={< Details1 />}/>
          <Route path='/course3'  element={< Details2 />}/>
          <Route path='/course4'  element={< Details3 />}/>
          <Route path='/course5'  element={< Details4 />}/>
          <Route path='/courses6'  element={< Details5 />}/>
        </Routes>
       
       <Footer/>
    </BrowserRouter>
    </div>
    

  );
}

export default App;
