import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout  from "./components/layout";
import Home from "./routes/home";
import Login from "./routes/login";
import Join from "./routes/join";
import GlobalStyles from "./styles/GlobalStyle";
import GlobalFont from "./styles/GlobalFont";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loading-screen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>, 
    children: [ //로그인한 사용자만 접근
      {
        path: "",
        element: <Home/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/join",
    element: <Join/>
  }
]);

function App() {
  const [isLoading, setLoading] = useState(true);
  const init = async() => {
    //firebase가 유저 정보를 보낼 때 보여질 로딩 화면
    setLoading(false);
  };
  useEffect(()=>{
    init();
  },[]); //두 번째 parameter로 빈 배열 -> 처음 마운트될 때만 실행
  return (
    <>
      <GlobalStyles />
      <GlobalFont />
      {isLoading ? <LoadingScreen/> : <RouterProvider router={router}/>}
    </>
  )
}

export default App
