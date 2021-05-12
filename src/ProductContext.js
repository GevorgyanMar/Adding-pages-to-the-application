import "./loading.css"
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

   return (
       <div className="loading">
           <div className="sk-fading-circle">
               <div className="sk-circle1 sk-circle"></div>
               <div className="sk-circle2 sk-circle"></div>
               <div className="sk-circle3 sk-circle"></div>
               <div className="sk-circle4 sk-circle"></div>
               <div className="sk-circle5 sk-circle"></div>
               <div className="sk-circle6 sk-circle"></div>
               <div className="sk-circle7 sk-circle"></div>
               <div className="sk-circle8 sk-circle"></div>
               <div className="sk-circle9 sk-circle"></div>
               <div className="sk-circle10 sk-circle"></div>
               <div className="sk-circle11 sk-circle"></div>
               <div className="sk-circle12 sk-circle"></div>
           </div>
       </div>
   );

}

export default ProductContext;

