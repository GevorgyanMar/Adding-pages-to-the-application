import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import Cart from "./Cart";
import NotFound from "./NotFound";
import Product from "./Product";
import SingleProduct from './SingleProduct'


export default function ParamsExample() {
    return (
        <Router>
                <ul>
                    <li>
                        <NavLink exact  to="/Products" activeClassName="activ">Product</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Cart" activeClassName="activ">Cart</NavLink>
                    </li>
                </ul>

            <Switch>
                <Route  exact path="/">
                    <Product/>
                </Route>
                <Route path="/Cart">
                    <Cart/>
                </Route>
                <Route path="/Products">
                    <Product/>
                </Route>
                <Route path = '/product/:id'>
                    <SingleProduct />
                </Route>
                <Route path='*'>
                    <NotFound/>
                </Route>
            </Switch>

        </Router>
    );
}
