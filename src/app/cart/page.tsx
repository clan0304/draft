'use client';

import { useCartStore } from '@/utils/store';
import Image from 'next/image';
import { useEffect } from 'react';
import { IoIosClose } from 'react-icons/io';

const Cart = () => {
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return (
    <div className="flex w-full m-10">
      <div className="flex w-2/5 flex-col gap-y-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex gap-x-2 items-center justify-between"
          >
            <div className="relative w-[40px] h-[40px] sm:w-[80px] sm:h-[80px]">
              <Image fill objectFit="contain" src={product.img} alt="Image" />
            </div>
            <div className="flex gap-x-3 justify-between items-center h-[40px]">
              <h1 className="text-md sm:text-l">{product.title}</h1>
              <h2 className="text-md sm:text-l">X{product.quantity}</h2>
            </div>
            <IoIosClose size={30} onClick={() => removeFromCart(product)} />
          </div>
        ))}
      </div>
      <div className="w-1/5"></div>
      <div className="flex w-2/5 items-center">
        <div>
          <span>Total {totalItems} items</span>
          <span>$ {totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
