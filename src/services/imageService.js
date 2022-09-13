import axios from "axios";

export default class ImageService{

    getExperienceByResumeId(userId){
        return axios.get(`http://localhost:8080/api/images/getImageByUserId?userId=${userId}`);
    }

}