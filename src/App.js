import { RouterProvider } from 'react-router-dom';
import { reactRouter } from './RouteHandler/Router';
import './App.css';

function App() {


  return (
    <div className="App">
      <div id="blankMap">
        <div className='container mx-auto'>
          <div className=' home-background border bg-[#ececec90] p-2'>
            <RouterProvider router={reactRouter} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;