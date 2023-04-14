// import { Inter } from "next/font/google";
import Header from "@components/Header";
import type { NextPage } from "next";

// const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => (
  <div>
    Home1
    {/* <Image src={TestImg} width="500" height="500" alt="test" /> */}
    <Header />
    Home2
  </div>
);

export default Home;
