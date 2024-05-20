import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useState } from 'react';


const UpdateEmployee = () => {
    const {id} = useParams();
    const updateEmployee = (e) => {
        e.preventDefault();
        console.log(employee);
        EmployeeService.updateEmployee(employee, id)
          .then((response) => {
            navigate("/employeeList");
          })
          .catch((error) => {
            console.log(error);
          });
      };

    const [employee, setEmployee] = useState({
        id: id,
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
    const cancelupdate=()=>{
        navigate('/')
    }
    useEffect(() => {
        const fetchData = async () => {
          
          try {
            const response = await EmployeeService.getEmployeeById(id);
            setEmployee(response.data);
          } catch (error) {
            console.log(error);
          }
          
        };
        fetchData();
      }, []);
    
    return (
        <div className="flex max-w-2xl mx-auto shadow border-b">
          <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
              <h1>Update  Employee</h1>
            </div>
            <form onSubmit={updateEmployee}>
              <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={employee.firstName}
                  onChange={(e) => handleChange(e)}
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
                  onChange={(e) => handleChange(e)}
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
                  onChange={(e) => handleChange(e)}
                  type="email"
                  className="h-10 w-96 border mt-2 px-2 py-2"
                  required
                />
              </div>
    
              <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                <button className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6" type="submit" onClick={updateEmployee}>
                  Update
                </button>
                <button className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6" type="button" onClick={cancelupdate} >
                  Cancel
                </button>
                </div>
                <div>
                
              </div>
            </form>
          </div>
        </div>
      );
    }

export default UpdateEmployee
