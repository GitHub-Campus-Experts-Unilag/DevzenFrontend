import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import './App.css'
import {AppProvider} from '@/Context' //FOR ZENBOARD CONTEXT HOOK 
//import NumberBaseConverter from "./components/converters/NumberBaseConverter";

function App() {
  return (
    <div>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </div>
  )
}

export default App


