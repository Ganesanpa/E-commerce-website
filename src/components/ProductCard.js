"use client";
import { Card, Typography, Button } from "antd";
import Link from "next/link";
import {useCart} from "@/context/CartContext";

const { Title, Text } = Typography;

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <Card
      hoverable
      cover={
        <Link href={`/product/${product.id}`}>
          <img
            alt={product.name}
            src={product.image}
            className="h-48 w-full object-cover rounded-t"
          />
        </Link>
      }
      className="w-full"
    >
      <Link href={`/product/${product.id}`}>
        <Title level={5} ellipsis>
          {product.name}
        </Title>
      </Link>
      <Text strong className="block text-green-600 mb-2">
        ₹{product.price}
      </Text>

      <Button
        type="primary"
        block
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </Button>
    </Card>
  );
}
