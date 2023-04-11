import { getShoppingCart } from "../utilities/fakedb";

const jobsCart = async () => {
  const loadCart = await fetch("Featured.json");
  const cart = await loadCart.json();

  const StoredCart = getShoppingCart();
  const saveCart = [];
  for (const id in StoredCart) {
    const addedCart = cart.find((s) => s.id === id);
    if (addedCart) {
      const quantity = addedCart[id];
      addedCart.quantity = quantity;
      saveCart.push(addedCart);
    }
  }
  return saveCart;
};

export default jobsCart;
