import './App.scss';
import React from 'react';
import Main from './Components/Main/Main';
import {Routes, Route} from 'react-router-dom'
import ContactView from './Components/ContactView/ContactView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/:id' element={<ContactView/>}/>

      </Routes>

    </div>
  );
}

export default App;
