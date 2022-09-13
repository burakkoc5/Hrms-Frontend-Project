import axios from "axios";

export default class CoverLetterService{

    getCoverLetterByResumeId(resumeId){
        return axios.get(`http://localhost:8080/api/coverLetters/getCoverLetterByResumeId?resumeId=${resumeID}`);
    }

}