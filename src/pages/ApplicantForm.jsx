import React, { useState } from 'react';
import { storage, db,auth } from '../Config/Config';
import { collection, addDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { where, getDocs, setDoc, doc, query } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';




export const ApplicantForm = () => {
    const navigate = useNavigate();

    const toastStyle = {
        backgroundColor: '#3e3a31', // Green background color
        color: 'white', // White text color
        padding: '10px', // Padding
        borderRadius: '4px', // Rounded corners
      };


     // Personal Information
     const [firstName, setFirstName] = useState('');
     const [lastName, setLastName] = useState('');
     const [address, setAddress] = useState('');
     const [phoneNumber, setPhoneNumber] = useState('');
     const [email, setEmail] = useState('');
     const [dateOfBirth, setDateOfBirth] = useState('');


    // Job Applied For
    const [jobTitlee, setJobTitlee] = useState('');
    const [employmentStartDatee, setEmploymentStartDatee] = useState('');
 
     // Employment History
     const [jobTitle, setJobTitle] = useState('');
     const [employmentStartDate, setEmploymentStartDate] = useState('');
     const [responsibilities, setResponsibilities] = useState('');
 
     // Education
     const [degree, setDegree] = useState('');
     const [fieldOfStudy, setFieldOfStudy] = useState('');
     const [certifications, setCertifications] = useState(null);
 
     // Skills and Qualifications
     const [skills, setSkills] = useState('');
 
     // Additional Information
     const [resume, setResume] = useState(null);
     const [linkedInProfile, setLinkedInProfile] = useState('');
  
 
     const [successMsg, setSuccessMsg] = useState('');
     const [uploadError, setUploadError] = useState('');
 
     const handleResumeUpload = (e) => {
         const selectedFile = e.target.files[0];
         if (selectedFile) {
             setResume(selectedFile);
             setUploadError('');
         } else {
             setResume(null);
             setUploadError('Please select a resume file');
         }
     };
 
     const handleCertificationsUpload = (e) => {
         const selectedFile = e.target.files[0];
         if (selectedFile) {
             setCertifications(selectedFile);
         } else {
             setCertifications(null);
         }
     };
 
     const handleSubmitForm = async (e) => {
         e.preventDefault();
 
         try {
             const user = auth.currentUser;
             if (!user) {
                 throw new Error("User is not authenticated");
             }
 
             const q = query(collection(db, 'users'), where('uid', '==', user.uid));
             const userData = await getDocs(q);
 
             if (userData.empty) {
                 throw new Error("User data not found");
             }
 
             const userDoc = userData.docs[0];
             const userName = userDoc.data().fullName;
             const userEmail = userDoc.data().email;
             const userId = userDoc.data().uid;
 
             const storageRefResume = ref(storage, `resumes/${firstName}-${lastName}-${Date.now()}`);
             let certificationsUrl = '';
 
             if (certifications) {
                 const storageRefCertifications = ref(storage, `certifications/${firstName}-${lastName}-${Date.now()}`);
                 await uploadBytes(storageRefCertifications, certifications);
                 certificationsUrl = await getDownloadURL(storageRefCertifications);
             }
 
             // Generate a random 4-digit ID
             const randomId = Math.floor(1000 + Math.random() * 9000);
 
             await addDoc(collection(db, 'applicants'), {
                 id: randomId, 
                 uid: userId,
                 Name: userName,
                 Email: userEmail,
                 firstName,
                 lastName,
                 address,
                 phoneNumber,
                 email,
                 dateOfBirth,
                 jobTitle,
                 employmentStartDate,
                 responsibilities,
                 jobTitlee,
                 employmentStartDatee,
                 degree,
                 fieldOfStudy,
                 certificationsUrl,
                 skills,
                 linkedInProfile,
             
             });
 
             setSuccessMsg('Application submitted successfully');

              // Trigger the toast immediately after successful form submission
            toast.success('Your application has been submitted successfully', {
                position: 'top-right',
                autoClose: 4000,
                style: toastStyle,
            });

              // Refresh the Home page
              setTimeout(() => {
                navigate(0); // This will reload the current page
            }, 2000);


             // Clear form fields
             setFirstName('');
             setLastName('');
             setAddress('');
             setPhoneNumber('');
             setEmail('');
             setDateOfBirth('');
             setJobTitle('');
             setEmploymentStartDate('');
             setResponsibilities('');
             setJobTitlee('');
             setEmploymentStartDatee('');
             setDegree('');
             setFieldOfStudy('');
             setCertifications(null);
             setSkills('');
             setLinkedInProfile('');
            //  document.getElementById('resume').value = '';
             document.getElementById('certifications').value = '';
             

         } catch (error) {
             setUploadError(error.message);
         }
     };
 
    return (
        <div className='container mx-auto p-6 bg-gray-200 rounded-xl'>
            <h1 className='text-3xl font-bold mb-6 text-center'>Application Form</h1>
            {successMsg && (
                <div className='bg-green-100 text-green-700 p-4 rounded mb-6'>
                    {successMsg}
                </div>
            )}
            <form autoComplete="off" onSubmit={handleSubmitForm} className='space-y-8'>
                {/* Personal Information */}
                <section>
                    <h2 className='text-2xl font-semibold mb-4'>Personal Information</h2>
                    <div className='grid md:grid-cols-2 gap-6'>
                        <div>
                            <label className='block text-gray-700'>First Name</label>
                            <input
                                type="text"
                                className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                                required
                                onChange={(e) => setFirstName(e.target.value)}
                                value={firstName}
                            />
                        </div>
                        <div>
                            <label className='block text-gray-700'>Last Name</label>
                            <input
                                type="text"
                                className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                                required
                                onChange={(e) => setLastName(e.target.value)}
                                value={lastName}
                            />
                        </div>
                        <div>
                            <label className='block text-gray-700'>Address</label>
                            <input
                                type="text"
                                className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                                required
                                onChange={(e) => setAddress(e.target.value)}
                                value={address}
                            />
                        </div>
                        <div>
                            <label className='block text-gray-700'>Phone Number</label>
                            <PhoneInput
                                country={'us'}
                                value={phoneNumber}
                                onChange={setPhoneNumber}
                                inputStyle={{
                                    width: '100%',
                                    borderRadius: '4px',
                                    borderColor: '#ccc',
                                    paddingLeft: '50px', // Adjust left padding to create space for the flag
                                    paddingRight: '10px', // Keep padding on the right consistent
                                }}
                                containerStyle={{
                                    position: 'relative',
                                }}
                                buttonStyle={{
                                    position: 'absolute',
                                    left: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    zIndex: 10,
                                }}
                            />

                        </div>
                        <div>
                            <label className='block text-gray-700'>Email Address</label>
                            <input
                                type="email"
                                className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>
                        <div>
                            <label className='block text-gray-700'>Date of Birth</label>
                            <input
                                type="date"
                                className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                                required
                                onChange={(e) => setDateOfBirth(e.target.value)}
                                value={dateOfBirth}
                            />
                        </div>
                    </div>
                </section>

                       {/* Job Applied For */}
                       <section>
                    <h2 className='text-2xl font-semibold mb-4'>Position Applied For:</h2>
                    <div className='grid md:grid-cols-2 gap-6'>
                        <div>
                            <label className='block text-gray-700'>Job Title: Please indicate the position you are applying for.</label>
                             <select
                               className='form-select mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                               required
                               onChange={(e) => setJobTitlee(e.target.value)}
                               value={jobTitlee}
                             >
                                <option value="">Please select..</option>
                                <option value="Content Writer">Content Writer</option>
                                <option value="Digital Marketing Specialist">Digital Marketing Specialist</option>
                                <option value="Technical Writer">Technical Writer</option>
                                <option value="Graphic Designer">Graphic Designer</option>
                                <option value="Customer Service Representative">Customer Service Representative</option>
                                <option value="HR Manager">HR Manager</option>
                                <option value="Project Manager">Project Manager</option>
                                <option value="Sales Representative">Sales Representative</option>
                             </select>
                            
                        </div>
                        <div>
                            <label className='block text-gray-700'>Availability: Please specify the earliest date you are able to begin work.</label>
                            <input
                                type="date"
                                className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                                required
                                onChange={(e) => setEmploymentStartDatee(e.target.value)}
                                value={employmentStartDatee}
                            />
                        </div>
                      
                    </div>
                </section>

                {/* Employment History */}
                <section>
                    <h2 className='text-2xl font-semibold mb-4'>Employment History</h2>
                    <div className='grid md:grid-cols-2 gap-6'>
                        <div>
                            <label className='block text-gray-700'>Job Title</label>
                            <input
                                type="text"
                                className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                                required
                                onChange={(e) => setJobTitle(e.target.value)}
                                value={jobTitle}
                            />
                        </div>
                        <div>
                            <label className='block text-gray-700'>Employment Start Date</label>
                            <input
                                type="date"
                                className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                                required
                                onChange={(e) => setEmploymentStartDate(e.target.value)}
                                value={employmentStartDate}
                            />
                        </div>
                      
                        <div className='col-span-2'>
                            <label className='block text-gray-700'>Responsibilities</label>
                            <textarea
                                className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                                required
                                onChange={(e) => setResponsibilities(e.target.value)}
                                value={responsibilities}
                            />
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section>
                    <h2 className='text-2xl font-semibold mb-4'>Education</h2>
                    <div className='grid md:grid-cols-2 gap-6'>
                        <div>
                            <label className='block text-gray-700'>Highest Level of Education Completed</label>
                            <select
                                className='form-select mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                                required
                                onChange={(e) => setDegree(e.target.value)}
                                value={degree}
                            >
                                <option value="">Select your education level</option>
                                <option value="High School">High School</option>
                                <option value="Associate Degree">Associate Degree</option>
                                <option value="Bachelor's Degree">Bachelor's Degree</option>
                                <option value="Master's Degree">Master's Degree</option>
                                <option value="PhD">PhD</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className='block text-gray-700'>Field of Study</label>
                            <input
                                type="text"
                                className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                                required
                                onChange={(e) => setFieldOfStudy(e.target.value)}
                                value={fieldOfStudy}
                            />
                        </div>
                        <div className='md:col-span-2'>
                            <label className='block text-gray-700'>Certifications or Additional Training</label>
                            <input
                                type="file"
                                className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                                onChange={(e) => handleCertificationsUpload(e)}
                            />
                        </div>
                       
                    </div>
                </section>

                {/* Skills and Qualifications */}
                <section>
                    <h2 className='text-2xl font-semibold mb-4'>Skills and Qualifications</h2>
                    <textarea
                        className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                        onChange={(e) => setSkills(e.target.value)}
                        value={skills}
                        placeholder="List your skills and qualifications"
                    />
                </section>

                {/* Additional Information */}
                <section>
                    <h2 className='text-2xl font-semibold mb-4'>Additional Information</h2>
                    {/* <div className='mb-4'>
                        <label className='block text-gray-700'>Resume</label>
                        <input
                            type="file"
                            id="resume"
                            className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                            onChange={handleResumeUpload}
                            required
                        />
                    </div> */}
                    <div className='mb-4'>
                        <label className='block text-gray-700'>LinkedIn Profile (optional)</label>
                        <input
                            type="url"
                            className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                            onChange={(e) => setLinkedInProfile(e.target.value)}
                            value={linkedInProfile}
                            placeholder="https://www.linkedin.com/in/your-profile"
                        />
                    </div>
                </section>

                <div className='flex justify-center'>
                    <button
                        type="submit"
                        className='bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-900 focus:ring-2 focus:ring-blue-500'
                    >
                        Submit Application
                    </button>
                </div>
            </form>
        </div>
    );
};
