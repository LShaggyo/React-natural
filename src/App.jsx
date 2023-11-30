import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import ContextProvider from "./context/UserContext";
import {fetchData} from './hooks/getData'


const App = () => {
  const { isLoad } = fetchData()

  
  return (
    <>
      <ContextProvider>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<Home isLoad={isLoad}/>}
            />
            <Route
              path="/favoritos"
              element={<Favorites />}
            />
          </Routes>
      </ContextProvider>
    </>
  );
};
export default App;
