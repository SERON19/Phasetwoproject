import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Products from "./Products";
const Home = () => {
    const [products,setProducts]=useState([ ])
    const [loading, setLoading] = useState(true);
    const fetchData =  () =>{
        setLoading(true);
        const options = {
          method: 'GET',
          url: 'https://jumia-service.p.rapidapi.com/api/product/search/macbook%20pro/50',
          headers: {
              'X-RapidAPI-Key': 'c35bd5647emshc7320de74c5bd67p10e543jsn15eeceb34626',
              'X-RapidAPI-Host': 'jumia-service.p.rapidapi.com'
          }
        }
        axios.request(options)
        .then(function (response) {
            console.log(response.data);
            setProducts(response.data);
            setLoading(false);
        })
        .catch(function (error) {
            console.error(error);
        });
    }
  
  useEffect(() => {
    fetchData ()
    },[setProducts])


    return ( 
        <>
        
        {loading ? <h2>All Products Available Loading.....</h2> :  <Products products={ products}/>
        } 
        {} 
        {/* <button type="button" class="btn btn-success" onClick={()=>navigate("products")}>All Products</button><br/> */}  
        </>
        
     );
}
 
export default Home;