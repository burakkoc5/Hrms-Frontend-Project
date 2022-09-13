import axios from "axios";

export default class EducationService{

    getEducationByResumeId(resumeId){
        return axios.get(`http://localhost:8080/api/coverLetters/getEducationByResumeId?resumeId=${resumeID}`);
    }

}