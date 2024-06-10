import axios from "@/lib/axios";

const HomePage = async () => {
  const products = await axios.get("/products");
  return (
    <>
      <h1>See all products</h1>

      {products.data.map((product) => (
        <div key={product.id}>
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
        </div>
      ))}
    </>
  );
};

export default HomePage;
