In the previous lesson, we learned how to work with React-Router and Context. Using that knowledge you need to make the following changes.
Create 4 distinct pages:


1. Product list page (/products)
    On this page, you need to fetch all the products from the JSON (file is attached) and show them in the UI. You need to show the name and image for each item. Also, each item should have a button with the text Add to cart. Clicking on this button the item will be added to the cart.
2. Single product page (/product/:id)
    When the user clicks on one of the items from the previous page, s/he is routed to the page of that particular item. On this page, all the information for that item has to be displayed. Also, a button with Add to cart text on it has to be present on the page. Clicking on this button will add the item to the cart.
3. Cart page (/cart)
    Create a separate page for the "Cart" you have created in the previous homework assignment. Products are added to the cart when the user clicks the Add To Cart button from the Product List and Single product pages.
4. Page not found (/404)
    In addition to the above pages, all the other routes should be redirected to the  Page Not Found page.


--------------------------------------------------------------------------
Also, create a Header and put a list of links(/products, /cart) for all the routes.

In case the image of the product is missing just display the default image provided in the link.
NOTE! When the application initially starts, the cart has to be empty. All the data has to be shared between components via context.