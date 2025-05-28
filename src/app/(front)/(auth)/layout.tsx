import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "../globals.css";
import Navbar01Page from "@/components/navbar-01/navbar-01";

const syne = Syne({
  //subsets: ['thai'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap', 
});

export const metadata: Metadata = {
  title: "เข้าสู่ระบบ",
  description: "ขายสินค้าประจำปี",
};

export default function Authlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.className}`}
      >
        <Navbar01Page/>
        {children}
      </body>
    </html>
  );
}
