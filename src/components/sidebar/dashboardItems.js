import {
  Bell,
  BookOpen,
  Calendar,
  CheckSquare,
  Grid,
  Heart,
  Layout,
  List,
  PieChart,
  Sliders,
  MapPin,
  Users,
  Share,
  Code,
  Mail,
  Inbox,
  Monitor,
  Book,
  User,
} from "react-feather";

const pagesSection = [
  {
    href: "/",
    icon: Sliders,
    title: "Dashboard",
    badge: "5",
  },
  {
    href: "/messaging",
    icon: Mail,
    title: "Messaging",
    children: [
      {
        href: "/messaging/quicksms",
        title: "Quick SMS",
      },
      {
        href: "/messaging/contactlistsms",
        title: "Contact List SMS",
      },
      {
        href: "/messaging/contactlistrange",
        title: "Contact List (Range)",
      },
      {
        href: "/messaging/uploadfilesms",
        title: "Upload File",
      },
      {
        href: "/messaging/dbcampaign",
        title: "DB Campaign",
      },
    ],
  },
  {
    href: "/incomingsms",
    icon: Inbox,
    title: "Incoming SMS",
    children: [
      {
        href: "/incomingsms/inbox",
        title: "Inbox",
      },
      {
        href: "/incomingsms/channels",
        title: "Channel Manager",
      },
    ],
  },
  {
    href: "/manage",
    icon: Monitor,
    title: "Manage",
    children: [
      {
        href: "/manage/senderIDs",
        title: "Sender IDS",
      },
      {
        href: "/manage/templates",
        title: "Templates",
      },
      {
        href: "/manage/job-management",
        title: "Job Management",
      },
    ],
  },
  {
    href: "/contact-lists",
    icon: Book,
    title: "Contact Lists",
  },
  {
    href: "/reports",
    icon: BookOpen,
    title: "Reports",
    children: [
      {
        href: "/reports/transactions",
        title: "Transactions",
      },
      {
        href: "/reports/dlr-reports",
        title: "DLR Report",
      },
    ],
  },
  {
    href: "/users",
    icon: User,
    title: "Users",
    children: [
      {
        href: "/users/all_users",
        title: "All Users",
      },
      {
        href: "/users/add_user",
        title: "Add User",
      },
      {
        href: "/users/my_profile",
        title: "My Profile",
      },
    ],
  },
  {
    href: "/account",
    icon: Code,
    title: "Account",
    children: [
      {
        href: "/account/general",
        title: "General",
      },
      {
        href: "/account/api",
        title: "API",
      },
    ],
  },

  {
    href: "/pages",
    icon: Layout,
    title: "Pages",
    children: [
      {
        href: "/pages/profile",
        title: "Profile",
      },
      {
        href: "/pages/settings",
        title: "Settings",
      },
      {
        href: "/pages/clients",
        title: "Clients",
      },
      {
        href: "/pages/projects",
        title: "Projects",
      },
      {
        href: "/pages/invoice",
        title: "Invoice",
      },
      {
        href: "/pages/pricing",
        title: "Pricing",
      },
      {
        href: "/pages/tasks",
        title: "Tasks",
      },
      {
        href: "/pages/chat",
        title: "Chat",
        badge: "New",
      },
      {
        href: "/pages/blank",
        title: "Blank Page",
      },
    ],
  },
  {
    href: "/auth",
    icon: Users,
    title: "Auth",
    children: [
      {
        href: "/auth/sign-in",
        title: "Sign In",
      },
      {
        href: "/auth/sign-up",
        title: "Sign Up",
      },
      {
        href: "/auth/reset-password",
        title: "Reset Password",
      },
      {
        href: "/auth/404",
        title: "404 Page",
      },
      {
        href: "/auth/500",
        title: "500 Page",
      },
    ],
  },
  {
    href: "/docs/introduction",
    icon: BookOpen,
    title: "Documentation",
  },
];

