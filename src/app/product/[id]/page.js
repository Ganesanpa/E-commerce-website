import products from "@/data/products";
import { notFound } from "next/navigation";
import { Button } from "antd";
import Link from "next/link";
import DetailSkeleton from "@/components/DetailSkeleton";

export  default function ProductPage({ params }) {
  const { id } =  params;
  const loading=false;
 new Promise((res)=>setTimeout(res,1000));

  if(loading)return <DetailSkeleton/>
  const product = products.find((p) => p.id.toString() === id);
  if (!product) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover rounded-xl"
        />

        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-500 mb-4 capitalize">{product.category}</p>
          <p className="text-xl font-semibold text-teal-600 mb-4">
            ₹{product.price}
          </p>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            vitae justo quis nisi consequat.
          </p>
          <Button type="primary" size="large">
            Add to Cart
          </Button>
          <Link href="/">
            <Button type="link" className="ml-4">
              ← Back to products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
