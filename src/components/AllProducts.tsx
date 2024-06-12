import ProductCard from "./ProductCard";

import axios from "@/lib/axios";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

const AllProducts = async () => {
  const products = await axios.get("/products");
  return (
    <section className="all-products">
      <ul>
        {products.data.map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ul>
    </section>
  );
};

export type { Product };

export default AllProducts;
