import Head from "next/head";
import Navbar from "./bootstrapped_navbar";

const Layout = (props) => (
  <div>
    <Head>
      <title>ES-Vis</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/slate/bootstrap.min.css"
      />
    </Head>
    <Navbar />

    <div className="container">{props.children}</div>
  </div>
);

export default Layout;
