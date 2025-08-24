import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import HomePage from "../pages/HomePage";
import TrainersPage from "../pages/TrainersPage";
import LocationsPage from "../pages/LocationsPage";
import GymPage from "../pages/GymPage";
import BoxingPage from "../pages/BoxingPage";
import StudiosPage from "../pages/StudiosPage";
import PilatesPage from "../pages/PilatesPage";
import AquaZonePage from "../pages/AquaZonePage";
import SpaPage from "../pages/SpaPage";
import TableTennisPage from "../pages/TableTennisPage";
import ClubCardsPage from "../pages/ClubCardsPage";
import OneTimeVisitPage from "../pages/OneTimeVisitPage";
import SchedulePage from "../pages/SchedulePage";
import KidsClubPage from "../pages/KidsClubPage";
import PrimeCafePage from "../pages/PrimeCafePage";

export const routes = createBrowserRouter([
  {
    path: "/gym-pool-website",element:<MainLayouts/>,
    children:[
      { index:true,element:<HomePage/> },
      { path:"trainers", element:<TrainersPage/> },
      { path: "locations", element: <LocationsPage /> },
      { path: "gym", element: <GymPage /> }, 
      { path: "boxing", element: <BoxingPage /> }, 
      { path: "studios", element: <StudiosPage /> }, 
      { path: "pilates", element: <PilatesPage /> }, 
      { path: "aquazone", element: <AquaZonePage /> }, 
      { path: "spa", element: <SpaPage /> },
      { path: "table-tennis", element: <TableTennisPage /> },
      { path: "club-cards", element: <ClubCardsPage /> }, 
      { path: "one-time-visit", element: <OneTimeVisitPage /> }, 
      { path: "schedule", element: <SchedulePage /> }, 
      { path: "kids-club", element: <KidsClubPage /> },
      { path: "prime-cafe", element: <PrimeCafePage /> },
    ],
  },
]);