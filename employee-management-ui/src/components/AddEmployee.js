import React, { useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value
    });
  }

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const clearForm = () => {
    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
    });
  }

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Employee</h1>
        </div>
        <form onSubmit={saveEmployee}>
          <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={employee.firstName}
              onChange={handleChange}
              className="h-10 w-96 border mt-2 px-2 py-2"
              required
            />
          </div>
          <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">
              Last Name
            </label>
            <input
              name="lastName"
              value={employee.lastName}
              onChange={handleChange}
              type="text"
              className="h-10 w-96 border mt-2 px-2 py-2"
              required
            />
          </div>
          <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">
              Email
            </label>
            <input
              name="emailId"
              value={employee.emailId}
              onChange={handleChange}
              type="email"
              className="h-10 w-96 border mt-2 px-2 py-2"
              required
            />
          </div>

          <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            <button className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6" type="submit" onClick={saveEmployee}>
              Save
            </button>
            <button className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6" type="button" onClick={clearForm}>
              Clear
            </button>
            </div>
            <div>
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
