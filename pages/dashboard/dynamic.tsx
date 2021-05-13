import { GetStaticProps } from "next";

// Executes on server, value is rendered on the back-end and sent to client
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    // Builds the page with static data, revaliate tries to re-create the
    // page after 10 seconds (useful in updating page which is updated with new data
    // less frequently). works only in production.
    revalidate: 10,
    props: {
      myFavNum: 5,
    },
  };
};

// Executed on both client & server, renders in client
const Dynamic = (props) => {
  return <div>Dynamic = {props.myFavNum}</div>;
};

export default Dynamic;
