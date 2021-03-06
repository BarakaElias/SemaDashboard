import React from "react";

// All pages that rely on 3rd party components (other than Bootstrap) are
// loaded asynchronously, to keep the initial JS bundle to a minimum size

// Layouts
import AuthLayout from "./layouts/Auth";
import DashboardLayout from "./layouts/Dashboard";
import DocLayout from "./layouts/Doc";
import AdminLayout from "./layouts/Admin";
import LandingLayout from "./layouts/Landing";

// Guards
import AuthGuard from "./components/guards/AuthGuard";
import AdminGuard from "./components/guards/AdminGuard";
import GuestGuard from "./components/guards/GuestGuard";

// Landing
import Landing from "./pages/landing/Landing";

// Dashboards
import Default from "./pages/dashboards/Default";
import Analytics from "./pages/dashboards/Analytics";
import SaaS from "./pages/dashboards/SaaS";
import Social from "./pages/dashboards/Social";
import Crypto from "./pages/dashboards/Crypto";

// Pages
import Profile from "./pages/pages/Profile";
import Settings from "./pages/pages/Settings";
import Clients from "./pages/pages/Clients";
import Projects from "./pages/pages/Projects";
import Invoice from "./pages/pages/Invoice";
import Pricing from "./pages/pages/Pricing";
import Tasks from "./pages/pages/Tasks";
import Chat from "./pages/pages/Chat";
import Blank from "./pages/pages/Blank";
//ADDED PAGES
import QuickSMS from "./pages/pages/messaging/Quicksms";
import ContactListSMS from "./pages/pages/messaging/ContactListsms";
import ContactListRange from "./pages/pages/messaging/ContactListRange";
import UploadFileSMS from "./pages/pages/messaging/UploadFileSMS";
import Inbox from "./pages/pages/messaging/inbox/inbox";
import SenderIDs from "./pages/pages/messaging/manage/senderID/senderids";
import SmsTemplates from "./pages/pages/messaging/manage/templates/template";
import SmsJobs from "./pages/pages/messaging/manage/jobs/jobs";
import ContactLists from "./pages/pages/contactLists/contactlists";
import SmsTransactions from "./pages/pages/messaging/reports/transactions/transactions";
import DlrReport from "./pages/pages/messaging/reports/dlrReport/dlrReport";
import ContactList from "./pages/pages/contactLists/contactList/contactList";
import Users from "./pages/pages/users/users";
import AddUser from "./pages/pages/users/add_user";
import MyProfile from "./pages/pages/users/my_profile";
import AccountGenerals from "./pages/pages/user_accounts/AccountGenerals";
import AccountApi from "./pages/pages/user_accounts/AccountApi";
import ActivateAccount from "./pages/pages/user_accounts/ActivateAccount";
//ADDED ADMIN PAGES
import AdminSenderIdManager from "./pages/pages/admin/sender_ids/admin_sender_id";
import ActivateAccounts from "./pages/pages/admin/Accounts/activation/ActivateAccounts";
import NewAccounts from "./pages/pages/admin/Accounts/new_accounts/NewAccounts";
import Statistics from "./pages/pages/admin/Dashboard/statistics/statistics";
import Monitoring from "./pages/pages/admin/Dashboard/monitoring/monitoring";
import CreateInvoice from "./pages/pages/admin/Dashboard/invoice/create_invoice/create_invoice";
import RouteSimTesting from "./pages/pages/admin/Dashboard/administration/route_sim_testing/route_sim_testing";
import AdminUsers from "./pages/pages/admin/Dashboard/administration/admin_users/admin_users";
// Auth
import Page500 from "./pages/auth/Page500";
import Page404 from "./pages/auth/Page404";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ResetPassword from "./pages/auth/ResetPassword";

// UI components
import Alerts from "./pages/ui/Alerts";
import Buttons from "./pages/ui/Buttons";
import Cards from "./pages/ui/Cards";
import Carousel from "./pages/ui/Carousel";
import EmbedVideo from "./pages/ui/EmbedVideo";
import General from "./pages/ui/General";
import Grid from "./pages/ui/Grid";
import Modals from "./pages/ui/Modals";
import Offcanvas from "./pages/ui/Offcanvas";
import Tabs from "./pages/ui/Tabs";
import Typography from "./pages/ui/Typography";

