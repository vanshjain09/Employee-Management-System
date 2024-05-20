import axios from "axios";

const saveurl = "http://localhost:8090/api/v1/employees"
class EmployeeService{
    saveEmployee(employee){
        return axios.post(saveurl,employee);
    }
    getEmployees(){
        return axios.get(saveurl);
    }
    deleteEmployee(id){
        return axios.delete(saveurl+"/"+id);
    }
    getEmployeeById(id){
        return axios.get(saveurl+"/"+id)
    }
    updateEmployee(employee,id){
        return axios.put(saveurl+"/"+id,employee)
    }
}
export default new EmployeeService();