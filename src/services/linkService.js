import axios from "axios";

export default class LinkService{

    getLinksByResumeId(resumeId){
        return axios.get(`http://localhost:8080/api/links/getLinksByResumeId?resumeId=${resumeID}`);
    }

}