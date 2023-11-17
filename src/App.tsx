import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, RouterProvider, createHashRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Avisos from "./pages/avisos/Avisos";
import Home from "./pages/home/Home";
import Locais from "./pages/locais/Locais";
import Login from "./pages/login/Login";
import Sensor from "./pages/sensors/Sensor";
import SingleSensor from "./pages/singleSensor/SingleSensor";
import "./styles/global.scss";

const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/sensor",
          element: <Sensor />,
        },
        //rota para exibir as informações de cada sensor pelo ID
        {
          path: "/sensores/:id",
          element: <SingleSensor />,
        },
        {
          path: "/locais",
          element: <Locais />,
        },
        {
          path: "/avisos",
          element: <Avisos />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
