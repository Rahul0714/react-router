import React from "react";
import { Link, Outlet } from "react-router-dom";
function Products() {
  return (
    <>
      <nav className="secondary-nav">
        <Link to="featured">Featured Products</Link>
        <Link to="new">New Products</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Products;
