import { Outlet, ScrollRestoration } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Layout = (): React.ReactElement => {
  return (
    <div className="layout">
      <ScrollRestoration />
      <div className="layout__container">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
