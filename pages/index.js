import Link from "next/Link";

const Index = () => (
  <div>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
    <h1>Hello Energy System Modeller</h1>
  </div>
);

export default Index;
