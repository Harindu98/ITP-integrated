import axios from "../helpersAdmin/axios";

class ProductService{
    getInitialData(){
        return axios.post("http://localhost:5000/api/initialData");
    }

    getInitialDataWithOutAuth(){
        return axios.post("http://localhost:5000/api/initialdataWithOutAuth");
    }
}

export default new ProductService()