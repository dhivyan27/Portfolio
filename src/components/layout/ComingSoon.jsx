// ComingSoon.jsx
import Head from "next/head";
import { Layout2 } from "../components/layout";

const ComingSoon = () => {
  return (
    <Layout2>
      <Head>
        <title>Coming Soon - Bieber - React Personal Portfolio Template</title>
      </Head>

      {/* Start Coming Soon Section */}
      <section className="coming-soon-section pt-24 lg:pt-28 xl:pt-32">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold uppercase">Coming Soon</h1>
        </div>
      </section>
      {/* End Coming Soon Section */}

      <span className="block pb-24 lg:pb-28 xl:pb-32"></span>
    </Layout2>
  );
};

export default ComingSoon;
