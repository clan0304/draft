'use client';

import { useCartStore } from '@/utils/store';
import { useEffect, useState } from 'react';
import { CiSquarePlus } from 'react-icons/ci';
import { CiSquareMinus } from 'react-icons/ci';
import { toast } from 'react-toastify';

const Price = ({ product }: { product: ProductType }) => {
  const { addToCart } = useCartStore();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  const totalItemPrice = product.price * quantity;

  const handleCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      img: product.img,
      price: totalItemPrice,
      quantity: quantity,
    });

    toast.success('Added to the cart successfully!');
    setQuantity(1);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex justify-center items-center gap-x-3">
        <CiSquareMinus
          size={20}
          onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
        />
        <div>{quantity}</div>
        <CiSquarePlus
          size={20}
          onClick={() => setQuantity((prev) => (prev < 30 ? prev + 1 : 30))}
        />
      </div>
      <div className="flex justify-center mt-3">
        <h3>Total: ${totalItemPrice}</h3>
      </div>
      <div className="w-full flex justify-center">
        <button
          className="bg-blue-500 text-xl font-semibold text-white mt-2 w-full mx-2 h-10 rounded-md"
          onClick={handleCart}
        >
          Add {quantity} to cart ${totalItemPrice}
        </button>
      </div>
    </div>
  );
};

export default Price;
