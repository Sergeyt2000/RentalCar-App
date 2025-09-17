import axios from "axios";

export async function getBrands() {
    const response = await axios.get("/brands");
    return response.data;
}
