import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getProductCategories = async () => {
  const response = await axios.get(`${base_url}category/`);

  return response.data;
};

const pCategoryService = {
  getProductCategories,
};

export default pCategoryService;
