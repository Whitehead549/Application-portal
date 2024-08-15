import React, { useState } from 'react';
import { storage, db } from '../Config/Config';
import { collection, addDoc } from 'firebase/firestore';
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
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            setResume(selectedFile);
            setUploadError('');
        } else {
            setResume(null);
            setUploadError('Please select a resume file');
        }
    };

    const handleCertificationsUpload = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            setCertifications(selectedFile);
        } else {
            setCertifications(null);
        }
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const storageRefResume = ref(storage, `resumes/${firstName}-${lastName}-${Date.now()}`);
        const storageRefCertifications = certifications ? ref(storage, `certifications/${firstName}-${lastName}-${Date.now()}`) : null;

        const uploadTasks = [];
        uploadTasks.push(uploadBytes(storageRefResume, resume));

        if (certifications) {
            uploadTasks.push(uploadBytes(storageRefCertifications, certifications));
        }

        Promise.all(uploadTasks)
            .then(results => {
                const resumeUrlPromise = getDownloadURL(storageRefResume);
                const certificationsUrlPromise = certifications ? getDownloadURL(storageRefCertifications) : Promise.resolve('');

                return Promise.all([resumeUrlPromise, certificationsUrlPromise]);
            })
            .then(([resumeUrl, certificationsUrl]) => {
                return addDoc(collection(db, `applicants`), {
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
                    references
                });
            })
            .then(() => {
                setSuccessMsg('Application submitted successfully');
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
                document.getElementById('resume').value = '';
                document.getElementById('certifications').value = '';
                setUploadError('');
                setTimeout(() => {
                    setSuccessMsg('');
                }, 3000);
            })
            .catch((error) => {
                setUploadError(error.message);
            });
    };

    return (
        <div className='container mx-auto p-6 bg-gray-100'>
            <h1 className='text-3xl font-bold mb-6 text-center'>Application Form</h1>
            {successMsg && (
                <div className='bg-green-100 text-green-700 p-4 rounded mb-6'>
                    {successMsg}
                </div>
            )}
            {/* {uploadError && (
                <div className='bg-red-100 text-red-700 p-4 rounded mb-6'>
                    {uploadError}
                </div>
            )} */}
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
                        <div>
                            <label className='block text-gray-700'>Institution Name</label>
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
                        <div className='md:col-span-2'>
                            <label className='block text-gray-700'>Certifications or Additional Training</label>
                            <input
                                type="file"
                                className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                                onChange={(e) => handleCertificationsUpload(e)}
                            />
                        </div>
                        <div className='md:col-span-2'>
                            <label className='block text-gray-700'>Special Projects or Achievements</label>
                            <textarea
                                className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                                onChange={(e) => setProjects(e.target.value)}
                                value={projects}
                                placeholder="Mention any significant projects, awards, or honors"
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
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Resume</label>
                        <input
                            type="file"
                            id="resume"
                            className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                            onChange={handleResumeUpload}
                            required
                        />
                    </div>
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
                    <div className='mb-4'>
                        <label className='block text-gray-700'>References</label>
                        <textarea
                            className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                            onChange={(e) => setReferences(e.target.value)}
                            value={references}
                            placeholder="Provide contact details or names of references"
                        />
                    </div>
                </section>

                <div className='flex justify-center'>
                    <button
                        type="submit"
                        className='bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:ring-2 focus:ring-blue-500'
                    >
                        Submit Application
                    </button>
                </div>
            </form>
        </div>
    );
};



