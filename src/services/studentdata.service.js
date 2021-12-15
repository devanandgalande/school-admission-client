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

//   update(id, data) {
//     return http.put(`/tutorials/${id}`, data);
//   }

//   delete(id) {
//     return http.delete(`/tutorials/${id}`);
//   }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

}

export default new StudentDataService();