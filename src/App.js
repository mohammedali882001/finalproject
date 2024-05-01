import logo from "./logo.svg";
import "./App.css";
import Layout from "./Components/Layout/Layout";

import Home from "./Components/Home/Home";

import Categories from "./Components/Categories/Categories";
import Login from "./Components/Login/Login";
import Products from "./Components/Products/Products";
import Register from "./Components/Register/Register";
import Brand from "./Components/Brand/Brand";
import Cart from "./Components/Cart/Cart";

import NotFound from "./Components/NotFound/NotFound";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

function App() {
  const [userData, setUserData] = useState(null);
  let SaveUserData = () => {
    let encodedToken = localStorage.getItem("userToken");
    let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
  };
  let routers = createBrowserRouter([
    {
      path: "",
      element: <Layout setUserData={setUserData} userData={userData}></Layout>,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Home></Home>
            </ProtectedRoute>
          ),
        },

        {
          path: "categories",
          element: (
            <ProtectedRoute>
              <Categories></Categories>
            </ProtectedRoute>
          ),
        },
        { path: "login", element: <Login SaveUserData={SaveUserData}></Login> },
        {
          path: "products",
          element: (
            <ProtectedRoute>
              <Products></Products>
            </ProtectedRoute>
          ),
        },
        { path: "register", element: <Register></Register> },
        {
          path: "brand",
          element: (
            <ProtectedRoute>
              <Brand></Brand>
            </ProtectedRoute>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Cart></Cart>
            </ProtectedRoute>
          ),
        },
        { path: "*", element: <NotFound></NotFound> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
