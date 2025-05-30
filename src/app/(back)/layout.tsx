import type { Metadata } from "next";
import { K2D } from "next/font/google";
import "../globals.css";

const k2d = K2D({
  subsets: ['thai'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap', 
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "ขายสินค้าประจำปี",
};

export default function Dashboardlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${k2d.className}`}
      >
        {children}
      </body>
    </html>
  );
}
