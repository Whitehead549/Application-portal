import React, { useState, useEffect, useRef } from 'react';
import { collection, where, getDocs, setDoc, doc, query, updateDoc, onSnapshot, addDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { v4 as uuidv4 } from 'uuid';
import { auth, db } from '../Config/Config';

import Hero from "../components/Hero/Hero";
import Places from '../components/Places/Places';
import Navbar from '../components/Navbar/Navbar';
import MainImage from "../assets/new-carouse.jpg";
import { useNavigate } from 'react-router-dom';
import LoaderSpinner from './LoaderSpinner';
import Signup from '../components/popups/SignUp';
import Popup from './Popup';
import Stepper from '../components/stepper/Stepper';

const Home = () => {
  // getting current user function
  function GetCurrentUser() {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      auth.onAuthStateChanged(user => {
        if (user) {
          const getUsers = async () => {
            const q = query(collection(db, "users"), where("uid", "==", user.uid));
            const data = await getDocs(q);
            // const filtred = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setUser(data.docs[0].data().fullName);
           
          };

          getUsers();

        } else {
          setUser(null);
        }
      });
    }, []);

    return user;
  }
  const user = GetCurrentUser();
  // console.log(user);
   

   


  return (
    <div>
      <Navbar   />
      
        
      
        <>
          <div className="relative h-[46vh] md:h-[32vh] lg:h-[70vh] sm:h-[60vh] bg-white bg-opacity-90">
            <img
              src={MainImage}
              alt="Description"
              className="absolute inset-0 w-full h-full object-fit lg:pt-16 bg-white bg-opacity-90"
            />
            <Hero />
          </div>
          <div>
            <Stepper/>
          </div>


            
            <div className='pt-2 '>
             <Places  />
            </div>
            {user === null && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray bg-opacity-50">
                    <Popup />
                </div>
            )}

        </>
      
    </div>
  );
};

export default Home;
