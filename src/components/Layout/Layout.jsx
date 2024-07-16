import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../../shared/components/Loader/Loader";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
