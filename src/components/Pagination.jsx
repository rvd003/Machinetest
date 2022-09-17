import React from "react";
import { Button,ButtonGroup,Select } from "@chakra-ui/react";
import { useEffect,useState } from "react";


const Pagination = ({setLimit,limit,page,setPage}) => {
  

 
  return (
    <ButtonGroup>
      
      <Button data-cy="pagination-previous-button" onClick={()=>setPage(page-1)}>previous</Button>
      <Select data-cy="pagination-limit-select" onChange={(e)=>setLimit(Number(e.target.value))}>
        <option data-cy="pagination-limit-6" value="6" >6</option>
        <option data-cy="pagination-limit-9" value="9" >9</option>
      </Select>
      <Button data-cy="pagination-next-button" onClick={()=>setPage(page+1)}>next</Button>
     
    </ButtonGroup>
  );
};

export default Pagination;
