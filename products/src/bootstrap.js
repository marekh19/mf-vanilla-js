import faker from "faker";

export const mount = (el) => {
  const getProductName = () => faker.commerce.productName();

  const products = Array.from(
    { length: 5 },
    () => `<li>${getProductName()}</li>`,
  );

  el.innerHTML = products.join("");
};

// Context / Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which DEFINITELY has an element with an id of "products-DEV_ONLY"
if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("products-DEV_ONLY");

  // Assuming our container doesn't have an element
  // with an id of "products-DEV_ONLY"
  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}

// Context / Situation #2
// We are running this file in development OR production
// through the CONTAINER app
// NO GUARANTEE that an element with an id of 'my-products' exists
// WE DO NOT WANT try to immediately render the app
// We call the exported mount() function and call it whenever needed
