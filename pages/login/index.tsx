import { signIn } from "next-auth/react";
import React from "react";

const Login = () => {
  const onClickButton = async () => {
    await signIn();
  };
  return (
    <div>
      <button type="button" onClick={onClickButton}>
        로그인
      </button>
    </div>
  );
};

export default Login;
