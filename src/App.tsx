import React from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Testmonials from './components/testmonials/Testmonials';

import './styles/body.scss';
import firebase from "firebase/compat/app";
import { BrowserRouter } from 'react-router-dom';

firebase.initializeApp({
  apiKey: "AIzaSyDCbFuK28pi7Asw9YrirhRrXRZbJ2ZPXKk",
  authDomain: "portfolio-de761.firebaseapp.com",
  projectId: "portfolio-de761",
  storageBucket: "portfolio-de761.appspot.com",
  messagingSenderId: "104381590512",
  appId: "1:104381590512:web:b8282b7d1ee648267f0b35"
})




function App() {
  return (
    <>
    <BrowserRouter>
     <Header/>
     <Nav/>
     <About/>
     <Experience/>
     {/* <Services/> */}
     <Portfolio/>
     <Testmonials/>
     <Contact/>
     <Footer/>
     </BrowserRouter>
    </>
  );
}

export default App;
