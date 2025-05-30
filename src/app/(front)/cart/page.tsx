"use client"

import { useCartStore } from "@/lib/cart-store";
import CartList from "../component/cartList";

export default function Cart() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const items = useCartStore((state) => state.items);
  return (
    <>
      <CartList />
    </>
  );
}