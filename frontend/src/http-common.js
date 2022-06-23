import axios from "axios";

export default axios.create({
  baseURL: "http://10.0.0.3:3001/api/v1/",
  headers: {
    "Content-type": "application/json",
  },
});
