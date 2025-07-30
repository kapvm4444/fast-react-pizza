import React from "react";
import Header from "./Header.jsx";
import CartOverview from "../features/cart/CartOverview.jsx";
import { Outlet } from "react-router-dom";

export default function AppLayout(props) {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </>
  );
}
