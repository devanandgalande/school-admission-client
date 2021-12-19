import http from "./http-common.js";

class StudentDataService {
//   getAll() {
//     return http.get("/studentdata");
//   }

//   get(id) {
//     return http.get(`/studentdata/${id}`);
//   }

  create(data) {
    return http.post("/studentdata", data);
  }


}

export default new StudentDataService();