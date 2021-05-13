import { GetServerSideProps } from "next";

// Is called always, on every page req, even on production, avoid if you can
// will not create a static page and save it locally making getStaticProps useless.

// Adds a layer of dynamic rendering on the react framwork, thats what we wanted,
// essense of server side rendering, calling a node server on every request,
// no caching benefits, req will be slower as it has to fetch data from server.
// would lose benefits of static optimization.

// Useful in real-time dashboard
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      myFavNum: Math.random(),
    },
  };
};

const Account = (props) => {
  return <div>Account = {props.myFavNum}</div>;
};

export default Account;
