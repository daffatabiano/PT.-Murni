import { useRoutes, Outlet } from 'react-router-dom';
import {routeLists as lists} from "./routes";

function App() {
  const element = useRoutes(lists)

  return element || <Outlet />;
}

export default App
