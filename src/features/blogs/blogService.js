import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getBlogs = async () => {
  const response = await axios.get(`${base_url}blog/`);

  return response.data;
};

const blogService = {
  getBlogs,
};

export default blogService;
