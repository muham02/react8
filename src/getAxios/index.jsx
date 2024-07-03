import axios from "axios";

const instanse = axios.create({
    baseURL:import.meta.env.VITE_API_GET,
    headers:{
"Content-Type":"application/json"
    },
    timeout:10000
})
export default instanse