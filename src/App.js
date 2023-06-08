import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import Featured from "./components/Featured";
import New from "./components/New";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import { AuthProvider } from "./components/auth";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";
const LazyAbout = lazy(() => import("./components/About.js"));

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element=<Home /> />
        <Route
          path="about"
          element={
            <Suspense Suspense fallback="Loading...">
              <LazyAbout />
            </Suspense>
          }
        />
        <Route path="order-summary" element=<OrderSummary /> />
        <Route path="products" element=<Products />>
          <Route index element=<Featured /> />
          <Route path="featured" element=<Featured /> />
          <Route path="new" element=<New /> />
        </Route>
        <Route path="users" element=<Users />>
          <Route index element=<UserDetails /> />
          <Route path=":userId" element=<UserDetails /> />
          <Route path="admin" element=<Admin /> />
        </Route>
        <Route
          path="profile"
          element=<RequireAuth>
            <Profile />
          </RequireAuth>
        />
        <Route path="login" element=<Login /> />
        <Route path="*" element=<NoMatch /> />
      </Routes>
    </AuthProvider>
  );
}

export default App;
