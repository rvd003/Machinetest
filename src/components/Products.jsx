import React from "react";
import Product from "./Product";
import Pagination from "./Pagination"
import { Grid } from "@chakra-ui/react";
import { useEffect,useState } from "react";
import style from "./product.css";
import axios from "axios";

const Products = () => {
  
 
  const[product,setproduct]=useState([])
  const [page,setPage]=useState(1);

const [limit,setLimit]=useState(3)
console.log(limit);

 

useEffect(()=>{
  axios.get(`https://reqres.in/api/users?page=${page}&_limit=${limit}`).then((response)=>{
   setproduct(response.data.data);
   console.log(response.data.data)
 })  
 },[page,limit,product])

  return (
    <div>

      
      <br></br>
      <Grid className={style.grid1}>
      {product.map((ele)=>{
        return(<Product ele={ele}></Product>)
      })}
      </Grid>
      <br></br>
     <Pagination setLimit={setLimit} limit={limit} page={page} setPage={setPage} ></Pagination>
     </div>
  );
};

export default Products;
