import axios from "axios";
export default axios.create(
    {
baseURL:"https://api.unsplash.com",
headers:{
    Authorization: 'Client-ID 2hi3eTAK07ICymYMza9A3gROt-fPpdDku5fZLfPCz1A'}
})
