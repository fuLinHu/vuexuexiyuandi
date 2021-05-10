import axios from "axios";

const instance = axios.create({
     baseURL:"http://jsonplaceholder.typicode.com/posts",
    timeout:5000
})
export function get(url,parmas){
    return instance.get(url,parmas)
}