import axios from "axios";

export default class LanguageService{

    getLanguageResumeId(resumeId){
        return axios.get(`http://localhost:8080/api/languages/getLanguagesByResumeId?resumeId=${resumeID}`);
    }

}