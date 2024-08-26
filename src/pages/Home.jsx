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
import Footer from '../components/Footer/Footer';

const Home = () => {
  // getting current user function
  function GetCurrentUser() {
    const [user, setUser] = useState(null);
    const [lastName, setLastName] = useState(null);

    useEffect(() => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const getUsers = async () => {
            try {
              const qUser = query(collection(db, "users"), where("uid", "==", user.uid));
              const dataUser = await getDocs(qUser);
    
              // Check if dataUser.docs has at least one document
              if (dataUser.docs.length > 0) {
                setUser(dataUser.docs[0].data().fullName);
              } else {
                setUser(null);
              }
    
              const qApplicant = query(collection(db, "applicants"), where("uid", "==", user.uid));
              const dataApplicant = await getDocs(qApplicant);
    
              // Check if dataApplicant.docs has at least one document
              if (dataApplicant.docs.length > 0) {
                setLastName(dataApplicant.docs[0].data().lastName);
              } else {
                setLastName(null);
              }
            } catch (error) {
              console.error("Error fetching user data:", error);
              setUser(null);
              setLastName(null);
            }
          };
    
          getUsers();
        } else {
          setUser(null);
          setLastName(null);
        }
      });
    }, []);
    
    return { fullName: user, lastName: lastName };
  }    

  const user = GetCurrentUser();

  return (
    <div>
      <Navbar />
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
          <Stepper user={user.fullName} lastName={user.lastName}/>
        </div>
        <div className='pt-2 '>
          <Places />
          <Footer className="fixed bottom-0 w-full bg-gray-800 text-white text-center py-4" />
        </div>
        {user.fullName === null && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray bg-opacity-50">
            <Popup />
          </div>
        )}
      </>
    </div>
  );
};

export default Home;
