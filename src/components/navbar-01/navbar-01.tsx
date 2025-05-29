import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import Link from "next/link";
import { ShoppingBasket } from "lucide-react";
import { Badge } from "../ui/badge";
import CountCartItem from "@/app/(front)/component/CountCartItem";

const Navbar01Page = () => {
  return (
    <div className="bg-muted">
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
          
          <Link href="/cart">
            <Badge className="p-2 text-sm">
              <ShoppingBasket />
              <CountCartItem/> item (s) 
            </Badge> 
          </Link>
          
            <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link href="/login">เข้าสู่ระบบ</Link>

            </Button>
            <Button asChild>
            <Link href="/signup">สมัครสมาชิก</Link>
            </Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar01Page;
