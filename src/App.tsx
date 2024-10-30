import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import './App.css'

//import NumberBaseConverter from "./components/converters/NumberBaseConverter";
//import MarkdownFormatter from "./components/converters/MarkdownFormatter";
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

{/*  */}

export default App


