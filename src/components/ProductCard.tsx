import { FC } from "react";

import Link from "next/link";

import { Product } from "./AllProducts";

type ProductCardProps = {
  product: Product;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <li>
      <Link href={`/products/${product.id}`}>
        <div className="w-20">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full"
          />
        </div>

        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </Link>
    </li>
  );
};

export default ProductCard;
