import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root.tsx";
import Home from "./components/mains/Home.tsx";
import Education from "./components/mains/Education.tsx";
import Experience from "./components/mains/Experience.tsx";
import Certifications from "./components/mains/Certifications.tsx";
import Achievements from "./components/mains/Achievements.tsx";
import Projects from "./components/mains/Projects.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "education", element: <Education /> },
      { path: "experience", element: <Experience /> },
      { path: "certifications", element: <Certifications /> },
      { path: "achievements", element: <Achievements /> },
      { path: "projects", element: <Projects /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
