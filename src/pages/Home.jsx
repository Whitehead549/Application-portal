import React, { useState, useEffect } from 'react';
import { collection, where, getDocs, query } from 'firebase/firestore';
import { auth, db } from '../Config/Config';
// import Hero from "../components/Hero/Hero";
import Places from '../components/Places/Places';
import Navbar from '../components/Navbar/Navbar';
import MainImage from "../assets/new-carouse.jpg";
import LoaderSpinner from './LoaderSpinner';
import Popup from './Popup';
import Stepper from '../components/stepper/Stepper';
import Footer from '../components/Footer/Footer';
import SupervisorProfile from '../components/Places/SupervisorProfile';
import { ApplicantForm } from './ApplicantForm';

const Home = () => {
  const [user, setUser] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        auth.onAuthStateChanged(async (authUser) => {
          if (authUser) {
            const qUser = query(collection(db, "users"), where("uid", "==", authUser.uid));
            const dataUser = await getDocs(qUser);

            if (dataUser.docs.length > 0) {
              setUser(dataUser.docs[0].data().fullName);
            } else {
              setUser(null);
            }

            const qApplicant = query(collection(db, "applicants"), where("uid", "==", authUser.uid));
            const dataApplicant = await getDocs(qApplicant);

            if (dataApplicant.docs.length > 0) {
              setLastName(dataApplicant.docs[0].data().lastName);
            } else {
              setLastName(null);
            }
          } else {
            setUser(null);
            setLastName(null);
          }
          setLoading(false); // Data fetching is complete, hide loader
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUser(null);
        setLastName(null);
        setLoading(false); // Error occurred, hide loader
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <LoaderSpinner />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <>
        {typeof lastName === 'object' && (
          <div className="relative h-[46vh] md:h-[32vh] lg:h-[70vh] sm:h-[60vh] bg-white bg-opacity-90">
            <img
              src={MainImage}
              alt="Description"
              className="absolute inset-0 w-full h-full object-fit lg:pt-16 bg-white bg-opacity-90"
            />
            {/* <Hero /> */}
          </div>
        )}

        {lastName !== null && (
          <div className='pt-[5.2rem]'>
            <SupervisorProfile />
          </div>
        )}

        <div>
          <Stepper user={user} lastName={lastName} />
        </div>

        <div className='pt-8'>
          {lastName !== null && <Places />}
          {lastName === null && <ApplicantForm />}
        </div>

        <div className='pt-2'>
          <Footer className="fixed bottom-0 w-full bg-gray-800 text-white text-center py-4" />
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
