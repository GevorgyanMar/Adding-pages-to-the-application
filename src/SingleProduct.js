import  "./SingleProducts.css";
import React, {useContext} from 'react';
import {useRouteMatch} from 'react-router-dom';
import Context from "./Context";

function SingleProduct () {
    const data = useContext(Context);
    const productId = useRouteMatch().params.id;
    const product = data.data.find((item) => item.id === +productId);
return(
    <div className="MainProduct">
        <div key={product.id} className="MainSingleProduct">
            <div className="productImgage">
                <img src={product.image===null?"https://martialartsplusinc.com/wp-content/uploads/2017/04/default-image-620x600.jpg":product.image} />
            </div>
            <div className="productDescription">
                <p>{product.name}</p>
                <span>{product.description}</span>
                <div className="productColor" style={{backgroundColor:product.color}}></div>
            </div>
            <div className="productPrice">
                <p>{product.price}</p>
                <button className="glow-on-hover" onClick={(()=>{
                    data.setCart([...data.cart, product]);
                })}> Add to cart </button>
            </div>
        </div>
    </div>
)
}

export  default SingleProduct;