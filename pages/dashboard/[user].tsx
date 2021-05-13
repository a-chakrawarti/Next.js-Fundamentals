// Inside a dynamic page (wrapped with []), with getStaticProps you will
// have to use getStaticPaths (specifies when getStaticProps should run)

import { GetStaticPaths, GetStaticProps } from "next";

import { Router, useRouter } from "next/router";

// getStaticProps runs at BUILD TIME. It does NOT run at RUNTIME.
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    revalidate: 10,
    props: {
      myFavNum: Math.random(),
    },
  };
};

// When fallback is false, on the segements in path will be accessible
// rest will give 404 despite [user] being dynamic, runs at build time

// If fallback is true, it will be dynamic but will not generate a static
// file for rest except the paths, calls getStaticProps on the server, render the page,
// and Next.js will store the dynamic path locally for faster access.

// If set fallback to true, it will not wait for the props to generate and will render
// without it. To handle, useRouter provides a method isFallback to check if the props
// are generated or not.
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { user: "anupam" },
      },
      {
        params: { user: "shahrukh" },
      },
    ],
    // fallback: false,
    fallback: true,
  };
};

// Executed on both client & server, renders in client
const User = (props) => {
  const router = useRouter();
  console.log(router);

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      User: {router.query.user} = {props.myFavNum}
    </div>
  );
};

export default User;
