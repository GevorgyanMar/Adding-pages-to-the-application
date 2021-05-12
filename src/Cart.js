import React, {useContext} from "react";
import Context from "./Context";

function Cart() {
    const product = useContext(Context);

return(
    <div className="cart">
        {product.cart &&   product.cart.map((item)=>
            <div key={item.id} className="Product-img">
                <img src={item.image===null?"https://martialartsplusinc.com/wp-content/uploads/2017/04/default-image-620x600.jpg":item.image} />
                <p>{item.name}</p>

                <button onClick={((id)=>{
                    debugger
                    product.setCart(product.cart.filter((i) => i.id !== item.id))
                })}>Remove
                </button>
            </div>
        )}
    </div>
)

}

export  default Cart;

