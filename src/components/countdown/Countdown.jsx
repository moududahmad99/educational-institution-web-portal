// import React from 'react'
// import './Countdown.css'
// import { FaChalkboardTeacher } from 'react-icons/fa'
// import { BiBookReader } from 'react-icons/bi'
// import { GrUserWorker } from 'react-icons/gr'
// import { BsBuildings } from 'react-icons/bs'
// const Countdown = () => {
//   return (
//     <React.Fragment>
//       <div id="countdown">
//         <div className="countdown-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-10 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)]">
//           <div className='flex flex-col items-center py-8'>
//             <i className='text-5xl sm:text-7xl'><FaChalkboardTeacher /></i>
//             <h4 className='text-xl my-2'>আমাদের শিক্ষক</h4>
//             <h5>৪৫</h5>
//           </div>
//           <div className='flex flex-col items-center py-8'>
//             <i className='text-5xl sm:text-7xl'><BiBookReader /></i>
//             <h4 className='text-xl my-2'>ছাত্র ও ছাত্রী</h4>
//             <h5>৬৪৫+</h5>
//           </div>
//           <div className='flex flex-col items-center py-8'>
//             <i className='text-5xl sm:text-7xl'><GrUserWorker /></i>

//             <h4 className='text-xl my-2'>কর্মচারী</h4>
//             <h5>৮</h5>
//           </div>
//           <div className='flex flex-col items-center py-8'>
//             <i className='text-5xl sm:text-7xl'><BsBuildings /></i>
//             <h4 className='text-xl my-2'>ব্রাঞ্চ</h4>
//             <h5 className='number-font'>১</h5>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   )
// }

// export default Countdown


import React, { useState, useEffect } from 'react';
import './Countdown.css';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { BiBookReader } from 'react-icons/bi';
import { GrUserWorker } from 'react-icons/gr';
import { BsBuildings } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';

const Countdown = () => {
  const [isCountdownVisible, setIsCountdownVisible] = useState(false);
  const [teacherCount, setTeacherCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);
  const [employeeCount, setEmployeeCount] = useState(0);
  const [branchCount, setBranchCount] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsCountdownVisible(true);
    }
  }, [inView]);

  // Update the countdown values when isCountdownVisible becomes true
  useEffect(() => {
    if (isCountdownVisible) {
      const interval = setInterval(() => {
        if (teacherCount < 45) {
          setTeacherCount(teacherCount + 1);
        }
        if (studentCount < 645) {
          setStudentCount(studentCount + 1);
        }
        if (employeeCount < 8) {
          setEmployeeCount(employeeCount + 1);
        }
        if (branchCount < 1) {
          setBranchCount(branchCount + 1);
        }
      }, 100); // Adjust the countdown speed as needed

      return () => clearInterval(interval);
    }
  }, [isCountdownVisible, teacherCount, studentCount, employeeCount, branchCount]);

  return (
    <React.Fragment>
      <div id="countdown">
        <div
          ref={ref}
          className="countdown-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-10 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)]"
        >
          <div className={`flex flex-col items-center py-8 ${isCountdownVisible ? 'countdown-animate' : ''}`}>
            <i className="text-5xl sm:text-7xl">
              <FaChalkboardTeacher />
            </i>
            <h4 className="text-xl my-2">আমাদের শিক্ষক</h4>
            <h5 className='text-xl font-medium'>{teacherCount}</h5>
          </div>
          <div className={`flex flex-col items-center py-8 ${isCountdownVisible ? 'countdown-animate' : ''}`}>
            <i className="text-5xl sm:text-7xl">
              <BiBookReader />
            </i>
            <h4 className="text-xl my-2">ছাত্র ও ছাত্রী</h4>
            <h5 className='text-xl font-medium'>{studentCount}</h5>
          </div>
          <div className={`flex flex-col items-center py-8 ${isCountdownVisible ? 'countdown-animate' : ''}`}>
            <i className="text-5xl sm:text-7xl">
              <GrUserWorker />
            </i>
            <h4 className="text-xl my-2">কর্মচারী</h4>
            <h5 className='text-xl font-medium'>{employeeCount}</h5>
          </div>
          <div className={`flex flex-col items-center py-8 ${isCountdownVisible ? 'countdown-animate' : ''}`}>
            <i className="text-5xl sm:text-7xl">
              <BsBuildings />
            </i>
            <h4 className="text-xl my-2">ব্রাঞ্চ</h4>
            <h5 className="number-font">{branchCount}</h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Countdown;
