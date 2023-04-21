import React from "react";
import Layout from "@/components/Layout";
import type { NextPage } from "next";

import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { status } = useSession();

  // 여기서 NEXT AUTH 처리하기
  return (
    <>
      {status === "loading" && <div>로딩중</div>}
      {status === "authenticated" && <div>로그인화면</div>}
      {status === "unauthenticated" && <Layout>메인화면</Layout>}
    </>
  );
};

export default Home;
