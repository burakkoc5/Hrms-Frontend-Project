import axios from "axios";

export default class ExperienceService{

    getExperienceByResumeId(resumeId){
        return axios.get(`http://localhost:8080/api/experiences/getSortedExperiencesByResumeId?resumeId=${resumeID}`);
    }

}