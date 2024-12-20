import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import SplitPage from "./pages/TrackPage";
import SplitCreate from "./pages/SplitCreate";
import SplitHome from "./pages/SplitHome";
import VaultHome from "./pages/VaultHome";
import VaultRecieptsView from "./pages/VaultRecieptsView";
import DistributionPage from "./pages/DistributionPage";
import FriendsPage from "./pages/FriendsPage";
import {
  billViewLoader,
  transactionsLoader,
  distributionLoader,
  dashboardLoader,
} from "./store/firebase-context";
import ErrorPage from "./pages/ErrorPage";
import ReceiptView from "./pages/ReceiptView";
import BillNotFound from "./pages/BillNotFound";
import PageNotFound from "./pages/PageNotFound";
import TrackHome from "./pages/TrackHome";
import DashBoard from "./pages/DashBoard";
import TransactionCreate from "./pages/TransactionCreate";
import TransactionPage from "./pages/TransactionPage";
import AuthPage from "./pages/AuthPage";
import { commonLoader } from "./store/firebase-context";
import ProfilePage from "./pages/ProfilePage";
import {
  profileLoader,
  vaultReceiptsViewLoader,
  receiptViewLoader,
  vaultWarrantyViewLoader,
  warrantyViewLoader,
  profileViewLoader,
} from "./loaders/loaders";
import Tags from "./pages/Tags";
import ProtectedRoute from "./pages/ProtectedRoute";
import VaultReceiptCreate from "./pages/VaultReceiptCreate";
import VaultWarrantyCreate from "./pages/VaultWarrantyCreate";
import VaultWarrantyView from "./pages/VaultWarrantyView";
import WarrantyView from "./pages/WarrantyView";
import ProfileViewPage from "./pages/ProfileViewPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },

      // {
      //   path: "track",
      //   children: [
      //     {
      //       path: "",
      //       element: <TrackHome />,
      //     },
      //     {
      //       path: "dashboard",
      //       element: <DashBoard />,
      //       loader: dashboardLoader,
      //       errorElement: <ErrorPage />,
      //     },
      //     {
      //       path: "create",
      //       element: <TransactionCreate />,
      //       loader: commonLoader,
      //       errorElement: <ErrorPage />,
      //     },
      //     {
      //       path: "transactions",
      //       element: <TransactionPage />,
      //       loader: transactionsLoader,
      //       errorElement: <ErrorPage />,
      //     },
      //     {
      //       path: "distributions",
      //       element: <DistributionPage />,
      //       loader: distributionLoader,
      //       errorElement: <ErrorPage />,
      //     },
      //   ],
      // },
      // {
      //   path: "split",
      //   element: <SplitPage />,
      //   children: [
      //     {
      //       path: "",
      //       element: <SplitHome />,
      //     },
      //     {
      //       path: "create",
      //       element: <SplitCreate />,
      //       errorElement: <ErrorPage />,
      //     },
      //   ],
      // },
      {
        path: "vault",
        children: [
          {
            path: "",
            element: <VaultHome />,
          },
          {
            path: "protected",
            element: <ProtectedRoute />,
            children: [
              {
                path: "create/receipt",
                element: <VaultReceiptCreate />,
                errorElement: <ErrorPage />,
              },
              {
                path: "create/warranty",
                element: <VaultWarrantyCreate />,
                errorElement: <ErrorPage />,
              },
              {
                path: "tags",
                element: <Tags />,
              },
              {
                path: "view/receipt",
                element: <VaultRecieptsView />,
                loader: vaultReceiptsViewLoader,
                errorElement: <ErrorPage />,
              },
              {
                path: "view/receipt/:recId",
                element: <ReceiptView />,
                loader: receiptViewLoader,
                errorElement: <ErrorPage />,
              },
              {
                path: "view/warranty",
                element: <VaultWarrantyView />,
                loader: vaultWarrantyViewLoader,
                errorElement: <ErrorPage />,
              },
              {
                path: "view/warranty/:warId",
                element: <WarrantyView />,
                loader: warrantyViewLoader,
                errorElement: <ErrorPage />,
              },
            ],
          },
        ],
      },
      {
        path: "profile",
        children: [
          {
            path: "",
            loader: profileLoader,
            element: <ProfilePage />,
          },
          {
            path: "public/:userId",
            loader: profileViewLoader,
            element: <ProfileViewPage />,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: "friends",
        element: <ProtectedRoute />,
        children: [
          {
            path: "",
            element: <FriendsPage />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
