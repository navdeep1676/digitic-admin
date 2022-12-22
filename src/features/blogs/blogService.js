import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const getBlogs = async () => {
  const response = await axios.get(`${base_url}blog/`);

  return response.data;
};
const createBlog = async (blog) => {
  const response = await axios.post(`${base_url}blog/`, blog, config);

  return response.data;
};
const blogService = {
  getBlogs,
  createBlog,
};

export default blogService;
