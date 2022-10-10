import { Link } from "react-router-dom";
import { Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SearchProduct = () => {
    let { search_term} = useParams();
    console.log(search_term)
    const [searchproducts,setSearchroducts]= useState()
    const [loading, setLoading] = useState(true);
    const fetchData =  () =>{
        setLoading(true);

        const options = {
            method: 'GET',
          url: `https://jumia-service.p.rapidapi.com/api/products/search/${search_term}`,
          headers: {
              'X-RapidAPI-Key': 'c35bd5647emshc7320de74c5bd67p10e543jsn15eeceb34626',
              'X-RapidAPI-Host': 'jumia-service.p.rapidapi.com'
            }
          };
          
          axios.request(options)
          .then(function (response) {
              setSearchroducts(response.data);
              setLoading(false)


          })
          .catch(function (error) {
              console.error(error);
          });
          }
          useEffect(() => {
            fetchData ()
            },[setSearchroducts])

            return ( 
                <>
                
                {loading ? <h2>All Products Available Loading.....</h2> : <h1>{searchproducts}</h1>
                } 
                </>
                
             );


}
 
export default SearchProduct;