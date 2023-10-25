import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import RootLayout from '../components/navbar/Rootlayout';
import ManagementCommitte from '../pages/dropdown/administration/managementCommitte/ManagementCommitte';
import PresidentMessage from '../pages/dropdown/administration/presidentMessage/PresidentMessage';
import PrincipalMessage from '../pages/dropdown/administration/principalMessage/PrincipalMessage';
import OurTeachers from '../pages/dropdown/administration/teachers/OurTeachers';
import Workers from '../pages/dropdown/administration/workers/Workers';
import ClassRoutine from '../pages/dropdown/academics/classRoutine/ClassRoutine';
import ExamRoutine from '../pages/dropdown/academics/examRoutine/ExamRoutine';
import Notice from '../pages/dropdown/academics/notice/Notice';
import Syllabus from '../pages/dropdown/academics/syllabus/Syllabus';
import Calendar from '../pages/dropdown/academics/calendar/Calendar';
import ScoutGuide from '../pages/dropdown/schoolfellow/scoutGuide/ScoutGuide';
import Debate from '../pages/dropdown/schoolfellow/debate/Debate';
import Play from '../pages/dropdown/schoolfellow/play/Play';
import AdmissionNotice from '../pages/dropdown/admissions/admissionNotice/AdmissionNotice';
import AdmissionExamSyllabus from '../pages/dropdown/admissions/admissionExamSyllabus/AdmissionExamSyllabus';
import FillAdmissionForm from '../pages/dropdown/admissions/fillAdmissionForm/FillAdmissionForm';
import AdmitCard from '../pages/dropdown/admissions/admitCard/AdmitCard';
import SelectedStudents from '../pages/dropdown/admissions/selectedStudents/SelectedStudents';
import WaitingStudents from '../pages/dropdown/admissions/waitingStudents/WaitingStudents';
import SchoolResult from '../pages/dropdown/results/schoolResult/SchoolResult';
import OthersResult from '../pages/dropdown/results/othersResult/OthersResult';
import Events from '../pages/dropdown/gallery/events/Events';
import Album from '../pages/dropdown/gallery/album/Album';
import Students from '../pages/students/Students';
import Contact from '../pages/contact/Contact';
import Notifications from '../pages/notifications/Notifications';
import Home from '../pages/home/Home';

export const reactRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
    <Route path='/' element={<Home />} />

    {/* Administration Dropdown Start */}
    <Route path='/administration/management-committee' element={<ManagementCommitte />} />
    <Route path='/administration/president-message' element={<PresidentMessage />} />
    <Route path='/administration/principal-message' element={<PrincipalMessage />} />
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
  </Route>
))