import React from "react";
import Navbar from "../widgets/topNavBar";
import Footer from "../widgets/footer";
import SearchWidget from "../widgets/search";

type Props = {
  children: React.ReactNode;
};

function MainLayout(props: Props) {
  return (
    <div>
      {/* top-nav-bar */}
      <div className="mx-10">
        <Navbar />
      </div>
      {/* search  */}
      <SearchWidget />
      {/* main-content */}
      <div>{props.children}</div>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default MainLayout;
