import Fetch from "isomorphic-unfetch";
import Layout from "../components/layout";

import Prices from "../components/Prices";

const BitCoin = (props) => (
  <Layout>
    <div>
      <h1>BitCoin Rate</h1>

      <Prices bpi={props.bpi} />
    </div>
  </Layout>
);

// Example interaction with an API
BitCoin.getInitialProps = async function () {
  const resp = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");

  const data = await resp.json();

  return {
    bpi: data.bpi,
  };
};

export default BitCoin;
