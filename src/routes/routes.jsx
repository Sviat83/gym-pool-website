import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import HomePage from "../pages/HomePage";
import TrainersPage from '../components/TrainersPage/TrainersPage'
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
import KidsClubPage from "../pages/kids-club/KidsClubPage";
import PrimeCafePage from "../pages/PrimeCafePage";


// Адмінка
import Login from "../admin/Auth/Login";
import AdminLayout  from "../admin/AdminLayout/AdminLayout";
import Dashboard from "../admin/Modules/Dashboard/Dashboard";
import Gallery from "../admin/Modules/Gallery/Gallery";
import Settings from "../admin/Modules/Settings/Settings";
import News from "../admin/Modules/News/News";
import Contacts from "../admin/Modules/Contacts/Contacts";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import AgeGroupAdmin from "../admin/Modules/AgeGroupAdmin/AgeGroupAdmin";
import Schedule from "../admin/Modules/Schedule/SchedulePage";


// Error
import ErrorPage from "../pages/ErrorPage";



export const routes = createBrowserRouter([
  {
    path: "/gym-pool-website",element:<MainLayouts/>,
    errorElement: <ErrorPage />,
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

    // Адмінка
    {
      path:"/gym-pool-website/admin/login", element:<Login />,
      errorElement: <ErrorPage />,
    },
    {
      path:"/gym-pool-website/admin",
      element: (
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      ),
      errorElement: <ErrorPage />,
    
      children:[
        { index: true, element: <Dashboard /> },
        { path: "gallery", element: <Gallery /> },
        { path: "settings", element: <Settings /> },
        { path: "contacts", element: <Contacts />},
        { path: "ageGroup" , element: <AgeGroupAdmin/>},
        { path: "news", element: <News />},
        { path: "contacts", element: <Contacts /> },
        { path: "schedule", element: <Schedule /> }

      ],
    },

]);