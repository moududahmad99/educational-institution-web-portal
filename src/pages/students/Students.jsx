import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function handleFormSubmit(event) {
  event.preventDefault();
  toast.error('Username or Password is wrong.', {
    position: 'top-right',
    autoClose: 3000, // Duration for which the message will be shown (in milliseconds)
  });
}


const Students = () => {


  return (
    <React.Fragment>
      <div id="students">

        {/* Student Title */}
        <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
          <h3 className='bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14 py-2'>শিক্ষার্থী</h3>
          <p className='text-md font-medium mt-2'>home / <span className='text-red-800'> students</span></p>
        </div>

        {/* Form Area goes from here */}
        <div className="students-wrapper">
          <div className="max-w-md mx-auto p-4 bg-white my-8 shadow-lg">

            <form>
              {/* Username */}
              <div className="mb-4">
                <label htmlFor="simpleInput" className="block text-sm font-medium text-gray-600">
                  Username:
                </label>
                <input
                  type="text"
                  id="simpleInput"
                  name="simpleInput"
                  className="mt-1 p-2 block w-full border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                  placeholder="Enter your username"
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label htmlFor="simpleInput" className="block text-sm font-medium text-gray-600">
                  Password:
                </label>
                <input
                  type="password"
                  id="simpleInput"
                  name="simpleInput"
                  className="mt-1 p-2 block w-full border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                  placeholder="Enter your Password"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-5 py-1 border border-transparent font-medium text-white  bg-[#79929C] hover:bg-[#B5C8C8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={handleFormSubmit}
                >
                  Login
                </button>
              </div>
              <ToastContainer />

            </form>
          </div>
        </div>

      </div>
    </React.Fragment>
  )
}

export default Students