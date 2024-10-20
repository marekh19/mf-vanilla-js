import { mount as productsMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";

console.debug("Container!");

// NOTE: These ids cannot have the same name as the remote app
// Because the remote app is stored in a global variable in the browser
// It then becomes overwritten by this element with the id
productsMount(document.getElementById("my-products"));
cartMount(document.getElementById("my-cart"));
