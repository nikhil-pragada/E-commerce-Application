
import { useState } from "react"
import { deleteProduct, getall } from "./saveProduct";


function ProductsList() {

    const [product, setProduct] = useState([]);

    const displayPro = async () => {
        const data = await getall();
        setProduct(data);
    }

    const handleDelete = async (id) =>{
      await deleteProduct(id);
            displayPro();
      // try  {
      //      await deleteProduct(id);
      //       displayPro();
      //   }
      //   catch(error)
      //   {
      //       console.log("Error deleting the product:",error)
      //   }
    }

  return(
    <>

    <button type="button" onClick={displayPro}>Fetch Products</button>
    <h2>Product List</h2>
      <table className="table table-bordered " >
        <thead >
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product, index) => (
            <tr key={index}>
              <tr>{product.id}</tr>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.category}</td>
              <td>
                {product.image ? (
                  <img src={`/images/${product.image}`} alt={product.name} width="50" />
                ) : (
                  'No Image'
                )}
                
              </td>
              {/* <td>
                <button type="button" onClick={handleEdit()}>Edit</button>
              </td> */}
              <td>
              <button type="button" onClick   className="btn btn-success">Edit</button><br/><br/>
                <button type="button" onClick={()=>handleDelete(product.id)} className="btn btn-warning">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ProductsList
