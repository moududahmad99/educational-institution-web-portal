import React from 'react';
import './Contact.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';



const Contact = () => {


  const position = [51.505, -0.09]


  return (
    <React.Fragment>
      <div id="contact">
        <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
          <h3 className='bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14  py-2'>যোগাযোগ</h3>
          <p className='text-md font-medium mt-2'>home / <span className='text-red-800'> contact</span></p>
        </div>

        <div className="contact-inner grid grid-cols-1 sm:grid-cols-2 gap-4 flex items-center">
          <div class="bg-[#FFFFFF] pl-8 sm:pl-10 md:pl-10 lg:pl-10 xl:pl-14 p-4 rounded flex justify-center flex-col">
            <picture className='flex justify-center sm:justify-start'>
              <img src="/assets/logo.png" alt="" />
            </picture>
            <div>
              <h2 className='max-[767px]:text-lg md:text-xl font-semibold mt-4'>দানারহাট আনছারিয়া ফাজিল মাদ্রাসা</h2>
              <h4 className='max-[767px]:text-sm md:text-md'>ডাকঘরঃ ঠাকুরগাঁও, জেলাঃ ঠাকুরগাঁও</h4>
            </div>
            <hr className='mt-4 mr-4' />
            <div>
              <h3 className='text-md max-[767px]:text-sm pt-4'>EIIN: 165878</h3>
              <h3 className='text-md max-[767px]:text-sm'>স্থাপিতঃ <span className='number-font'> ১৯৫২</span> ইং </h3>
              <h3 className='text-md max-[767px]:text-sm'>প্রতিষ্ঠানের কোড: 4587655</h3>
            </div>

            <hr className='mt-4 mr-4' />
            <h5 className=' pt-4'>গ্রামঃ দানারহাট, ঠাকুরগাঁও </h5>
            <h5 className='py-1'>উপজেলা ও জেলাঃ ঠাকুরগাঁও</h5>
            <h5>ইমেইলঃ danarhut@gmail.com</h5>
            <h5 className='py-1'>মোবাইলঃ <span className='number-font'>০১৭১৫৬৭২১৭১</span></h5>
            <h5>ওয়েবসাইটঃ dhafm.edu.bd</h5>
          </div>
          <div className='bg-[#FFFFFF] contact-map'>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Contact