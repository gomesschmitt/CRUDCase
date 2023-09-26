import http from "../http-common";

class DataService {
  getAll() {
    return http.get("/toDos");
  }

  get(id) {
    return http.get(`/toDo/${id}`);
  }

  create(data) {
    console.log(data);
    return http.post("/toDos", data);
  }

  update(id, data) {
    return http.patch(`/toDo/${id}`, data); // c "s" tit not avail
  }

  delete(id) {
    return http.delete(`/toDo/${id}`);
  }

}

export default new DataService();