// Icons
import Feather from "./pages/icons/Feather";
import FontAwesome from "./pages/icons/FontAwesome";

// Forms
import Layouts from "./pages/forms/Layouts";
import BasicInputs from "./pages/forms/BasicInputs";
import InputGroups from "./pages/forms/InputGroups";
import FloatingLabels from "./pages/forms/FloatingLabels";
import AdvancedInputs from "./pages/forms/AdvancedInputs";
import Formik from "./pages/forms/Formik";
import Editors from "./pages/forms/Editors";

// Tables
import Tables from "./pages/tables/Tables";
import Pagination from "./pages/tables/Pagination";
import ColumnSorting from "./pages/tables/ColumnSorting";
import ColumnFiltering from "./pages/tables/ColumnFiltering";
import RowExpanding from "./pages/tables/RowExpanding";
import RowSelection from "./pages/tables/RowSelection";

// Charts
import Chartjs from "./pages/charts/Chartjs";
import ApexCharts from "./pages/charts/ApexCharts";

// Notifications
import Notifications from "./pages/notifications/Notifications";

// Maps
import GoogleMaps from "./pages/maps/GoogleMaps";
import VectorMaps from "./pages/maps/VectorMaps";

// Calendar
import Calendar from "./pages/calendar/Calendar";

// Documentation
import Introduction from "./pages/docs/Introduction";
import GettingStarted from "./pages/docs/GettingStarted";
import Routing from "./pages/docs/Routing";
import Auth0 from "./pages/docs/auth/Auth0";
import Cognito from "./pages/docs/auth/Cognito";
import Firebase from "./pages/docs/auth/Firebase";
import JWT from "./pages/docs/auth/JWT";
import Guards from "./pages/docs/Guards";
import APICalls from "./pages/docs/APICalls";
import Redux from "./pages/docs/Redux";
import Internationalization from "./pages/docs/Internationalization";
import EnvironmentVariables from "./pages/docs/EnvironmentVariables";
import ESLintAndPrettier from "./pages/docs/ESLintAndPrettier";
import Deployment from "./pages/docs/Deployment";
import MigratingToNextJS from "./pages/docs/MigratingToNextJS";
import Support from "./pages/docs/Support";
import Changelog from "./pages/docs/Changelog";

// Protected routes
import ProtectedPage from "./pages/protected/ProtectedPage";
import DbCampaignSMS from "./pages/pages/messaging/DBCampaignSMS";
import Channels from "./pages/pages/messaging/channels/channels";
import Dashboard from "./layouts/Dashboard";
import WelcomeDashboard from "./pages/pages/admin/welcome/welcome";

