import { useSelector } from "react-redux";

export const ProductsList = () => {
  const { items } = useSelector((state) => state.l38.products);

  return (
    <>
      <div>
        {items.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.price} $</p>

            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </>
  );
};
