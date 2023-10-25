import React from 'react'
import './Footer.css'

import { FaFacebook, FaYoutube } from "react-icons/fa";
import { AiFillTwitterSquare } from 'react-icons/ai'

const Footer = () => {
  return (
    <React.Fragment>
      <div id="footer" className='bg-[#FFFFFF] mt-8 pt-5'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">

          <div className="bg-[#EDEDED45] p-4 rounded">
            <picture className='flex justify-center flex-col items-center'>
              <img src="/assets/logo.png" alt="" />
            </picture>
            <div>
              <h2 className='max-[767px]:text-lg md:text-xl font-semibold mt-4'>দানারহাট আনছারিয়া ফাজিল মাদ্রাসা</h2>
              <h4 className='max-[767px]:text-sm md:text-md'>ডাকঘরঃ ঠাকুরগাঁও, জেলাঃ ঠাকুরগাঁও</h4>
            </div>
            <div>
              <h3 className='text-md max-[767px]:text-sm pt-4'>EIIN: 165878</h3>
              <h3 className='text-md max-[767px]:text-sm'>স্থাপিতঃ <span className='number-font'> ১৯৫২</span> ইং </h3>
              <h3 className='text-md max-[767px]:text-sm'>প্রতিষ্ঠানের কোড: 4587655</h3>
            </div>
          </div>

          <div className="bg-[#EDEDED45] p-4 rounded pt-8">
            <h3 className='text-xl font-semibold pb-4'>যোগাযোগঃ</h3>
            <h5>গ্রামঃ দানারহাট, ঠাকুরগাঁও </h5>
            <h5 className='py-1'>উপজেলা ও জেলাঃ ঠাকুরগাঁও</h5>
            <h5>ইমেইলঃ danarhut@gmail.com</h5>
            <h5 className='py-1'>মোবাইলঃ <span className='number-font'>০১৭১৫৬৭২১৭১</span></h5>
            <h5>ওয়েবসাইটঃ dhafm.edu.bd</h5>
          </div>

          <div className="bg-[#EDEDED45] p-4 rounded pt-8">
            <div>
              <h3 className='text-xl font-semibold pb-4'>গুরুত্বপূর্ণ লিংকঃ</h3>
              <ul className='pl-4'>
                <li className='list-disc underline'>
                  <a href="http://www.bangladesh.gov.bd/">বাংলাদেশ জাতীয় তথ্য বাতায়ন</a>
                </li>
                <li className='list-disc underline py-1'>
                  <a href="http://dme.gov.bd/">মাদ্রাসা শিক্ষা অধিদপ্তর</a>
                </li>
                <li className='list-disc underline'>
                  <a href="http://banbeis.gov.bd/">বাংলাদেশ শিক্ষাতথ্য ও পরিসংখ্যান ব্যুরো</a>
                </li>
                <li className='list-disc underline py-1'>
                  <a href="https://www.thakurgaon.gov.bd/">জেলা প্রশাসকের কার্যালয়, ঠাকুরগাঁও
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul className='mt-2 flex gap-4'>
                <li className='p-2 bg-[#F1EFEF] text-black text-2xl'><i><FaFacebook /></i></li>
                <li className='p-2 bg-[#F1EFEF] text-black text-2xl'><i><AiFillTwitterSquare /></i></li>
                <li className='p-2 bg-[#F1EFEF] text-black text-2xl'><i><FaYoutube /></i></li>
              </ul>
            </div>

          </div>
          <div className="bg-[#EDEDED45] p-4 rounded pt-8">
            <div>
              <h3 className='text-xl font-semibold pb-4'>বোর্ড লিংকঃ</h3>
              <ul className='pl-4'>
                <li className='list-disc underline'>
                  <a href="http://bmeb.gov.bd/">বাংলাদেশ মাদ্রাসা শিক্ষা বোর্ড</a>
                </li>
                <li className='list-disc underline py-1'>
                  <a href="http://www.educationboard.gov.bd/">জাতীয় শিক্ষা বোর্ড</a>
                </li>
                <li className='list-disc underline'>
                  <a href="http://www.nctb.gov.bd/">জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড</a>
                </li>
                <li className='list-disc underline py-1'>
                  <a href="https://moedu.gov.bd/">শিক্ষা মন্ত্রনালয়</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom bg-[#79929C] items-center w-full p-4 flex justify-between flex-wrap">
          <h4 className='text-sm sm:text:md'>All copyright © Danarhut Ansaria Fazil Madrasah</h4>
          <a href="https://innovanex.netlify.app/" className='text-sm lg:text-md sm:text-md'>Developed By: <span className='underline lg:text-lg sm:text-md'>InnovaNex Soft BD</span></a>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer