'use client';

import Link from 'next/link';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/utils/store';
import { FaUserCircle } from 'react-icons/fa';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const { totalItems } = useCartStore();
  const router = useRouter();
  const { data } = useSession();

  const handleLogout = () => {
    signOut();
    router.push('/');
  };

  return (
    <nav className="bg-slate-500 fixed top-0 left-0 h-[120px] sm:h-[60px] w-full flex flex-col items-center z-10">
      <div className="h-[60px] w-full flex justify-between items-center px-5">
        <Link href="/">ABC</Link>
        <div className="flex gap-x-3">
          <Link href="/addproduct">Add Product</Link>
          <div className="flex gap-2">
            <FaShoppingCart
              onClick={() => {
                router.push('/cart');
              }}
              size={20}
            />
            {totalItems} Items
          </div>

          <div className="flex gap-x-2 items-center">
            <FaUserCircle />
            {data ? (
              <button onClick={handleLogout}>Log Out</button>
            ) : (
              <button onClick={() => router.push('/login')}>Log In</button>
            )}
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-400 flex items-center sm:hidden h-[60px]">
        <ul className="w-full flex justify-around text-lg">
          <li>Rice</li>
          <li>Noodle</li>
          <li>Chicken</li>
          <li>Drinks</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
