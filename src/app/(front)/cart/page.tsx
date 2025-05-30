"use client"

import { useCartStore } from "@/lib/cart-store";
import CartList from "../component/cartList";

export default function Cart() {
  const items = useCartStore((state) => state.items);
  return (
    <>
      <CartList />
    </>
  );
}