import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';


const AdmissionForm = () => {



  const [formData, setFormData] = useState({
    studentNameEn: '',
    studentNameBn: '',
    emergencyMobile: '',
    birthDate: '',
    nationalId: '',
    grade: '',
    gender: '',
    religion: '',
    academicInstitution: '',
    institutionAddress: '',
    previousClass: '',
    fatherNameEn: '',
    motherNameEn: '',
    fatherNameBn: '',
    motherNameBn: '',
    fatherMobile: '',
    motherMobile: '',
    fatherProfession: '',
    motherProfession: '',
    fatherEmail: '',
    motherEmail: '',
    fatherNID: '',
    motherNID: '',
    guardianInfo: '',
    presentAddress: '',
  });




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here

    setTimeout(() => {
      toast.success('Form submitted successfully!', {
        position: 'top-right',
        autoClose: 3000, // You can adjust the time the message is displayed
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }, 1000);

    console.log(formData);
  };

  return (
    <React.Fragment>
      <div id="fillAdmissionForm">

        <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
          <h3 className='bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14 py-2'>ভর্তির ফরম পূরণ</h3>
          <p className='text-md font-medium mt-2'>home / admissions / <span className='text-red-800'> fill-admission-form</span></p>
        </div>

        {/* ----------- Admission Form ----------- */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center ">ভর্তির ফরম</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              {/* Student Information */}
              <div>
                <label className="block text-sm font-medium text-gray-700">শিক্ষার্থীর নাম (বাংলায় লিখুন)</label>
                <input

                  type="text"
                  name="studentNameBn"
                  value={formData.studentNameBn}
                  onChange={handleChange}
                  className="outline-none mt-1 p-2 w-full border "
                  placeholder="শিক্ষার্থীর নাম"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">শিক্ষার্থীর মোবাইল (ইংরেজীতে লিখুন)</label>
                <input

                  type="text"
                  name="emergencyMobile"
                  value={formData.emergencyMobile}
                  onChange={handleChange}
                  className="outline-none mt-1 p-2 w-full border "
                  placeholder="শিক্ষার্থীর মোবাইল"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">জন্ম তারিখ</label>
                <input
                  type="text"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
                  placeholder="জন্ম তারিখ"
                  required
                />
                {/* <DatePicker
                  name="birthDate"
                  selected={formData.birthDate}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="জন্ম তারিখ"
                  required
                /> */}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ইংরেজীতে লিখুন</label>
                <input
                  type="text"
                  name="nationalId"
                  value={formData.nationalId}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
                  placeholder="জন্ম নিবন্ধন/জাতীয় পরিচয়পত্র নম্বর"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">ভর্তিচ্ছু শ্রেণি</label>
                <select
                  name="gender"
                  value={formData.grade}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
                >
                  <option value="">-নির্বাচন করুন-</option>
                  <option value="1">প্রথম</option>
                  <option value="2">দ্বিতীয়</option>
                  <option value="3">তৃতীয়</option>
                  <option value="4">চতুর্থ</option>
                  <option value="5">পঞ্চম</option>
                  <option value="6">ষষ্ঠ</option>
                  <option value="7">সপ্তম</option>
                  <option value="8">অষ্টম</option>
                  <option value="9">নবম</option>
                  <option value="10">দশম</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">লিঙ্গ</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
                >
                  <option value="">-নির্বাচন করুন-</option>
                  <option value="male">পুরুষ</option>
                  <option value="female">নারী</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ধর্ম</label>
                <select
                  name="religion"
                  value={formData.religion}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
                >
                  <option value="">-নির্বাচন করুন-</option>
                  <option value="islam">ইসলাম</option>
                  <option value="hinduism">হিন্দুধর্ম</option>
                  {/* Add more religion options */}
                </select>
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">পূর্বে অধ্যায়নকৃত শিক্ষা প্রতিষ্ঠানের নাম</label>
                <input
                  type="text"
                  name="academicInstitution"
                  value={formData.academicInstitution}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
                  placeholder="বাংলায় লিখুন"
                />
              </div>


              {/* Guardian Information */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">ইংরেজীতে লিখুন</label>
                <input
                  type="text"
                  name="fatherNameEn"
                  value={formData.fatherNameEn}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
                  placeholder="Father's Name (In BLOCK LETTERS)"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">ইংরেজীতে লিখুন</label>
                <input
                  type="text"
                  name="motherNameEn"
                  value={formData.motherNameEn}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
                  placeholder="Mother's Name (In BLOCK LETTERS)"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">পিতার নাম (বাংলায় লিখুন)</label>
                <input
                  type="text"
                  name="fatherNameBn"
                  value={formData.fatherNameBn}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
                  placeholder="পিতার নাম"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">মাতার নাম (বাংলায় লিখুন)</label>
                <input
                  type="text"
                  name="motherNameBn"
                  value={formData.motherNameBn}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
                  placeholder="মাতার নাম"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Father's Mobile No</label>
                <input
                  type="text"
                  name="fatherMobile"
                  value={formData.fatherMobile}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
                  placeholder="ইংরেজীতে লিখুন"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mother's Mobile No</label>
                <input
                  type="text"
                  name="motherMobile"
                  value={formData.motherMobile}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
                  placeholder="ইংরেজীতে লিখুন"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">পিতার পেশা</label>
                <select
                  name="fatherProfession"
                  value={formData.fatherProfession}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
                >
                  <option value="">-নির্বাচন করুন-</option>
                  <option value="option1">চাকরি</option>
                  <option value="option2">ডাক্তার</option>
                  <option value="option3">শিক্ষক</option>
                  <option value="option4">প্রকৌশলী</option>
                  <option value="option5">ব্যবসায়ী</option>
                  <option value="option6">চিকিৎসক</option>
                  <option value="option7">কৃষি কর্মী</option>
                  <option value="option8">পুলিশ কর্মী</option>
                  <option value="option9">দর্জী</option>
                  <option value="option10">বিজ্ঞানী</option>
                  <option value="option10">অন্যান্য</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">মাতার পেশা</label>
                <select
                  name="motherProfession"
                  value={formData.motherProfession}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
                >
                  <option value="">-নির্বাচন করুন-</option>
                  <option value="option1">চাকরি</option>
                  <option value="option2">ডাক্তার</option>
                  <option value="option3">শিক্ষক</option>
                  <option value="option4">প্রকৌশলী</option>
                  <option value="option5">ব্যবসায়ী</option>
                  <option value="option6">চিকিৎসক</option>
                  <option value="option7">কৃষি কর্মী</option>
                  <option value="option8">পুলিশ কর্মী</option>
                  <option value="option9">দর্জী</option>
                  <option value="option10">বিজ্ঞানী</option>
                  <option value="option10">অন্যান্য</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Father's Email</label>
                <input
                  type="text"
                  name="fatherEmail"
                  value={formData.fatherEmail}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
                  placeholder="ইংরেজীতে লিখুন"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">ইংরেজীতে লিখুন</label>
                <input
                  type="text"
                  name="fatherNID"
                  value={formData.fatherNID}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
                  placeholder="Father's NID"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ইংরেজীতে লিখুন</label>
                <input
                  type="text"
                  name="motherNID"
                  value={formData.motherNID}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
                  placeholder="Mother's NID"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  আইনানুগ অভিভাবকের তথ্য (প্রযোজ্য ক্ষেত্রে এখানে ক্লিক করুন)
                </label>
                <input
                  type="text"
                  name="guardianInfo"
                  value={formData.guardianInfo}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
                  placeholder="শিক্ষার্থীর ঠিকানা"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  বর্তমান ঠিকানা (In English)
                </label>
                <input
                  type="text"
                  name="presentAddress"
                  value={formData.presentAddress}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
                  placeholder="Present Address (In English)"
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="bg-[#A2B7B7] text-white font-medium py-2 px-14"
              >
                Submit
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>

        {/* Admission Rules */}
        <div className='border p-8 flex flex-col justify-center item-center bg-[#F5F5F5] my-14  text-lg'>
          <h2 className='font-semibold mb-3'>অনলাইনে ফরম পূরণের পদ্ধতিঃ</h2>
          <p>
            <span className='number-font'>১</span>. আপনি এখন খুব সহজে এবং অভিনব পদ্ধতিতে আপনার ভর্তি পরীক্ষার Admit Card সংগ্রহ করতে পারবেন। প্রথমে ফরমে উল্লেখিত প্রয়োজনীয় তথ্য সঠিকভাবে পূরণ করুন এবং পাসপোর্ট সাইজের একটি ছবি আপলোড করে ফরমটি SUBMIT করুন। ফরমের সমস্ত তথ্য অবশ্যই ইংরেজিতে পূরণ করতে হবে। <br /> <br />

            ২. ফরমটি সঠিকভাবে SUBMIT হলে আপনার Registration Process সম্পন্ন হবে এবং আপনি একটি Reference/Ref নাম্বার পাবেন। এই নাম্বারটি মনে রাখা জরুরি হলেও ভালো হবে যদি আপনি এটি লিখে রাখতেন। মনে রাখা গুরুত্বপূর্ণ যে, Registration সম্পন্ন হওয়া পর্যন্ত Admit Card প্রাপ্তির জন্য আপনাকে Payment Process সম্পন্ন করতে হবে এবং এই প্রক্রিয়ার জন্য আপনার Reference/Ref নাম্বার অত্যন্ত জরুরি। <br />  <br />

            ৩. ফরমের মূল্য আপনাকে DBBL এর Mobile Banking এর মাধ্যমে জমা দিতে হবে। আপনি নিজের অথবা অন্য কারো DBBL Account থেকে ক্লাস ২য় পর্যন্ত ২০০ টাকা বা ক্লাস ৩য় পর্যন্ত ৩০০ টাকা (আপনার জন্য যেটি প্রয়োজ্য) ২০৮৬ Biller ID নাম্বারে জমা দিতে হবে। টাকা সফলভাবে জমা হলে আপনি একটি TrxID Number পাবেন যা আপনাকে মনে রাখতে হবে এবং এটি পরবর্তীতে Admit Card ডাউনলোড করার জন্য প্রয়োজন হবে। DBBL Payment এর বিস্তারিত তথ্য ছবির মাধ্যমে দেখানো হয়েছে। <br /> <br />

            ৪. Admit Card ডাউনলোড করতে আপনাকে Admit Card লিঙ্কে ক্লিক করে আপনার Reference/Ref Number এবং TrxID Number দিতে হবে, এবং খুব সহজে আপনি এই পত্রটি প্রিন্ট করে নিতে পারবেন। যদি কোন কারণে Admit Card হারিয়ে যায়, আপনি এই অপশনে এসে আবার আপনার Admit Card প্রিন্ট করতে পারবেন। <br /> <br />

          </p>
        </div>


      </div>
    </React.Fragment>

  );
};

export default AdmissionForm;
