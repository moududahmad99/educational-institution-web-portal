import React from 'react'
import './Home.css'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import RootLayout from '../../components/navbar/Rootlayout';
import Notice from '../notice/Notice';
import LogoArea from '../../components/logoArea/LogoArea';


const Home = () => {

	const reactRouter = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='/notice' element={<Notice />} />
    </Route>
  ))

	return (
		<div className='home-background border bg-[#ececec90] p-2'>
			<LogoArea />
			<RouterProvider router={reactRouter} />

		</div>
	)
}

export default Home;