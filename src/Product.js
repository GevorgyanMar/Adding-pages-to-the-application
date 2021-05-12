import "./Product.css";
import React, {useContext} from "react";
import Context from "./Context";
import {useHistory} from 'react-router-dom';
function Product() {

const product = useContext(Context);

const router = useHistory();
    function goToProduct (item) {
      router.push(`/Product/${item.id}`)
    }
 return(
        <div className="all-products">
            {product.data &&   product.data.map((item)=>
                <div key={item.id} className="Product-img">
                    <img src={item.image===null?"https://martialartsplusinc.com/wp-content/uploads/2017/04/default-image-620x600.jpg":item.image}onClick={() => goToProduct(item)} />
                    <p>{item.name}</p>
                    <button className="glow-on-hover" onClick={(()=>{
                        product.setCart([...product.cart,item]);
                    })}> Add to cart </button>
                </div>
            )}
        </div>)
}

export  default Product;


