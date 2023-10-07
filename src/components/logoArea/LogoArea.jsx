import React from 'react'
import './LogoArea.css'

const LogoArea = () => {
	return (
		<React.Fragment>
				<div id="logoArea" className='py-5 px-4 sm:block lg:flex items-center justify-between  bg-[#FFFFFF]'>
					<div className='flex items-center'>
						<picture className='pr-5'>
							<img src="/assets/logo.png" alt='logo'/>
						</picture>
						<div>
							<h2 className='text-2xl font-semibold mt-2'>দানারহাট আনছারিয়া ফাজিল মাদ্রাসা</h2>
							<h4 className='text-lg '>ডাকঘরঃ ঠাকুরগাঁও, জেলাঃ ঠাকুরগাঁও</h4>
						</div>
					</div>
					<div className='text-end'>
						<h3 className='text-lg'>EIIN: 165878</h3>
						<h3 className='text-lg '>স্থাপিতঃ <span className='number-font'> ১৯৫২ ইং </span></h3>
						<h3 className='text-lg'>প্রতিষ্ঠানের কোড: 4587655</h3>
					</div>
				</div>
		</React.Fragment>
	)
}

export default LogoArea;