
import { createRoot } from "react-dom/client";
import 'styles/common.module.scss'
import { router } from "app/routes/router";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
