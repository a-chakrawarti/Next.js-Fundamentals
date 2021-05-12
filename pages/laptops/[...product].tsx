// Catch all the routes,

// wrapping the file name again in [] will cover the base page as well
// but will rerurn an empty object for query
import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();

  console.log(router.query); // returns a object with a
  // key, product having the [] with URL segments in it.
  return <div>This is the product page</div>;
};

export default Product;
