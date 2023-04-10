import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import Login from "./pages/Login";
import Users from "./pages/Users";
import PrivateRoute from "./routes/PrivateRoute";
import Products from "./pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute page={<Login />} />,
  },
  {
    path: "/admin/users",
    element: <PrivateRoute page={<Users />} />,
  },
  {
    path: "/admin/products",
    element: <PrivateRoute page={<Products />} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
