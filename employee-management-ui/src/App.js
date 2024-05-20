import { useState } from 'react';
import './App.css';
import AddEmployee from './components/AddEmployee';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route index element={<EmployeeList/>}/>
    <Route path='/addEmployee' element={<AddEmployee/>}/>
    <Route path='/' element={<EmployeeList/>}/>
    <Route path='/employeeList' element={<EmployeeList/>}/>
    <Route path='/editEmployee/:id' element={<UpdateEmployee/>}/>
  </Routes>
  </BrowserRouter>
  </>;
}

export default App;
