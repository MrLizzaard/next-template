import { ReactNode } from "react";
import Header from "./Header";
import Aside from "./Aside";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Aside />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
