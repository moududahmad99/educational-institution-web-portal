import React from 'react'

const AdmissionNotice = () => {
  return (
    <React.Fragment>
      <div id="admissionNotice">
        <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
          <h3 className='bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14 py-2'>ভর্তি বিজ্ঞপ্তি</h3>
          <p className='text-md font-medium mt-2'>home / admissions / <span className='text-red-800'> admission-notice</span></p>
        </div>



        <div className="admissionNotice-inner border">
          <table className="border-collapse w-full">
            <thead>
              <tr className="bg-[#BBCDCD40] ">
                <th className="p-2 text-start w-3/12">প্রকাশের তারিখ</th>
                <th className="p-2 text-start w-5/12">নোটিশ</th>
                <th className="p-2 text-start w-2/12">ভিউ</th>
                <th className="p-2 text-start w-2/12">ডাউনলোড</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">Publication Date 1</td>
                <td className="p-2">Notice Content 1</td>
                <td className="p-2">
                  <a href="#view-link-1">View</a>
                </td>
                <td className="p-2">
                  <a href="#download-link-1">Download</a>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Publication Date 2</td>
                <td className="p-2">Notice Content 2</td>
                <td className="p-2">
                  <a href="#view-link-2">View</a>
                </td>
                <td className="p-2">
                  <a href="#download-link-2">Download</a>
                </td>
              </tr>
            </tbody>
          </table>


        </div>
      </div>
    </React.Fragment>
  )
}

export default AdmissionNotice