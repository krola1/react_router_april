import { useParams } from "react-router-dom";
import { products } from "../data/productList";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  if (!product) return <h3>Ingen produkter med den id'en funnet</h3>;

  return (
    <>
      <h3>Details</h3>
      <h3>{product.navn}</h3>

      <p>{product.description}</p>
      <p>Pris: {product.pris},-</p>
    </>
  );
}
