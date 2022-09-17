import React, { useEffect, useState } from "react";

import "./product.css"

const Product = ({ele}) => {
 console.log(ele);
return (
   
  <table className="table">
              <thead>
                <tr>
                  <th>Avatar</th>
                  <th>First_name</th>
                  <th>Last_name</th>
                  <th>Email</th>
                  
                  
                </tr>
              </thead>
              <tbody className="tbody" >
                
                     <tr className="row">
                     <td className="avatar"> <img  src={ele.avatar}/></td>
                     <td className="first_name">{ele.first_name}</td>
                     <td className="last_name">{ele.last_name}</td>
                       <td className="department">{ele.email}</td>
                   </tr>
    
                
               
              </tbody>
            </table>
 
  );
};

export default Product;
