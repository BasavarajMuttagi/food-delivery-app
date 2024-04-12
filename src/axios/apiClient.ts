import axios from "axios";
import useFoodStore from "../../store";

function AxiosClient() {
  return axios.create({
    baseURL: "",
    headers: {
      Authorization: `Bearer ${useFoodStore.getState().token}`,
    },
  });
}

export default AxiosClient;
