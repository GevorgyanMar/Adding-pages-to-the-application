import  "./SingleProducts.css";

import {useContext} from 'react';
import {useRouteMatch} from 'react-router-dom';
import Context from "./Context";

function SingleProduct () {
    const data = useContext(Context).data;
    const productId = useRouteMatch().params.id;
    const product = data.find((item) => item.id === +productId);
return(
    <div className="MainProduct">
        <div key={product.id} className="MainSingleProduct">
            <div className="productImgage">
                <img src={product.image===null?"https://martialartsplusinc.com/wp-content/uploads/2017/04/default-image-620x600.jpg":product.image} />
            </div>
            <div className="productDescription">
                <p>{product.name}</p>
                <span>{product.description}</span>
                <div>{product.color}</div>
            </div>
            <div className="productPrice">
                <p>{product.price}</p>
                <button className="glow-on-hover">
                    Add to cart
                </button>
            </div>
        </div>
    </div>
)
}

export  default SingleProduct;