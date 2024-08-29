import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import AOS from "aos";
import "aos/dist/aos.css";
import Cart from './pages/Cart';
import { Plan } from './pages/Plan';
import { ApplicantForm } from './pages/ApplicantForm';
import Subscribe from './pages/Subscribe';

import { Contact } from './pages/Contact';
import { ADcredential } from './pages/ADcredential';
import Frequentqes from './pages/Frequentqes';



const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="subscribe" element={<Subscribe />} />
          <Route path="plan" element={<Plan/>} />
          <Route path="cart" element={<Cart/>  } />
          <Route path="admin" element={<ApplicantForm/>  } />
          <Route path="faq" element={<Frequentqes/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="credentials" element={<ADcredential/>}/>
          {/* <Route path="/login" element={<Login/>  } />
          <Route path="/signup" element={<Signup/>  } /> */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App;

