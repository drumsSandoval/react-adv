import { useState } from "react";
import { onChangeArgs, ProductInCart } from "../interfaces/interfaces";

const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: ProductInCart;
      }>({});

    const onProductCountChange = ({ count, product }: onChangeArgs) => {
        setShoppingCart((s) => {
          const productInCart: ProductInCart = s[product.id] || {
            ...product,
            count: 0,
          };
          if (Math.max(productInCart.count + count, 0) > 0) {
            productInCart.count += count;
            return {
              ...s,
              [product.id]: productInCart,
            };
          }
          const { [product.id]: toDelete, ...rest } = s;
          return { ...rest };
        });
    }; 
  return {shoppingCart, onProductCountChange};
}

export default useShoppingCart