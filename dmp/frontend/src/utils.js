import axios from "axios";


const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;

export const authAxios = axios.create({
    baseURL:'api/',
    headers: {
        'Content-Type':'application/json',
        'X-CSRFToken': csrftoken
    }
})