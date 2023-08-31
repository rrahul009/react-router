import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Service from './components/Service';
import NavbarNavlink from './components/NavbarNavlink';
import UseNavigateroute from './components/UseNavigateroute';
import NomatchRoutes from './components/NomatchRoutes';
import NestedRoute from './components/NestedRoute';
import List1 from './components/List1';
import List2 from './components/List2';
import Useeffect from './components/Useeffect';

const App = () => {
  return (
    <>
      <Navbar />
      <NavbarNavlink/>
      <Useeffect/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service/>} />
        <Route path='/usenavigate' element={<UseNavigateroute/>}/>
        <Route path='/nestedroute' element={<NestedRoute/>}>
          <Route index element={<List1/>}/>
          <Route path='list1' element={<List1/>}/> 
          <Route path='list2' element={<List2/>}/>
          </Route>
        <Route path='*' element={<NomatchRoutes/>}/>
      </Routes>
    </>
  );
};

export default App;
