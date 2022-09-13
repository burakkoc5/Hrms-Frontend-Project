import axios from "axios";


export default class UserService{

    async checkUser(email, password){

        let axiosData = axios.get("http://localhost:8080/api/users/getByMail?mail="+email)
        
        console.log(((await axiosData).data).data.password)
        
        if((((await axiosData).data).data.password===password)){
            return axiosData
        }

        else{
            return null;
        }
        
    }

}