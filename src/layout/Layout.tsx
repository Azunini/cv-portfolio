import React from "react";
import type { ReactNode } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// le digo el tipo que son las props
type LayoutProps = {
  children: ReactNode;
};
// React.FC es el tipo "Function Component"
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex w-full h-full">
      {/* Sidebar */}
      <Header />
      {/* Content */}
      <main
        className="flex flex-col justify-center items-center bg-gray-950 
        lg:ml-[255px] lg:w-[calc(100%-255px)] w-full min-h-screen transition-all duration-300"
      >
        <div id="child-section" className="w-full h-auto">{children}</div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
