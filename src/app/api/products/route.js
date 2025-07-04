import products from "@/data/products";

export function GET() {
  return Response.json(products);
}
