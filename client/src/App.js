import './App.scss';
import React from 'react';
//Header
import Header from './Components/Header/Header';
//Footer
import Footer from './Components/Footer/Footer';
//Main
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />

    </div>
  );
}

export default App;
