import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { FormContextProvider } from "./context/FormContext";
import "./App.css";

import StomachPage from "./pages/Stomach";
import HandPage from "./pages/Hand";

const router = createBrowserRouter([
  {
    path: "/stomach",
    element: <StomachPage />,
  },
  {
    path: "/hand",
    element: <HandPage />,
  },
  {
    path: "*",
    element: <Navigate to="/stomach" replace />,
  },
]);

function App() {
  return (
    <FormContextProvider>
      <section className="h-screen flex flex-col text-center justify-between items-center py-1">
        <RouterProvider router={router} />
      </section>
    </FormContextProvider>
  );
}

export default App;
