import React from 'react';
import bannerImage from '../assets/banner.jpg'; // Adjust the path based on your file structure
import bannerImage2 from '../assets/banner2.png'; // Adjust the path based on your file structure
import { collection, where, getDocs, setDoc, doc, query, updateDoc, onSnapshot, addDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { auth, db } from '../Config/Config'




const Cart = () => {

  const [member, setMember] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMemberData = async () => {
      setIsLoading(true);
      try {
        auth.onAuthStateChanged(async (user) => {
          if (user) {
            const memberRef = query(collection(db, "applicants"), where("uid", "==", user.uid));
            const querySnapshot = await getDocs(memberRef);

            if (!querySnapshot.empty) {
              setMember(querySnapshot.docs[0].data());
            } else {
              console.log('No user found.');
            }
          } else {
            console.log('User is not authenticated.');
          }
        });
      } catch (error) {
        setError('Error fetching member, check your internet connection');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMemberData();
  }, []);

  if (error) {
    console.error(error);
  }

 





  return (
    <div className="relative w-full max-w-full p-0 pb-0 mt-20 pt-0 sm:pb-0 md:mt-0 md:pt-24 lg:pt-16 container">
      {/* Image for large and medium screens */}
      <img 
        src={bannerImage2} 
        alt="Banner" 
        className="hidden md:block  object-cover w-full h-auto lg:h-[300px] md:h-[200px]"
 // Image for medium and large screens
      />
      {/* Image for mobile screens */}
      <img 
        src={bannerImage} 
        alt="Banner" 
        className="block md:hidden rounded-lg object-cover w-full h-auto" // Image for mobile screens
      />
      {member && (<div className="absolute inset-0 flex items-center pl-32 mr-5 sm:pl-[8rem] md:pl-[16rem] lg:pt-16 lg:pl-[24rem] md:pt-16">
        <p className="text-white text-xs sm:text-sm md:text-sm lg:text-2xl font-bold text-left">
        Please make the payment, after which your AWS login credentials will be sent to {member.email}. You can also confirm this on the AD credential page.
        </p>
      </div>)}
    </div>
  );
};

export default Cart;
