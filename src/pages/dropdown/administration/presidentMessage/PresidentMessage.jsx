import React from 'react'

const PresidentMessage = () => {
  const presidentData = [
    {
      name: 'মোঃ খলিলুর রহমান',
      designation: 'প্রতিষ্ঠান সভাপতি',
      title: 'প্রতিষ্ঠান সভাপতির বাণীঃ',
      image: '/assets/profile.jpg',
      description: 'প্রিয় ছাত্র-ছাত্রী,অভিভাবক এবং শিক্ষক-শিক্ষিকা, আমি আনন্দিত এবং গর্বিত মনে প্রদান করছি যে, আমরা এই স্কুলের পরিবারের একটি অংশ। আমাদের স্কুল সমৃদ্ধ শিক্ষা ও সংস্কৃতির একটি কেন্দ্র হিসেবে পরিচিত। আমরা এই পথে অগ্রসর হতে থাকতে পারবো শুধু আপনাদের সাহায্যে। আমি আপনাদের সকলকে অনুরোধ করছি যে, নিজেদের প্রতি আত্ম-নির্ভর এবং অভিমান বজায় রাখুন। আপনাদের পরিশ্রম, নিষ্ঠা এবং উত্সাহ সর্বদা অবিচ্ছিন্ন থাকুক। আমরা আপনাদের সাথে এই অভিযানে যাত্রা করতে পারবো শুধু তখন, যখন আমরা সবাই একটি দিকে তাকানো হয়ে থাকব। আমরা একসাথে আগামী দিনগুলির জন্য সাজানো আছি একটি শিক্ষা ও সংস্কৃতির জাগরুক সমাজ। ধন্যবাদ, [প্রতিষ্ঠানের প্রধান]'
    },
  ]


  return (
    <React.Fragment>
      <div id="presidentMessage">
        <div className="pages-title  bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
          <h3 className='bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14  py-2'>প্রতিষ্ঠান সভাপতির বাণী</h3>
          <p className='text-md font-medium mt-2'>home / administration / <span className='text-red-800'> management-committee</span></p>
        </div>

        <div className='teachers-card grid  gap-3'>
          {presidentData.map((teacher, index) => (
            <div key={index} className="p-4 bg-[#FFFFFF] shadow my-3 flex flex-col items-center">
              <div className='teachers-card-img my-4'>
                <picture>
                  <img src={teacher.image} alt="profile" />
                </picture>
              </div>
              <div className="teachers-card-identity">
                <h4 className='font-medium text-lg'>{teacher.name}</h4>
                <h5>{teacher.designation}</h5>
                <h5 className='mt-6 text-md font-semibold'>{teacher.title}</h5>
                <h6>{teacher.description}</h6>
                <br />
                <h6>দানারহাট আনছারিয়া ফাজিল মাদ্রাসা, ঠাকুরগাঁও</h6>
              </div>
            </div>
          ))}
        </div>

      </div>
    </React.Fragment>
  )
}

export default PresidentMessage