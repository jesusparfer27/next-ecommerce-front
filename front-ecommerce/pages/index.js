import Header from "@/components/Header";
import Featured from "@/components/Featured";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import NewProducts from "@/components/NewProduct";

export default function Home({product, products}) { 
  return (
    <div>
      <Header />
      <Featured product={product} /> 
      <NewProducts products={products} />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "68b30cad7cc576ea597385d3";

  await mongooseConnect();

  const product = await Product.findById(featuredProductId);
  const products = await Product.find({}, null, {sort: {'_id': -1}, limit: 10}); 


  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}