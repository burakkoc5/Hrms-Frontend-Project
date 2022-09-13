import axios from "axios";

export default class ResumeService{

    getLinksByResumeId(employeeId){
        return axios.get(`http://localhost:8080/api/resumes/getResumeByEmployeeId?employeeId=${employeeId}`);
    }

}