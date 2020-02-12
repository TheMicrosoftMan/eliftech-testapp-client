import axios from "axios";

const server = "http://localhost:3001/api";

export const getOrdersAPI = page => {
  return axios.get(`${server}/orders/${page}`);
};

export const uploadOrdersFileAPI = file => {
  const formData = new FormData();
  formData.append("file", file);
  return axios.post(`${server}/orders/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};

export const getReportAPI = () => {
  return axios.get(`${server}/export/`, {
    responseType: "blob"
  });
};
