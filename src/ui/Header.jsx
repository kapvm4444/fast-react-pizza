import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "./SearchOrder.jsx";

export default function Header() {
  return (
    <>
      <header>
        <Link to={"/"}>Fast React Pizza Co. </Link>
        <SearchOrder />
      </header>
    </>
  );
}
