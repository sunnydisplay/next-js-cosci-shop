import type { Metadata } from "next";
import { K2D } from "next/font/google";
import "../globals.css";
import Navbar01Page from "@/components/navbar-01/navbar-01";

const k2d = K2D({
  subsets: ['thai'],
  weight: ['300',],
  display: 'swap', 
});

export const metadata: Metadata = {
  title: "Cosci  shop",
  description: "ขายสินค้าประจำปี",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${k2d.className}`}
      >
        <Navbar01Page/>
        {children}
      </body>
    </html>
  );
}
