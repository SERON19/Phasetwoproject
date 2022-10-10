import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SearchProduct from "./SearchProduct";
const Navbar = () => {
    const navigate = useNavigate()
    const [search_term,setSearch_term]  = useState()

    const handleChange = event => {
        setSearch_term(event.target.value);
      };
    
   
    


    return ( 
        <nav>
            
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/searchproducts">Search Product</NavLink>
            <NavLink to="/computing">Computing</NavLink>
            <NavLink to="/phones">Phones</NavLink>
            <NavLink to="/sales">GeneralSales</NavLink>
            <form className="search"  >
            < input 
            className="form btn-outline-success" 
            type="search" placeholder="Search For Product" 
            onChange={handleChange}
            value={search_term} 
            aria-label="Search"
            />
            <button 
            className="btn btn-outline-success" 
            type="submit" 
            onClick={()=> navigate(`searchproducts/${search_term}`)}>Search</button>
            </form>

        
        </nav>

     );
}
 
export default Navbar;