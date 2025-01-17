import React from "react";
import Navbar from "../widgets/topNavBar";
import Footer from "../widgets/footer";
import SearchWidget from "../widgets/search";
import { CartProvider } from "@/context/cartContext";

type Props = {
  children: React.ReactNode;
};

function MainLayout(props: Props) {
  return (
    <CartProvider>
      <div className="">
        {/* header */}
        <header>
          {/* top nav bar */}
          <div className="px-3 md:px-10">
            <Navbar />
          </div>

          {/* search  */}
          <div className="px-0 md:px-10">
            <SearchWidget />
          </div>
        </header>

        {/* main-content */}
        <div>{props.children}</div>

        {/* footer */}
        <Footer />
      </div>
    </CartProvider>
  );
}

export default MainLayout;
