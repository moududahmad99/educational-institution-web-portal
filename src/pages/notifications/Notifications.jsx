import React from 'react';

const Notifications = () => {


  return (
    <React.Fragment>
      <div id="admitCard">
        <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
          <h3 className='bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14 py-2'>নোটিফিকেশন</h3>
          <p className='text-md font-medium mt-2'>home / <span className='text-red-800'> Notifications</span></p>
        </div>

        <div className='border p-8 flex flex-col justify-center item-center bg-[#FF8080] my-14 text-white text-center text-lg font-medium'>
          <p>আমরা এই পৃষ্ঠাটি আপগ্রেড করছি, আমাদের প্রগতি দেখতে থাকুন।</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Notifications;
