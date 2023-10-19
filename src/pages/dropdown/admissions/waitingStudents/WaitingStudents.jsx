import React from 'react'
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { PiDownloadSimpleBold } from 'react-icons/pi';
import { AiFillEye } from 'react-icons/ai';

const WaitingStudents = () => {

  const tableRows = [
    { date: '10 - 1 - 2023', content: 'ভর্তি অপেক্ষমান শিক্ষার্থীর তালিকা ২০২৩' },
    { date: '11 - 10 - ২০২২', content: 'ভর্তি অপেক্ষমান শিক্ষার্থীর তালিকা ২০২২' },
  ];


  return (
    <React.Fragment>
    <div id="waitingStudents">
      <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
        <h3 className='bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14 py-2'>ভর্তি অপেক্ষমান শিক্ষার্থীর তালিকা</h3>
        <p className='text-md font-medium mt-2'>home / admissions / <span className='text-red-800'>list-of-selected-students-waiting-admission</span></p>
      </div>

      <div className="border vertical-scrollMain bg-[#DBE8E960]">
        <table className="border-collapse w-full vertical-scroll">
          <thead>
            <tr className="bg-[#BBCDCD60]">
              <th className="p-2 text-start w-3/12">প্রকাশের তারিখ</th>
              <th className="p-2 text-start w-5/12">নোটিশ</th>
              <th className="p-2 text-start w-2/12">ভিউ [PDF]</th>
              <th className="p-2 text-start w-2/12">ডাউনলোড [PDF]</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, index) => (
              <tr key={index} className="border-b">
                <div className='flex items-center pt-2'>
                  <td className="p-2"><i><BsFillCalendarDateFill /></i></td>
                  <td className="py-2">{row.date}</td>
                </div>
                <td className="p-2">{row.content}</td>
                <td className="p-2">
                  <a href={`#view-link-${index}`} className='flex items-center'> <i className='pr-1'><AiFillEye /></i> View</a>
                </td>
                <td className="p-2">
                  <a href={`#download-link-${index}`} className='py-2 flex items-center'>
                    <i className='pr-1'><PiDownloadSimpleBold /></i> Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </React.Fragment>
  )
}

export default WaitingStudents