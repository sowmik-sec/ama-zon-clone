import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import Shipping from "./components/Shipping/Shipping";
import Shop from "./components/Shop/Shop";
import SignUp from "./components/SignUp/SignUp";
import Main from "./layouts/Main";
import { productsAndCartLoader } from "./loaders/ProductsAndCartLoader";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Shop />,
        },
        {
          path: "/orders",
          loader: productsAndCartLoader,
          element: <Orders />,
        },
        {
          path: "/inventory",
          element: (
            <PrivateRoute>
              <Inventory />
            </PrivateRoute>
          ),
        },
        { path: "/about", element: <About /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <SignUp /> },
        {
          path: "/shipping",
          element: (
            <PrivateRoute>
              <Shipping />
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
