import React, {useState} from "react";
import axios from "axios";
import{useNavigate} from "react-router-dom";

function ProductDetails(){ console.log("starts")
  
    const navigate = useNavigate()
    
    const[getData,setData] = useState('')
    console.log("getting details")
    const getProductDetails = ()=>{ 
        
    axios.get("http://localhost:2020/product/getallproduct").then(res=>{
            console.log("res", res.data)
            setData(res.data.result)
        }).catch(err=>{
            console.log("err",err.message)
        })
    }

    const deletedata = (productName)=> {
        console.log("productName",productName)
        axios.delete("http://localhost:402/product/deleteproduct",{params:{productName:productName}}).then(res=>{
            console.log("success")
            getProductDetails();
            alert("successfully deleted")
        }).catch(err=>{
            console.log(err,err.message)
        })

    }

    if(getData){
        console.log('checks if data given')

        return(
            <>
            <div className="col-mb-4-md-2 container">
                <h2>Product Details</h2>
              <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">index</th>
      <th scope="col">ProductCategory</th>
      <th scope="col">ProductName</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {
        getData.map((data,index)=>{

            return(<>
            <tr>
                <td>{index+1}</td>
                <td>{data.productCategory}</td>
                <td>{data.productName}</td>
                <td>{data.price}</td>
                <td>{data.quantity}</td>
                <td><button type="button" className="btn btn-primary" onClick={()=>navigate('/update', {state:data})}>Update</button></td>
                <td><button type="button" className="btn btn-danger" onClick={()=>deletedata(data.productName)}>Delete</button></td>

            </tr>
           </> )
            
        })
    }
         </tbody>
       </table>
    </div>
    </>)
    }else{
        return(
            <>
            <div className="=col-md-2 container">
            <button type = "button" onClick={getProductDetails} className="btn btn-primary"> get-productdetails</button>
            </div>
            </>
        )
    }
}
export default ProductDetails