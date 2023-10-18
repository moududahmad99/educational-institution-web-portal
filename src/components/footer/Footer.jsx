import React from 'react'
import './Footer.css'

import { FaFacebook, FaYoutube } from "react-icons/fa";
import { AiFillTwitterSquare } from 'react-icons/ai'

const Footer = () => {
  return (
    <React.Fragment>
      <div id="footer" className='bg-[#FFFFFF] mt-8 pt-5'>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
          <div class="bg-[#EDEDED45] p-4 rounded">
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

          <div class="bg-[#EDEDED45] p-4 rounded flex justify-center flex-col md:items-center sm:items-start">
            <h3 className='text-xl font-semibold pb-4'>যোগাযোগঃ</h3>
            <h5>গ্রামঃ দানারহাট, ঠাকুরগাঁও </h5>
            <h5 className='py-1'>উপজেলা ও জেলাঃ ঠাকুরগাঁও</h5>
            <h5>ইমেইলঃ danarhut@gmail.com</h5>
            <h5 className='py-1'>মোবাইলঃ <span className='number-font'>০১৭১৫৬৭২১৭১</span></h5>
            <h5>ওয়েবসাইটঃ dhafm.edu.bd</h5>
          </div>

          <div class="importantLinks bg-[#EDEDED45] p-4 rounded flex justify-center flex-col items-start">
            <h3 className='text-xl font-semibold'>গুরুত্বপূর্ণ লিংকঃ</h3>
            <ul className='flex justify-between w-full mt-4 mb-2 flex-wrap gap-y-2'>
              <li className='text-sm'>
                <a href="/administration">প্রশাসনিক</a>
              </li>
              <li className='text-sm'>
                <a href="/syllabus">সিলেবাস</a>
              </li>
              <li className='text-sm'>
                <a href="/routine">রুটিন</a>
              </li>
              <li className='text-sm'>
                <a href="/admission">ভর্তি</a>
              </li>
              <li className='text-sm'>
                <a href="/notice">নোটিশ</a>
              </li>
              <li className='text-sm'>
                <a href="/contact">যোগাযোগ</a>
              </li>
            </ul>
            <div>
              <ul className='mt-2 flex gap-4'>
                <li className='p-2 bg-[#F1EFEF] text-black text-2xl'><i><FaFacebook /></i></li>
                <li className='p-2 bg-[#F1EFEF] text-black text-2xl'><i><AiFillTwitterSquare /></i></li>
                <li className='p-2 bg-[#F1EFEF] text-black text-2xl'><i><FaYoutube /></i></li>
              </ul>
            </div>
          </div>

          <div class="bg-[#EDEDED45] p-4 rounded flex justify-center flex-col items-start">
            <div>
              <h3 className='text-xl font-semibold pb-4'>বোর্ড লিংকঃ</h3>
              <ul className='pl-4'>
                <li className='list-disc underline'>
                  <a href="http://bmeb.gov.bd/">বাংলাদেশ মাদ্রাসা শিক্ষা বোর্ড</a>
                </li>
                <li className='list-disc underline py-1'>
                  <a href="http://dme.gov.bd/">মাদ্রাসা শিক্ষা অধিদপ্তর</a>
                </li>
                <li className='list-disc underline'>
                  <a href="http://banbeis.gov.bd/">বাংলাদেশ শিক্ষাতথ্য ও পরিসংখ্যাস ব্যুরো</a>
                </li>
                <li className='list-disc underline py-1'>
                  <a href="https://moedu.gov.bd/">শিক্ষা মন্ত্রনালয়</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom bg-[#79929C] w-full p-4 flex justify-between flex-wrap">
          <h4 className='text-md'>All copyright © Danarhut Ansaria Fazil Madrasah</h4>
          <a href="##" className='lg:text-md sm:text-md'>Developed By: <span className='underline lg:text-lg sm:text-md'>InnovaNex Soft BD</span></a>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer