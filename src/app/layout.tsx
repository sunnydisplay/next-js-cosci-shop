import type { Metadata } from "next";
import { Playpen_Sans } from "next/font/google";
import "./globals.css";

const playpen_sans = Playpen_Sans({
  //subsets: ['thai'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
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
        className={`${playpen_sans.className}`}
      >
        {children}
      </body>
    </html>
  );
}
