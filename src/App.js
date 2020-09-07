import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Nav'
import Content from './components/Profile/Content'
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
    <div className='siteWrapper'>
    <Header />
     <div className='box'>
      < Navbar />

      <Route path='/profile' component={Dialogs} />
      <Route path='/about' component={Content}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
