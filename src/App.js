
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home/Home';



function App() {
  return (
    <div>
      <h1 className='text-secondary'>Cerpenco</h1>

      <Routes>
        <Route path='' element="<Home/>"></Route>

      </Routes>

    </div >
  );
}

export default App;
