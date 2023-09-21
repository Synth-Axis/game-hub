import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key:'cb63f2ea48e84d8ea7f734905915dcd1'
    }
})