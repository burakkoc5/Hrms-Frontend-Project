import axios from "axios";

export default class EmployeeService{

    addEmployee(birthDate,mail,name,surname,password,nationalityId){
        return axios.post("http://localhost:8080/api/employees/add",{birthDate:birthDate,mail:mail,name:name,password:password,surname:surname,tckNumber:nationalityId});
    }

    async checkEmployee(email, password){

        let axiosData = axios.get("http://localhost:8080/api/employees/getByMail?mail="+email)
        
        
        if((await axiosData).data.data!==null && (((await axiosData).data).data.password===password)){
            return axiosData
        }

        else{
            return null;
        }
        
    }


    getEmployee(id){
        return axios.get("http://localhost:8080/api/employees/getById?id="+id)
    }

}