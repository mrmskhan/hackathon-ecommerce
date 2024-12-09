import Image from "next/image";

const products = [
  {
    title: "Library Stool Chair",
    price: "$20",
    oldPrice: "",
    image: "/our-product3.png",
  },

  {
    title: "Library Stool Chair",
    price: "$20",
    oldPrice: "",
    image: "/pop-img3.png",
  },

  {
    title: "Library Stool Chair",
    price: "$20",
    oldPrice: "$30",
    image: "/topCat3.png",
  },

  {
    title: "Library Stool Chair",
    price: "$20",
    oldPrice: "",
    image: "/feature3.png",
  },

  {
    title: "Library Stool Chair",
    price: "$20",
    oldPrice: "",
    image: "/our-product1.png",
  },
];

const ProductBox = ({ product }: { product: any }) => (
<div>
  <div className="group shadow-md bg-neutral-100 w-[220px] h-[220px] flex justify-center items-center relative cursor-pointer">
    <Image src={product.image} width={220} height={100} alt={product.title} />
  </div>
  <div className="flex items-center justify-between pt-4">  {/* Flex row for h1 and span */}
    <h1 className="font-bold font-sans">{product.title}</h1>
    <div className="flex items-center gap-4"> {/* Price and oldPrice side by side */}
      <span className="text-gray-800 font-bold">{product.price}</span>
      {product.oldPrice && (
        <span className="text-gray-400 font-bold line-through">{product.oldPrice}</span>
      )}
    </div>
  </div>
</div>

);

const Products = () => {
  return (
    <main>
      <div className="w-full flex justify-center items-center mt-16 mb-32">
        <div className="w-[80%]">
          <div className="flex flex-col">
            <div>
            <h1 className="w-full text-gray-800 font-bold text-left sm:text-md md:text-3xl lg:text-3xl pt-4 pb-10 tracking-widest">
  Featured Products
</h1>
            </div>
          </div>
          <div className="flex justify-start gap-x-5 mt-5">
            {products.map((product, index) => (
              <ProductBox key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
