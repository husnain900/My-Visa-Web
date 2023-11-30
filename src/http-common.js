import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL, // this varibale is coming from .env.development.local
  //baseURL:'https://wp-prospect-serverportal.azurewebsites.net/api',
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "X-Requested-With"
  }
});
