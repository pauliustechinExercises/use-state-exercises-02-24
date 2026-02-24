import { useState } from "react";
import { products } from "../data/shoppingCart";

const ShoppingCart = () => {
  const [cart, setCart] = useState({
    count: 0,
    price: 0,
  });

  const handleAddToCart = (e) => {

    const currentProductId = Number(e.target.id);

    products.forEach((product) => {
      if (product.id === currentProductId) {
        setCart({
          ...cart,
          count: cart.count + 1,
          price: cart.price + product.price
        });
      }
    });
  };

  return (
    <div className="tail_div">
      <p className="font-bold">**Exercise 13: Shopping Cart**</p>
      <hr />
      <p>
        Build a component where: - A list of products is displayed with "Add to
        Cart" buttons. - Clicking a button adds the product to a shopping cart.
        - The cart displays the total number of items and the total cost.
      </p>
      <hr />
      <p className="font-bold pb-5">Solution:</p>
      <div className="grid grid-cols-3 gap-10 justify-items-center">
        {products.map((product) => {
          return (
            <div className="border w-60 rounded" key={product.id}>
              <p className="font-bold ">{product.name}</p>
              <p className="text-sm">{product.description}</p>
              <p className="text-green-500 font-bold">{product.price + "$"}</p>
              <hr />
              <button id={product.id}  onClick={handleAddToCart} className="m-2">
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <p className="font-bold">Cart</p>
        <p>Items: {cart.count} pcs</p>
        <p>Price: {cart.price}$</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
