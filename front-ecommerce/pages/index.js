import Header from "@/components/Header";
import Featured from "@/components/Featured";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";

export default function Home() {
  return (
    <div>
      <Header />
      <Featured />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "68b30cad7cc576ea597385d3";

  await mongooseConnect();

  const product = await Product.findById(featuredProductId);

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}