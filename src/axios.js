import axios from 'axios';
const instance =axios.create({
    //this is the base url
    baseURL: "http://localhost:9000",
})
export default axios;