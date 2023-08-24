import { RouterProvider } from "react-router-dom";

import router from "./router/router";

import "./App.css";
import Nav from "./nav";

function App() {
  return (
    <div>
      <Nav />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
