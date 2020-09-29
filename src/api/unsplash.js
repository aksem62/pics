import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Y4n53SXaevvdb7_w0obc_qy9KznnSZzYYmIUUWTmBiI",
  },
});
