
'use client'

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useCartStore } from "@/lib/cart-store";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CartList() {
    const router = useRouter();

    const items = useCartStore((state) => state.items);
    const removeItem = useCartStore((state) => state.removeItem);
    const clearCart = useCartStore((state) => state.clearCart);
    const totalPrice = useCartStore((state) => state.totalPrice());

    if (items.length == 0) {
        return <div className="text-center mt-20 text-xl text-emerald-500">ตระกร้าสินค้าว่างเปล่า</div>
    }

  return (
    <div className="mx-auto max-w-4xl mt-20">
      <h1 className="text-xl mb-4"> ตระกร้าสินค้า </h1>
      <Table>
        <TableHeader>
            <TableRow>
                <TableHead>รหัสสินค้า</TableHead>
                <TableHead>ชื่อสินค้า</TableHead>
                <TableHead>ราคา</TableHead>
                <TableHead>จำนวน</TableHead>
                <TableHead>รวม</TableHead>
                <TableHead>นำสินค้าออก</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                items.map((i) => (
                    <TableRow key={i.productId}>
                        <TableCell>{i.productId}</TableCell>
                        <TableCell>{i.title}</TableCell>
                        <TableCell>{i.price}</TableCell>
                        <TableCell>{i.qty}</TableCell>
                        <TableCell>{(i.price*i.qty).toFixed(2)}</TableCell>
                        <TableCell>
                            <Button variant="ghost" onClick={() => { removeItem(i.productId)}}>
                                <Trash />
                            </Button>
                        </TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
      </Table>

      <div className="text-right mt-4">
        <div className="font-bold mb-4">
            Total : {totalPrice}
        </div>
        <Button variant="outline" className="bg-rose-500" onClick={() => {clearCart(); } }> Clear cart </Button>
      <Button className="ml-2 bg-emerald-400 text-gray-950" onClick={() => {
        clearCart(); 
        router.replace('/product')
        }}> Check out! </Button>
      </div>
      
    </div>
  );
}