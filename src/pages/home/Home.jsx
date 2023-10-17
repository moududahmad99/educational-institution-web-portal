import React from 'react'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

// Components
import RootLayout from '../../components/navbar/Rootlayout';
import LogoArea from '../../components/logoArea/LogoArea';
import News from '../../components/news/News';
import Banner from '../../components/banner/Banner';
import About from '../../components/about/About';
import Footer from '../../components/footer/Footer';



// Pages
import Notice from '../notice/Notice';
import Students from '../students/Students';
import Admission from '../admission/Admission';
import Routine from '../routine/Routine';
import Contact from '../contact/Contact';
import Result from '../result/Result';
import Administration from '../administration/Administration';
import Syllabus from '../syllabus/Syllabus';
import Notifications from '../notifications/Notifications';
import Login from '../login/Login';

const Home = () => {
  const reactRouter = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='/notice' element={<Notice />} />
      <Route path='/students' element={<Students />} />
      <Route path='/admission' element={<Admission />} />
      <Route path='/routine' element={<Routine />} />
      <Route path='/result' element={<Result />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/administration' element={<Administration />} />
      <Route path='/syllabus' element={<Syllabus />} />
      <Route path='/notifications' element={<Notifications />} />
      <Route path='/login' element={<Login />} />
    </Route>
  ))

  return (
    <div className='home-background border bg-[#ececec90] p-2'>
      <LogoArea />
      <RouterProvider router={reactRouter} />
      <News />
      <Banner />
      <About />
      <Footer />
    </div>
  )
}

export default Home;