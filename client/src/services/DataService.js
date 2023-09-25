import http from "../http-common";

class DataService {
  getAll() {
    return http.get("/toDos");
  }

  get(id) {
    return http.get(`/toDo/${id}`);
  }

  create(data) {
    return http.post("/toDo", data);
  }

  update(id, data) {
    return http.patch(`/toDo/${id}`, data);
  }

  delete(id) {
    return http.delete(`/toDo/${id}`);
  }

}

export default new DataService();