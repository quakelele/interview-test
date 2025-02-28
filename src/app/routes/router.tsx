import { createBrowserRouter } from "react-router-dom";

import { App } from "app/app";
import { Dashboard } from "pages/Dashboard";
import { Finalize } from "pages/Finalize";
import { Results } from "pages/Results";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/finalize",
        element: <Finalize />,
      },
      {
        path: "/results",
        element: <Results />,
      },
    ],
  },
]);
