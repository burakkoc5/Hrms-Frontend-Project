import axios from "axios";

export default class LanguageService{

    getSkillsByResumeId(resumeId){
        return axios.get(`http://localhost:8080/api/skills/getSkillsByResumeId?resumeId=${resumeID}`);
    }

}