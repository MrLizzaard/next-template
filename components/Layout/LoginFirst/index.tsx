import { useSession } from "next-auth/react";
import React from "react";
import Login from "@pages/login";
import Layout from "..";

const LoginFirst = () => {
  const { status } = useSession();
  return (
    <>
      {status === "loading" && <div>로딩중</div>}
      {status === "unauthenticated" && <Login />}
      {status === "authenticated" && <Layout>메인화면</Layout>}
    </>
  );
};

export default LoginFirst;
