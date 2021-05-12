import { useRouter } from "next/router";

const Model = () => {
  // In production, it will not work for the first time
  // The reason being, without prefetching condition, query object is empty
  // Prefetching: getServerSideProps, getStaticProps
  const router = useRouter();
  const {
    query: { brand, model },
  } = router;
  //   console.log(brand, model);

  const goBackHome = () => {
    // push home to stack of history
    // router.push("/");
    // would replace that particular page from stack history altogether
    // Try to use link component as much as possible, good for SEO, accessibility
    router.replace("/");
  };
  return (
    <div>
      <h3>Brand: {brand}</h3>
      <p>Model: {model}</p>
      <button onClick={goBackHome}>Home</button>
    </div>
  );
};

export default Model;
