import { useNavigate } from "react-router-dom"
const Products = (props) => {
    const navigate = useNavigate()
    // console.log(props)
        const productList = props.products.map((product)=>{
                return(

        <div className="container"  onClick={()=>navigate(`productdetails${product.url}`)}  >
                    <img className="img" src={product.image}/ >
                    {product.name}
                    <div className="oldprices">WAS = {product.oldPrice}</div>
                    <div className="prices">NOW = {product.price}</div>
                    <hr/>
                    
        </div>)
    })
              
    return ( 
        <div>
            <h1 className="h1" >All Products Available</h1>
            {productList} 
        </div>
     );
}
 
export default Products;