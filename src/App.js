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

function App() {
  let routers = createBrowserRouter([
    {
      path: "",
      element: <Layout></Layout>,
      children: [
        { index: true, element: <Home></Home> },

        { path: "categories", element: <Categories></Categories> },
        { path: "login", element: <Login></Login> },
        { path: "products", element: <Products></Products> },
        { path: "register", element: <Register></Register> },
        { path: "brand", element: <Brand></Brand> },
        { path: "cart", element: <Cart></Cart> },
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
