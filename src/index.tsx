import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import "./index.sass";

import works from "./data/works.json";
import skills from "./data/skills.json";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import About from "./pages/About";
import Error from "./pages/Error";

import { consolidateWorks, findWork, ParamsTypes } from "./utils/works";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/projects",
        element: <Projects />,
        loader: () => consolidateWorks(works, skills)
      },
      {
        path: "/projects/:id",
        element: <Project />,
        loader: ({ params }: { params: ParamsTypes }) =>
          findWork(params, works, skills)
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
