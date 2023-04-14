import { Inter } from "next/font/google";
import type { NextPage } from "next";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  const [test, setTest] = useState(0);
  return <div>{test}</div>;
};

export default Home;