const componentsSection = [
  {
    href: "/ui",
    icon: Grid,
    title: "UI Elements",
    children: [
      {
        href: "/ui/alerts",
        title: "Alerts",
      },
      {
        href: "/ui/buttons",
        title: "Buttons",
      },
      {
        href: "/ui/cards",
        title: "Cards",
      },
      {
        href: "/ui/carousel",
        title: "Carousel",
      },
      {
        href: "/ui/embed-video",
        title: "Embed Video",
      },
      {
        href: "/ui/general",
        title: "General",
      },
      {
        href: "/ui/grid",
        title: "Grid",
      },
      {
        href: "/ui/modals",
        title: "Modals",
      },
      {
        href: "/ui/offcanvas",
        title: "Offcanvas",
      },
      {
        href: "/ui/tabs",
        title: "Tabs",
      },
      {
        href: "/ui/typography",
        title: "Typography",
      },
    ],
  },
  {
    href: "/icons",
    icon: Heart,
    title: "Icons",
    badge: "1500+",
    children: [
      {
        href: "/icons/feather",
        title: "Feather",
      },
      {
        href: "/icons/font-awesome",
        title: "Font Awesome",
      },
    ],
  },
  {
    href: "/forms",
    icon: CheckSquare,
    title: "Forms",
    children: [
      {
        href: "/forms/layouts",
        title: "Layouts",
      },
      {
        href: "/forms/basic-inputs",
        title: "Basic Inputs",
      },
      {
        href: "/forms/input-groups",
        title: "Input Groups",
      },
      {
        href: "/forms/floating-labels",
        title: "Floating Labels",
      },
    ],
  },
  {
    href: "/tables",
    icon: List,
    title: "Tables",
  },
];

const pluginsSection = [
  {
    href: "/form-plugins",
    icon: CheckSquare,
    title: "Form Plugins",
    children: [
      {
        href: "/form-plugins/advanced-inputs",
        title: "Advanced Inputs",
      },
      {
        href: "/form-plugins/formik",
        title: "Formik",
        badge: "New",
      },
      {
        href: "/form-plugins/editors",
        title: "Editors",
      },
    ],
  },
  {
    href: "/advanced-tables",
    icon: List,
    title: "Advanced Tables",
    children: [
      {
        href: "/advanced-tables/pagination",
        title: "Pagination",
      },
      {
        href: "/advanced-tables/column-sorting",
        title: "Column Sorting",
      },
      {
        href: "/advanced-tables/column-filtering",
        title: "Column Filtering",
      },
      {
        href: "/advanced-tables/row-expanding",
        title: "Row Expanding",
      },
      {
        href: "/advanced-tables/row-selection",
        title: "Row Selection",
      },
    ],
  },
  {
    href: "/charts",
    icon: PieChart,
    title: "Charts",
    badge: "New",
    children: [
      {
        href: "/charts/chartjs",
        title: "Chart.js",
      },
      {
        href: "/charts/apexcharts",
        title: "ApexCharts",
        badge: "New",
      },
    ],
  },
  {
    href: "/notifications",
    icon: Bell,
    title: "Notifications",
  },
  {
    href: "/maps",
    icon: MapPin,
    title: "Maps",
    children: [
      {
        href: "/maps/google-maps",
        title: "Google Maps",
      },
      {
        href: "/maps/vector-maps",
        title: "Vector Maps",
      },
    ],
  },
  {
    href: "/calendar",
    icon: Calendar,
    title: "Calendar",
  },
  {
    href: "/404",
    icon: Share,
    title: "Multi Level",
    children: [
      {
        href: "/404",
        title: "Two Levels",
        children: [
          {
            href: "/404",
            title: "Item 1",
          },
          {
            href: "/404",
            title: "Item 2",
          },
        ],
      },
      {
        href: "/404",
        title: "Three Levels",
        children: [
          {
            href: "/404",
            title: "Item 1",
            children: [
              {
                href: "/404",
                title: "Item 1",
              },
              {
                href: "/404",
                title: "Item 2",
              },
            ],
          },
          {
            href: "/404",
            title: "Item 2",
          },
        ],
      },
    ],
  },
];

const navItems = [
  {
    title: "Pages",
    pages: pagesSection,
  },
  {
    title: "Tools & Components",
    pages: componentsSection,
  },
  {
    title: "Plugins & Addons",
    pages: pluginsSection,
  },
];

export default navItems;
