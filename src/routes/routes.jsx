import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import HomePage from "../pages/HomePage";
import TrainersPage from "../pages/TrainersPage";

export const routes = createBrowserRouter([
  {
    path: "/gym-pool-website",element:<MainLayouts/>,children:[
      {index:true,element:<HomePage/>},
      {path:"trainers", element:<TrainersPage/>}
    ]
    
  }
]);