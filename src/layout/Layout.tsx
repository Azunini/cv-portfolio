// import React from "react";
// import type { ReactNode } from "react";
// import Header from "../components/layout/Header";
// import Footer from "../components/layout/Footer";

// // le digo el tipo que son las props
// type LayoutProps = {
//   children: ReactNode;
// };
// // React.FC es el tipo "Function Component"
// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   return (
//     <div className="flex w-full h-full">
//       {/* Sidebar */}
//       <Header />
//       {/* Content */}
//       <main className="md:w-[calc(100%-255px)] md:ml-[255px] w-full h-auto flex flex-col justify-center items-center bg-gray-950">
//         <div className="h-auto w-full">
//           {children}
//         </div>
//         <Footer />
//       </main>
//     </div>
//   );
// };

// export default Layout;

// export default Layout;
import { Suspense } from "react";
import type { ReactNode } from "react";
import Header from "../components/layout/Header";
import HeaderSkeleton from "../skeletons/HeaderSkeleton";
import Footer from "../components/layout/Footer";
import FooterSkeleton from "../skeletons/FooterSkeleton";
type LayoutProps = {
  children: ReactNode;
};
const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex w-full h-full">
    <Suspense fallback={<HeaderSkeleton />}>
      <Header />
    </Suspense>
    <main className="md:w-[calc(100%-255px)] md:ml-[255px] w-full min-h-screen flex flex-col justify-between bg-gray-950">
      <Suspense fallback={<div className="text-center py-20">Cargando...</div>}>
        <div className="flex-grow w-full">{children}</div>
      </Suspense>
      <Suspense fallback={<FooterSkeleton />}>
        <Footer />
      </Suspense>
    </main>
  </div>
);
export default Layout;
