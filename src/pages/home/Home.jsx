import React from 'react'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

// Components
import RootLayout from '../../components/navbar/Rootlayout';
import LogoArea from '../../components/logoArea/LogoArea';
import News from '../../components/news/News';
import Banner from '../../components/banner/Banner';
import About from '../../components/about/About';
import Teachers from '../../components/teachers/Teachers';
import Countdown from '../../components/countdown/Countdown';
import Footer from '../../components/footer/Footer';

// Pages
import Students from '../students/Students';
import Contact from '../contact/Contact';
import Notifications from '../notifications/Notifications';
import Login from '../login/Login';

// Dropdown Pages

import PrincipalMessage from '../dropdown/administration/principalMessage/PrincipalMessage';
import ClassRoutine from '../dropdown/academics/classRoutine/ClassRoutine';
import ExamRoutine from '../dropdown/academics/examRoutine/ExamRoutine';
import Notice from '../dropdown/academics/notice/Notice';
import Syllabus from '../dropdown/academics/syllabus/Syllabus';
import Calendar from '../dropdown/academics/calendar/Calendar';

import ManagementCommitte from '../dropdown/administration/managementCommitte/ManagementCommitte';
import PresidentMessage from '../dropdown/administration/presidentMessage/PresidentMessage';
import OurTeachers from '../dropdown/administration/teachers/OurTeachers';
import Workers from '../dropdown/administration/workers/Workers';

import ScoutGuide from '../dropdown/schoolfellow/scoutGuide/ScoutGuide';
import Debate from '../dropdown/schoolfellow/debate/Debate';
import Play from '../dropdown/schoolfellow/play/Play';

import AdmissionNotice from '../dropdown/admissions/admissionNotice/AdmissionNotice';
import AdmissionExamSyllabus from '../dropdown/admissions/admissionExamSyllabus/AdmissionExamSyllabus';
import FillAdmissionForm from '../dropdown/admissions/fillAdmissionForm/FillAdmissionForm';
import AdmitCard from '../dropdown/admissions/admitCard/AdmitCard';
import SelectedStudents from '../dropdown/admissions/selectedStudents/SelectedStudents';
import WaitingStudents from '../dropdown/admissions/waitingStudents/WaitingStudents';

import SchoolResult from '../dropdown/results/schoolResult/SchoolResult';
import OthersResult from '../dropdown/results/othersResult/OthersResult';

import Events from '../dropdown/gallery/events/Events';
import Album from '../dropdown/gallery/album/Album';

const Home = () => {
  const reactRouter = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>

      {/* Administration Dropdown Start */}
      <Route path='/administration/management-committee' element={<ManagementCommitte />} />
      <Route path='/administration/president-message' element={<PresidentMessage />} />
      <Route path='/administration/pricipal-message' element={<PrincipalMessage />} />
      <Route path='/administration/teachers' element={<OurTeachers />} />
      <Route path='/administration/workers' element={<Workers />} />
      {/* Administration Dropdown End*/}

      {/* Academics Dropdown Start */}
      <Route path='/academics/class-routine' element={<ClassRoutine />} />
      <Route path='/academics/exam-routine' element={<ExamRoutine />} />
      <Route path='/academics/notice' element={<Notice />} />
      <Route path='/academics/syllabus' element={<Syllabus />} />
      <Route path='/academics/calendar' element={<Calendar />} />
      {/* Academics Dropdown End*/}

      {/* Schoolfellow Dropdown Start */}
      <Route path='/schoolfellow/scout-guide' element={<ScoutGuide />} />
      <Route path='/schoolfellow/debate-competition' element={<Debate />} />
      <Route path='/schoolfellow/play' element={<Play />} />
      {/* Schoolfellow Dropdown End*/}


      {/* Admission Dropdown Start */}
      <Route path='/admissions/admission-notice' element={<AdmissionNotice />} />
      <Route path='/admissions/admission-exam-syllabus' element={<AdmissionExamSyllabus />} />
      <Route path='/admissions/fill-admission-form' element={<FillAdmissionForm />} />
      <Route path='/admissions/admit-card' element={<AdmitCard />} />
      <Route path='/admissions/list-of-selected-students-seeking-admission' element={<SelectedStudents />} />
      <Route path='/admissions/list-of-selected-students-waiting-admission' element={<WaitingStudents />} />
      {/* Admission Dropdown End */}

      {/* Result Dropdown Start */}
      <Route path='/results/school-result' element={<SchoolResult />} />
      <Route path='/results/others-result' element={<OthersResult />} />
      {/* Result Dropdown End */}

      {/* Gallery Dropdown Start */}
      <Route path='/gallery/events' element={<Events />} />
      <Route path='/gallery/album' element={<Album />} />
      {/* Gallery Dropdown End */}

      <Route path='/students' element={<Students />} />
      <Route path='/contact' element={<Contact />} />
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
      <Teachers />
      <Countdown />
      <Footer />
    </div>
  )
}

export default Home;