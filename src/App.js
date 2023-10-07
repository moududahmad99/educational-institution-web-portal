import './App.css';
// import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// import RootLayout from './components/navbar/Rootlayout';
import Home from './pages/home/Home';
// import Notice from './pages/notice/Notice';

function App() {

  // const reactRouter = createBrowserRouter(createRoutesFromElements(
  //   <Route path='/' element={<RootLayout />}>
  //     <Route path='/notice' element={<Notice />} />
  //   </Route>
  // ))

  return (
    <div className="App">
      <div id="blankMap"></div>
      <div className='container mx-auto'>
        <Home />
        {/* <RouterProvider router={reactRouter} /> */}
      </div>
    </div>
  );
}

export default App;
