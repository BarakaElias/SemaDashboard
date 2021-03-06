import {
  ArrowRightCircle,
  Code,
  Globe,
  Info,
  List,
  Mail,
  Shield,
  Users,
  User,
  Briefcase,
} from "react-feather";

const gettingStartedSection = [
  {
    href: "/admin",
    icon: Info,
    title: "Dashboard",
    children: [
      {
        href: "/admin/monitoring",
        icon: User,
        title: "Monitoring",
      },
      {
        href: "/admin/statistics",
        icon: User,
        title: "Statistics",
      },
    ],
  },
  {
    href: "/admin/administration",
    icon: Briefcase,
    title: "Administration",
    children: [
      {
        href: "/admin/administration/admin_users",
        icon: User,
        title: "Admin Users",
      },
      {
        href: "/admin/administration/route_sim_testing",
        icon: Briefcase,
        title: "Route/SIM Testing",
      },
    ],
  },
  {
    href: "/admin/invoice",
    icon: Code,
    title: "Invoice",
    children: [
      {
        href: "/admin/invoice/create",
        icon: User,
        title: "Create Invoice",
      },
    ],
  },
  {
    href: "/admin/admin_manage_sender_ids",
    icon: User,
    title: "Manage SIDs",
  },
  {
    href: "/admin/mgm",
    icon: Briefcase,
    title: "Manage Accounts",
    children: [
      {
        href: "/admin/manage_accounts/new_accounts",
        title: "All Accounts",
      },
    ],
  },
];

const developmentSection = [
  {
    href: "/docs/routing",
    icon: ArrowRightCircle,
    title: "Routing",
  },
  {
    href: "/docs/auth",
    icon: Users,
    title: "Authentication",
    children: [
      {
        href: "/docs/auth/auth0",
        title: "Auth0",
      },
      {
        href: "/docs/auth/cognito",
        title: "Cognito",
      },
      {
        href: "/docs/auth/firebase",
        title: "Firebase",
      },
      {
        href: "/docs/auth/jwt",
        title: "JWT",
      },
    ],
  },
  {
    href: "/docs/guards",
    icon: Shield,
    title: "Guards",
  },
  {
    href: "/docs/api-calls",
    icon: ArrowRightCircle,
    title: "API Calls",
  },
  {
    href: "/docs/environment-variables",
    icon: ArrowRightCircle,
    title: "Environment Variables",
  },
  {
    href: "/docs/redux",
    icon: ArrowRightCircle,
    title: "Redux",
  },
  {
    href: "/docs/internationalization",
    icon: Globe,
    title: "Internationalization",
  },
  {
    href: "/docs/eslint-and-prettier",
    icon: ArrowRightCircle,
    title: "ESLint & Prettier",
  },
  {
    href: "/docs/deployment",
    icon: ArrowRightCircle,
    title: "Deployment",
  },
  {
    href: "/docs/migrating-to-next-js",
    icon: ArrowRightCircle,
    title: "Migrating to Next.js",
  },
];

const helpSection = [
  {
    href: "/docs/support",
    icon: Mail,
    title: "Support",
  },
  {
    href: "/docs/changelog",
    icon: List,
    title: "Changelog",
    badge: "v2.1.0",
  },
];

const navItems = [
  {
    title: "Getting Started",
    pages: gettingStartedSection,
  },
  {
    title: "Development",
    pages: developmentSection,
  },
  {
    title: "Help",
    pages: helpSection,
  },
];

export default navItems;
