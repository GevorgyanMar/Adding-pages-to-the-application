
import React, {useEffect, useState} from "react";
import  Context from "./Context";

function ProductContext(props) {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const getData = () => {
        fetch('Product.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson);
            });
    }
    useEffect(() => {
        getData()
    }, [])


   if(data && data.length>0 && data!==undefined){
       return (
           <Context.Provider value={{data,cart,setCart}}>
               {props.children}
           </Context.Provider>
       )
   }

   return 1;

}

export default ProductContext;

