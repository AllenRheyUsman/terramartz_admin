import prismadb from "@/lib/prismadb";
import { ProductClient } from "./components/client";
import { ProductColumn } from "./components/columns";
import {format} from "date-fns";
import { formatter } from "@/lib/utils";

const ProductsPage = async ({
    params
  }: {
    params: { storeId: string };
  }) => {
    const products = await prismadb.product.findMany({
      where: {
        storeId: params.storeId
      },
      include: {
        category: true,
        size: true,
        color: true,
        description: true,
      },
      orderBy: {
        createdAt: 'desc'
      },
    });
  
    const formattedProducts: ProductColumn[] = products.map((item) => ({
      id: item.id,
      name: item.name,
      desc: item.desc,
      isFeatured: item.isFeatured,
      isArchived: item.isArchived,
      price: formatter.format(item.price),
      compareAtPrice: formatter.format(item.compareAtPrice),
      category: item.category ? item.category.name : 'No Category',
      size: item.size ? item.size.name : 'No Size',
      color: item.color ? item.color.value : 'No Color',
      description: item.description ? item.description.value : 'No Description',
      createdAt: format(item.createdAt, "MMMM do, yyy"),
    }));
  
    return (
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <ProductClient data={formattedProducts} />
        </div>
      </div>
    );
  };
  
  export default ProductsPage;
  