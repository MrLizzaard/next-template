import type { NextPage } from "next";
import LoginFirst from "@components/Layout/LoginFirst";
import PageFirst from "@components/Layout/PageFirst";

const Home: NextPage = () => {
  // 여기서 NEXT AUTH 처리하기
  return (
    <>
      {process.env.NEXT_PUBLIC_PAGE_TYPE === "pagefirst" && <PageFirst />}
      {process.env.NEXT_PUBLIC_PAGE_TYPE === "loginfirst" && <LoginFirst />}
    </>
  );
};

export default Home;
