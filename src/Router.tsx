import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import About from "./screens/About";

function Router() {
  /*
    1) BrowserRouter 
    - 이용할때 Routes, Route 컴포넌트 이용하여 해당 경로를 보고 사용자에게 컴포넌트를 보여 줄 수 있다.
    - React Router Dom V5 사용법 비슷하다.
    - Switch 대신에 Routes 컴포넌트 이용한다.
    - BrowserRouter 사용법은 구식 버전이다. 사용하는 사람도 많지만 요즘 createBrowserRouter 많이 사용한다!
    */
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
