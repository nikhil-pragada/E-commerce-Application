import axios from "axios";

export const saveProduct = async (jsonpayload) => {
    const promise = await 
    axios.post("http://localhost:6664/api/v1/saveProduct",jsonpayload);
    console.log("Promise returned by axios.post():",promise);
    promise.then(response => {
        console.log("Product Complete Response:",response);
        console.log("Product Only data response:",response.data);
        alert("Product saved succesfully");
    }).catch((err) => {
        console.error("Error saving product:",err);
    });


}


export const getall=async()=>
    {
        const products=await
        axios.get('http://localhost:6664/api/v1/getProducts');
        console.log(products.data);
        return products.data;
    }

export const deleteProduct = async(id) =>{
try{
    const response = await
    axios.delete(`http://localhost:6664/api/v1/delete${id}`)
    return response

}catch(error){
    console.error("Error deleting the product",error)
}
}