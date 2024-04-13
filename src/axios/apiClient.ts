import axios from "axios";
import useFoodStore from "../../store";

function apiClient() {
  return axios.create({
    baseURL: "https://api-food-delivery.vercel.app",
    headers: {
      Authorization: `Bearer ${useFoodStore.getState().token}`,
    },
  });
}

export default apiClient;
