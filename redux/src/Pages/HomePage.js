import React from "react";
import TabProducts from "./TabProducts"
import TabUsers from "./TabUsers"

function HomePage() {
  return (
    <>
     <TabUsers />
     <TabProducts />
    </>
  );
}

export default HomePage;