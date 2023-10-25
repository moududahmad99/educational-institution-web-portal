import React from 'react'
import { format, eachMonthOfInterval, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';


const Calendar = () => {
  // Define the year for which you want to generate the calendar
  const year = 2024; // Change this to the desired year

  // Create an array of month starting dates for the entire year
  const yearStart = new Date(year, 0, 1);
  const yearEnd = new Date(year, 11, 31);
  const months = eachMonthOfInterval({ start: startOfMonth(yearStart), end: endOfMonth(yearEnd) });

  return (
    <React.Fragment>
      <div id="calendar">
        <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
          <h3 className='bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14  py-2'>একাডেমিক ক্যালেন্ডার</h3>
          <p className='text-md font-medium mt-2'>home / academics / <span className='text-red-800'> calendar</span></p>
        </div>

        {/* <div className='border p-8 flex flex-col justify-center item-center bg-[#FF8080] my-14 text-white text-center text-lg font-medium'>
              <p>আমরা এই পৃষ্ঠাটি আপগ্রেড করছি, আমাদের প্রগতি দেখতে থাকুন।</p>
          </div> */}
        {months.map((month, index) => (
          <div key={index} className="mb-4 bg-[#EBF3E8]">
            <h2 className='border p-4 bg-[#FFFFFF] '>{format(month, 'MMMM yyyy')}</h2>
            <div className="grid grid-cols-7">
              {eachDayOfInterval({ start: startOfMonth(month), end: endOfMonth(month) }).map((day, dayIndex) => (
                <div key={dayIndex} className="text-center p-2 border">
                  {format(day, 'd')}
                </div>
              ))}
            </div>
          </div>
        ))}



      </div>
    </React.Fragment>
  )
}

export default Calendar