import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import db from "@/db";
import { products } from "@/db/schema";
import { desc } from "drizzle-orm";
import { ChevronRight } from "lucide-react";


const Product = async () => {
  const productss = await db.query.products.findMany({orderBy:[desc(products.id)]});

  return (
    <div className="max-w-screen-xl mx-auto py-16 px-6 xl:px-0">


      {/* <p>{JSON.stringify(productss)}</p> */}
      
      <div className="flex items-end justify-between">
        <h2 className="text-3xl font-bold tracking-tight">รายการสินค้า</h2>
        <Select defaultValue="recommended">
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recommended">Recommended</SelectItem>
            <SelectItem value="latest">Latest</SelectItem>
            <SelectItem value="popular">Popular</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {productss.map((i) => (
          <Card key={i.id} className="shadow-none overflow-hidden rounded-md">
            <CardHeader className="p-0">
              <div className="aspect-video bg-muted w-full border-b" />
            </CardHeader>
            <CardContent className="py-6">
              <div className="flex items-center gap-3">
                <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none">
                  {i.price}
                </Badge>
                <span className="font-medium text-xs text-muted-foreground">
                  เหลือ 19 ชิ้น
                </span>
              </div>

              <h3 className="mt-4 text-[1.35rem] font-semibold tracking-tight">
                {i.title}
              </h3>
              <p className="mt-2 text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>

              <Button className="mt-6 shadow-none">
                หยิบใส่ตระกร้า <ChevronRight />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Product;
