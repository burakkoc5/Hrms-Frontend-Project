import axios from "axios";

export default class JobAdvertisementService{

    getJobAdvertisements(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getAllSortedByDate");
    }

    getJobAdvertisementById(id){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getById?id="+id);
    }

    getJobAdvertisementByEmployerId(id){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getByEmployerId?employerId="+id);
    }

    addJobAdvertisement(employerId,cityId,dueDate,expectations,jobId,minSalary,maxSalary,openPositions){

      console.log({
        "city": {
          "id": cityId
        },
        "dueDate": dueDate,
        "employer": {
          "id": employerId,
        },
        "expectations": expectations,
        "job": {
          "id": jobId
        },
        "maxSalary": maxSalary,
        "minSalary": minSalary,
        "openPositions": openPositions,
        "status": true
      })
        return axios.post("http://localhost:8080/api/jobAdvertisements/add",{
            "city": {
              "id": cityId
            },
            "dueDate": dueDate,
            "employer": {
              "id": employerId
            },
            "expectations": expectations,
            "job": {
              "id": jobId
            },
            "maxSalary": maxSalary,
            "minSalary": minSalary,
            "openPositions": openPositions,
            "status": true
          })
      }

}