import Home from "./component/pages/Home";
import Navbar from "./component/feature/Navbar";
import { Route, Routes } from "react-router-dom";
import UrlList from "./component/pages/UrlList";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/url-list" element={<UrlList></UrlList>}></Route>
        {/* <Route path="/set-url" element={<Home></Home>}></Route> */}
        <Route
          path="*"
          element={<p className="text-center pt-2 text-red-500">Not Found</p>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
