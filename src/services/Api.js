import axios from "axios";

const BASE_URL = "https://api.api-ninjas.com/v1/emoji?name="
const name = "face"
const headers = { 'X-Api-Key': 'ut+NbmA/EKK968op1AnF4g==gbttNolq2hDA7Wbj'}

export const fetchData = async () => {
    try {
        const { data } = await axios.get(BASE_URL + name, {
            headers,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};