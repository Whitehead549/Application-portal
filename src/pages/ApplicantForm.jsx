import React, { useState } from 'react';
import { auth, storage, db } from '../Config/Config';
import { collection, addDoc, getDocs, where, query } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Import the CSS for styling

export const ApplicantForm = () => {
    // Personal Information
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');

    // Employment History
    const [jobTitle, setJobTitle] = useState('');
    const [employmentStartDate, setEmploymentStartDate] = useState('');
    const [employmentEndDate, setEmploymentEndDate] = useState('');
    const [responsibilities, setResponsibilities] = useState('');

    // Education
    const [degree, setDegree] = useState('');
    const [fieldOfStudy, setFieldOfStudy] = useState('');
    const [school, setSchool] = useState('');
    const [graduationYear, setGraduationYear] = useState('');
    const [certifications, setCertifications] = useState(null);
    const [projects, setProjects] = useState('');

    // Skills and Qualifications
    const [skills, setSkills] = useState('');

    // Additional Information
    const [resume, setResume] = useState(null);
    const [linkedInProfile, setLinkedInProfile] = useState('');
    const [references, setReferences] = useState('');

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

    const handleSubmitForm = (e) => {
        e.preventDefault();

        auth.onAuthStateChanged(async (user) => {
            if (user) {
                try {
                    const q = query(collection(db, 'users'), where('uid', '==', user.uid));
                    const userData = await getDocs(q);
                    const storageRefResume = ref(storage, `resumes/${firstName}-${lastName}-${Date.now()}`);
                    const storageRefCertifications = certifications ? ref(storage, `certifications/${firstName}-${lastName}-${Date.now()}`) : null;

                    const uploadTasks = [uploadBytes(storageRefResume, resume)];

                    if (certifications) {
                        uploadTasks.push(uploadBytes(storageRefCertifications, certifications));
                    }

                    const results = await Promise.all(uploadTasks);
                    const resumeUrl = await getDownloadURL(storageRefResume);
                    const certificationsUrl = certifications ? await getDownloadURL(storageRefCertifications) : '';

                    await addDoc(collection(db, 'applicants'), {
                        uid: userData.docs[0].data().uid,
                        Name: userData.docs[0].data().fullName,
                        Email: userData.docs[0].data().email,
                        firstName,
                        lastName,
                        address,
                        phoneNumber,
                        email,
                        dateOfBirth,
                        jobTitle,
                        employmentStartDate,
                        employmentEndDate,
                        responsibilities,
                        school,
                        degree,
                        fieldOfStudy,
                        graduationYear,
                        certificationsUrl,
                        projects,
                        resumeUrl,
                        linkedInProfile,
                        references,
                    });

                    setSuccessMsg('Application submitted successfully');
                    resetForm();
                } catch (error) {
                    setUploadError(error.message);
                }
            }
        });
    };

    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setAddress('');
        setPhoneNumber('');
        setEmail('');
        setDateOfBirth('');
        setJobTitle('');
        setEmploymentStartDate('');
        setEmploymentEndDate('');
        setResponsibilities('');
        setSchool('');
        setDegree('');
        setFieldOfStudy('');
        setGraduationYear('');
        setCertifications(null);
        setProjects('');
        setSkills('');
        setLinkedInProfile('');
        setReferences('');
        setResume(null);
        document.getElementById('resume').value = '';
        document.getElementById('certifications').value = '';
        setTimeout(() => {
            setSuccessMsg('');
        }, 3000);
    };

    return (
        <div className='container mx-auto p-6 bg-gray-300 p-16 mt-[6rem] rounded-xl'>
            <h1 className='text-3xl font-bold mb-6 text-center'>Application Form</h1>
            {successMsg && (
                <div className='bg-green-100 text-green-700 p-4 rounded mb-6'>
                    {successMsg}
                </div>
            )}
            {uploadError && (
                <div className='bg-red-100 text-red-700 p-4 rounded mb-6'>
                    {uploadError}
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
                                international
                                defaultCountry="US"
                                value={phoneNumber}
                                onChange={setPhoneNumber}
                                className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                                required
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
                        <div>
                            <label className='block text-gray-700'>Employment End Date</label>
                            <input
                                type="date"
                                className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                                onChange={(e) => setEmploymentEndDate(e.target.value)}
                                value={employmentEndDate}
                            />
                        </div>
                        <div className='md:col-span-2'>
                            <label className='block text-gray-700'>Responsibilities</label>
                            <textarea
                                className='form-textarea mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
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
                            <label className='block text-gray-700'>Degree</label>
                            <input
                                type="text"
                                className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                                required
                                onChange={(e) => setDegree(e.target.value)}
                                value={degree}
                            />
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
                        <div>
                            <label className='block text-gray-700'>School</label>
                            <input
                                type="text"
                                className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                                required
                                onChange={(e) => setSchool(e.target.value)}
                                value={school}
                            />
                        </div>
                        <div>
                            <label className='block text-gray-700'>Graduation Year</label>
                            <input
                                type="text"
                                className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                                required
                                onChange={(e) => setGraduationYear(e.target.value)}
                                value={graduationYear}
                            />
                        </div>
                        <div>
                            <label className='block text-gray-700'>Certifications (if any)</label>
                            <input
                                type="file"
                                id="certifications"
                                className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                                onChange={handleCertificationsUpload}
                            />
                        </div>
                        <div className='md:col-span-2'>
                            <label className='block text-gray-700'>Projects or Achievements</label>
                            <textarea
                                className='form-textarea mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                                onChange={(e) => setProjects(e.target.value)}
                                value={projects}
                            />
                        </div>
                    </div>
                </section>

                {/* Skills and Qualifications */}
                <section>
                    <h2 className='text-2xl font-semibold mb-4'>Skills and Qualifications</h2>
                    <textarea
                        className='form-textarea mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                        required
                        onChange={(e) => setSkills(e.target.value)}
                        value={skills}
                    />
                </section>

                {/* Additional Information */}
                <section>
                    <h2 className='text-2xl font-semibold mb-4'>Additional Information</h2>
                    <div className='grid md:grid-cols-2 gap-6'>
                        <div>
                            <label className='block text-gray-700'>Resume</label>
                            <input
                                type="file"
                                id="resume"
                                className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                                required
                                onChange={handleResumeUpload}
                            />
                        </div>
                        <div>
                            <label className='block text-gray-700'>LinkedIn Profile (Optional)</label>
                            <input
                                type="url"
                                placeholder="https://www.linkedin.com/in/your-profile"
                                className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                                onChange={(e) => setLinkedInProfile(e.target.value)}
                                value={linkedInProfile}
                            />
                        </div>
                        <div className='md:col-span-2'>
                            <label className='block text-gray-700'>References</label>
                            <textarea
                                className='form-textarea mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                                required
                                onChange={(e) => setReferences(e.target.value)}
                                value={references}
                            />
                        </div>
                    </div>
                </section>

                <div className='flex justify-center'>
                    <button
                        type="submit"
                        className='bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                    >
                        Submit Application
                    </button>
                </div>
            </form>
        </div>
    );
};

