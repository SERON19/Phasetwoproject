import Products from "./Products";
import { Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetails = () => {
    let { name} = useParams();
    console.log(name)
    const [product,setProduct]= useState()
    const [loading, setLoading] = useState(true);
    const fetchData =  () =>{
        setLoading(true);

        const options = {
          method: 'GET',
          //url: `https://jumia-service.p.rapidapi.com/api/products/${name}`,
          url: 'https://jumia-service.p.rapidapi.com/api/products/apple-macbook-pro-avec-m1-chip-13-pouces-8-go-ram-256-go-ssd-2-thunderbolt-3-magic-keyboard-azerty-41160804.html',
          headers: {
            'X-RapidAPI-Key': 'c35bd5647emshc7320de74c5bd67p10e543jsn15eeceb34626',
            'X-RapidAPI-Host': 'jumia-service.p.rapidapi.com'
          }
        };
        
        axios.request(options)
        .then(function (response) {
            setProduct(response.data);
            setLoading(false)

        })
        .catch(function (error) {
            console.error(error);
        });
         }

        useEffect(() => {
            fetchData ()
            },[setProduct])

            return ( 
                <>
            
                {loading ? <h2>All Products Available Loading.....</h2> : <h1>{product.name}</h1>
                } 
                
                </>
        
       
        
  
     );
}

export default ProductDetails;