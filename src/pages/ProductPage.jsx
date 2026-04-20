import { Link, Outlet } from "react-router-dom";
import { products } from "../data/productList";

export default function ProductPage() {
  return (
    <>
      <h1>Våre produkter:</h1>
      {products.map((product) => (
        <Link to={`/products/${product.id}`}>{product.navn}</Link>
      ))}
      <Outlet />
    </>
  );
}
