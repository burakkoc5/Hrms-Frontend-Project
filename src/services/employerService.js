import axios from "axios";

export default class EmployerService{

    getEmployers(){
        return axios.get("http://localhost:8080/api/employers/getAll");
    }

    async checkEmployer(email, password){

        let axiosData = axios.get("http://localhost:8080/api/employers/getByMail?mail="+email)
        
        
        
        if((await axiosData).data.data!==null && (((await axiosData).data).data.password===password)){
            return axiosData
        }

        else{
            return null;
        }
        
    }

    getEmployer(id){
        return axios.get("http://localhost:8080/api/employers/getById?id="+id)
    }
}