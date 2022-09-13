import axios from "axios";

export default class LinkNameService{

    getLinkNames(){
        return axios.get("http://localhost:8080/api/linkNames/getAll");
    }

}