const routes = [
  {
    path: "/",
    element: (
      <AuthGuard>
        <Default />
      </AuthGuard>
    ),
  },
  {
    path: "/dash",
    element: (
      <AuthGuard>
        <Default />
      </AuthGuard>
    ),
    // children: [
    //   {
    //     path: "",
    //     element: <Landing />,
    //   },
    // ],
  },
  {
    path: "messaging",
    element: <DashboardLayout />,
    children: [
      {
        path: "quicksms",
        element: (
          <AuthGuard>
            <QuickSMS />
          </AuthGuard>
        ),
      },
      {
        path: "contactlistsms",
        element: (
          <AuthGuard>
            <ContactListSMS />
          </AuthGuard>
        ),
      },
      {
        path: "contactlistrange",
        element: (
          <AuthGuard>
            {" "}
            <ContactListRange />
          </AuthGuard>
        ),
      },
      {
        path: "uploadfilesms",
        element: (
          <AuthGuard>
            <UploadFileSMS />
          </AuthGuard>
        ),
      },
      {
        path: "dbcampaign",
        element: (
          <AuthGuard>
            {" "}
            <DbCampaignSMS />
          </AuthGuard>
        ),
      },
    ],
  },
  {
    path: "incomingsms",
    element: <DashboardLayout />,
    children: [
      {
        path: "inbox",
        element: (
          <AuthGuard>
            {" "}
            <Inbox />
          </AuthGuard>
        ),
      },
      {
        path: "channels",
        element: (
          <AuthGuard>
            {" "}
            <Channels />
          </AuthGuard>
        ),
      },
    ],
  },
  {
    path: "manage",
    element: <DashboardLayout />,
    children: [
      {
        path: "senderIDS",
        element: (
          <AuthGuard>
            {" "}
            <SenderIDs />
          </AuthGuard>
        ),
      },
      {
        path: "templates",
        element: (
          <AuthGuard>
            {" "}
            <SmsTemplates />
          </AuthGuard>
        ),
      },
      {
        path: "job-management",
        element: (
          <AuthGuard>
            {" "}
            <SmsJobs />
          </AuthGuard>
        ),
      },
    ],
  },
  {
    path: "contact-lists",
    element: (
      <AuthGuard>
        {" "}
        <ContactLists />
      </AuthGuard>
    ),
  },
  {
    path: "contact-lists/edit-contact-list",
    element: (
      <AuthGuard>
        {" "}
        <ContactList />
      </AuthGuard>
    ),
  },
  {
    path: "reports",
    element: <DashboardLayout />,
    children: [
      {
        path: "transactions",
        element: (
          <AuthGuard>
            {" "}
            <SmsTransactions />
          </AuthGuard>
        ),
      },
      {
        path: "dlr-reports",
        element: (
          <AuthGuard>
            {" "}
            <DlrReport />
          </AuthGuard>
        ),
      },
    ],
  },
  {
    path: "users",
    element: <DashboardLayout />,
    children: [
      {
        path: "all_users",
        element: (
          <AuthGuard>
            {" "}
            <Users />
          </AuthGuard>
        ),
      },
      {
        path: "add_user",
        element: (
          <AuthGuard>
            {" "}
            <AddUser />
          </AuthGuard>
        ),
      },
      {
        path: "my_profile",
        element: (
          <AuthGuard>
            {" "}
            <MyProfile />
          </AuthGuard>
        ),
      },
    ],
  },
  {
    path: "account",
    element: <DashboardLayout />,
    children: [
      {
        path: "general",
        element: (
          <AuthGuard>
            <AccountGenerals />
          </AuthGuard>
        ),
        // children: [
        //   {
        //     path: "activate_account",
        //     element: (
        //       <DashboardLayout>
        //         <ActivateAccount />
        //       </DashboardLayout>
        //     ),
        //   },
        // ],
      },
      {
        path: "activate_account",
        element: (
          <AuthGuard>
            <ActivateAccount />
          </AuthGuard>
        ),
      },
      {
        path: "api",
        element: (
          <AuthGuard>
            <AccountApi />
          </AuthGuard>
        ),
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "monitoring",
        element: (
          <AdminGuard>
            <Monitoring />
          </AdminGuard>
        ),
      },
      {
        path: "statistics",
        element: (
          <AdminGuard>
            <Statistics />
          </AdminGuard>
        ),
      },
      {
        path: "administration/admin_users",
        element: (
          <AdminGuard>
            <AdminUsers />
          </AdminGuard>
        ),
      },
      {
        path: "administration/route_sim_testing",
        element: (
          <AdminGuard>
            <RouteSimTesting />
          </AdminGuard>
        ),
      },
      {
        path: "invoice/create",
        element: (
          <AdminGuard>
            <CreateInvoice />
          </AdminGuard>
        ),
      },
      {
        path: "admin_manage_sender_ids",
        element: (
          <AdminGuard>
            {" "}
            <AdminSenderIdManager />
          </AdminGuard>
        ),
      },
      {
        path: "manage_accounts/new_accounts",
        element: (
          <AdminGuard>
            <NewAccounts />
          </AdminGuard>
        ),
      },
      {
        path: "manage_accounts/activate",
        element: (
          <AdminGuard>
            <ActivateAccounts />
          </AdminGuard>
        ),
      },
      {
        path: "welcome",
        element: (
          <AdminGuard>
            <WelcomeDashboard />
          </AdminGuard>
        ),
      },
    ],
  },

  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      // {
      //   path: "default",
      //   element: <Default />,
      // },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "saas",
        element: <SaaS />,
      },
      {
        path: "social",
        element: <Social />,
      },
      {
        path: "crypto",
        element: <Crypto />,
      },
    ],
  },
  {
    path: "pages",
    element: <DashboardLayout />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "clients",
        element: <Clients />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "invoice",
        element: <Invoice />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "blank",
        element: <Blank />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "404",
        element: <Page404 />,
      },
      {
        path: "500",
        element: <Page500 />,
      },
    ],
  },
  {
    path: "ui",
    element: <DashboardLayout />,
    children: [
      {
        path: "alerts",
        element: <Alerts />,
      },
      {
        path: "buttons",
        element: <Buttons />,
      },
      {
        path: "cards",
        element: <Cards />,
      },
      {
        path: "carousel",
        element: <Carousel />,
      },
      {
        path: "embed-video",
        element: <EmbedVideo />,
      },
      {
        path: "general",
        element: <General />,
      },
      {
        path: "grid",
        element: <Grid />,
      },
      {
        path: "modals",
        element: <Modals />,
      },
      {
        path: "tabs",
        element: <Tabs />,
      },
      {
        path: "offcanvas",
        element: <Offcanvas />,
      },
      {
        path: "typography",
        element: <Typography />,
      },
    ],
  },
  {
    path: "icons",
    element: <DashboardLayout />,
    children: [
      {
        path: "feather",
        element: <Feather />,
      },
      {
        path: "font-awesome",
        element: <FontAwesome />,
      },
    ],
  },
  {
    path: "forms",
    element: <DashboardLayout />,
    children: [
      {
        path: "layouts",
        element: <Layouts />,
      },
      {
        path: "basic-inputs",
        element: <BasicInputs />,
      },
      {
        path: "input-groups",
        element: <InputGroups />,
      },
      {
        path: "floating-labels",
        element: <FloatingLabels />,
      },
    ],
  },
  {
    path: "tables",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Tables />,
      },
    ],
  },
  {
    path: "form-plugins",
    element: <DashboardLayout />,
    children: [
      {
        path: "advanced-inputs",
        element: <AdvancedInputs />,
      },
      {
        path: "formik",
        element: <Formik />,
      },
      {
        path: "editors",
        element: <Editors />,
      },
    ],
  },
  {
    path: "advanced-tables",
    element: <DashboardLayout />,
    children: [
      {
        path: "pagination",
        element: <Pagination />,
      },
      {
        path: "column-sorting",
        element: <ColumnSorting />,
      },
      {
        path: "column-filtering",
        element: <ColumnFiltering />,
      },
      {
        path: "row-expanding",
        element: <RowExpanding />,
      },
      {
        path: "row-selection",
        element: <RowSelection />,
      },
    ],
  },
  {
    path: "charts",
    element: <DashboardLayout />,
    children: [
      {
        path: "chartjs",
        element: <Chartjs />,
      },
      {
        path: "apexcharts",
        element: <ApexCharts />,
      },
    ],
  },
  {
    path: "notifications",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Notifications />,
      },
    ],
  },
  {
    path: "maps",
    element: <DashboardLayout />,
    children: [
      {
        path: "google-maps",
        element: <GoogleMaps />,
      },
      {
        path: "vector-maps",
        element: <VectorMaps />,
      },
    ],
  },
  {
    path: "calendar",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Calendar />,
      },
    ],
  },
  {
    path: "docs",
    element: <DocLayout />,
    children: [
      {
        path: "introduction",
        element: <Introduction />,
      },
      {
        path: "getting-started",
        element: <GettingStarted />,
      },
      {
        path: "routing",
        element: <Routing />,
      },
      {
        path: "auth/auth0",
        element: <Auth0 />,
      },
      {
        path: "auth/cognito",
        element: <Cognito />,
      },
      {
        path: "auth/firebase",
        element: <Firebase />,
      },
      {
        path: "auth/jwt",
        element: <JWT />,
      },
      {
        path: "guards",
        element: <Guards />,
      },
      {
        path: "api-calls",
        element: <APICalls />,
      },
      {
        path: "redux",
        element: <Redux />,
      },
      {
        path: "internationalization",
        element: <Internationalization />,
      },
      {
        path: "environment-variables",
        element: <EnvironmentVariables />,
      },
      {
        path: "eslint-and-prettier",
        element: <ESLintAndPrettier />,
      },
      {
        path: "deployment",
        element: <Deployment />,
      },
      {
        path: "migrating-to-next-js",
        element: <MigratingToNextJS />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "changelog",
        element: <Changelog />,
      },
    ],
  },
  {
    path: "private",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <ProtectedPage />,
      },
    ],
  },
  {
    path: "*",
    element: <AuthLayout />,
    children: [
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
];

export default routes;
