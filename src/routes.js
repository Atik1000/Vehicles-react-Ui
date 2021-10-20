import Dashboard from "views/Home/Dashboard";
import AddVehicles from "views/Home/AddVehicles";
import AddVehiclesType from "views/Vehicles/AddVehiclesType";
import CreateGroup from "views/Vehicles/CreateGroup";
import EditVehicles from "views/Home/EditVehicles";
import EditVehiclesType from "views/Vehicles/EditVehiclesType";
import EditVehiclesInsurance from "views/Home/EditVehiclesInsurance";
import EditVehiclesPurchase from "views/Home/EditVehiclesPurchase";
import EditVehicleAssignDriver from "views/Home/EditVehicleAssignDriver";
import EditGroup from "views/Vehicles/EditGroup";
import VehiclesType from "views/Vehicles/VehiclesType";
import ManageVehicleGroup from "views/Vehicles/ManageVehicleGroup";
import VehicleInspection from "views/Vehicles/VehicleInspection";
import DriverLogs from "views/Vehicles/DriverLogs";
import AddDriver from "views/Users/AddDriver";
import EditDriver from "views/Users/EditDriver";
import AddVehicleInspection from "views/Vehicles/AddVehicleInspection";
import EditVehiclesInspection from "views/Vehicles/EditVehicleInspection";
import Driver from "views/Users/Diver";

const dashboardRoutes = [
  // home page
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  // User page
  {
    name: "Users",
    icon: "fa fa-users",
    layout: "/admin",
    collapse: true,
    state: "openComponents",
    views: [
      {
        path: "/driver",
        name: "Driver",
        icon: "nc-icon nc-puzzle-10",
        component: Driver,
        layout: "/admin",
      },
      {
        path: "#",
        name: "Users",
        icon: "nc-icon nc-puzzle-10",
        layout: "/admin",
      },
      {
        path: "#",
        name: "Customers",
        icon: "nc-icon nc-puzzle-10",
        layout: "/admin",
      },
    ],
  },
  // Vehicle page
  {
    name: "Vehicles",
    icon: "fa fa-car",
    layout: "/admin",
    collapse: true,
    state: "vehicles",
    views: [
      {
        path: "/dashboard",
        name: "Manage Vehicle",
        icon: "nc-icon nc-puzzle-10",
        component: Dashboard,
        layout: "/admin",
      },
      {
        path: "/vehicle-type",
        name: "Manage Vehicle Type",
        icon: "nc-icon nc-puzzle-10",
        component: VehiclesType,
        layout: "/admin",
      },
      {
        path: "/driver-log",
        name: "Driver Log",
        icon: "nc-icon nc-puzzle-10",
        component: DriverLogs,
        layout: "/admin",
      },
      {
        path: "/manage-vehicle-group",
        name: "Manage Vehicle Group",
        icon: "nc-icon nc-puzzle-10",
        component: ManageVehicleGroup,
        layout: "/admin",
      },
      {
        path: "/vehicle-inspection",
        name: "Vehicle Inspection",
        component: VehicleInspection,
        icon: "nc-icon nc-puzzle-10",
        layout: "/admin",
      },
    ],
  },
  //  Transaction page
  {
    name: "Transaction",
    icon: "fa fa-money-bill-alt",
    layout: "/admin",
    collapse: true,
    state: "transaction",
    views: [
      {
        path: "#",
        name: "Manage Income",
        icon: "nc-icon nc-puzzle-10",
        layout: "/admin",
      },
    ],
  },
  // Booking page
  {
    name: "Booking",
    icon: "fa fa-address-book",
    layout: "/admin",
    collapse: true,
    state: "booking",
    views: [
      {
        path: "#",
        name: "New Booking",
        icon: "nc-icon nc-puzzle-10",
        component: Driver,
        layout: "/admin",
      },
      {
        path: "#",
        name: "Manage Bookings",
        icon: "nc-icon nc-puzzle-10",
        layout: "/admin",
      },
      {
        path: "#",
        name: "Booking Calendar",
        icon: "nc-icon nc-puzzle-10",
        layout: "/admin",
      },
    ],
  },
  // Reports page
  {
    name: "Reports",
    icon: "fa fa-book",
    layout: "/admin",
    collapse: true,
    state: "reports",
    views: [
      {
        path: "#",
        name: "Income Reports",
        icon: "nc-icon nc-puzzle-10",
        layout: "/admin",
      },
      {
        path: "#",
        name: "Expense Reports",
        icon: "nc-icon nc-puzzle-10",
        layout: "/admin",
      },
      {
        path: "#",
        name: "Delinquent Reports",
        icon: "nc-icon nc-puzzle-10",
        layout: "/admin",
      },
      {
        path: "#",
        name: "Monthly Reports",
        icon: "nc-icon nc-puzzle-10",
        layout: "/admin",
      },
      {
        path: "#",
        name: "Booking Reports",
        icon: "nc-icon nc-puzzle-10",
        layout: "/admin",
      },
      {
        path: "#",
        name: "Users Reports",
        icon: "nc-icon nc-puzzle-10",
        layout: "/admin",
      },
    ],
  },
  // Fuel page
  {
    name: "Fuel",
    icon: "fa fa-filter",
    layout: "/admin",
  },

  {
    name: "Vendors",
    icon: "fa fa-database",
    layout: "/admin",
  },
  {
    name: "Work Orders",
    icon: "fa fa-shopping-cart",
    layout: "/admin",
  },
  {
    name: "Notes",
    icon: "fa fa-sticky-note",
    layout: "/admin",
  },
  {
    name: "Service Remainder",
    icon: "fa fa-clock",
    layout: "/admin",
  },
  {
    name: "Settings",
    icon: "fa fa-cog",
    layout: "/admin",
  },
  {
    name: "Help  us Improve",
    icon: "fa fa-comment",
    layout: "/admin",
  },
  // Add and Edit routes

  {
    path: "/add-vehicles-type",
    name: "Add Vehicles Type",
    component: AddVehiclesType,
    icon: "nc-icon nc-single-copy-04",
    layout: "/admin",
    hide: true,
  },
  {
    path: "/add-vehicles",
    name: "Add Vehicles",
    component: AddVehicles,
    icon: "nc-icon nc-chart-bar-32",
    layout: "/admin",
    hide: true,
  },
  {
    path: "/add-group",
    name: "Add Group",
    component: CreateGroup,
    icon: "nc-icon nc-puzzle-10",
    layout: "/admin",
    hide: true,
  },
  {
    path: "/add-driver",
    name: "Add Driver",
    component: AddDriver,
    icon: "nc-icon nc-app",
    layout: "/admin",
    hide: true,
  },
  {
    path: "/add-vehicle-inspection",
    name: "Add Inspection",
    component: AddVehicleInspection,
    icon: "nc-icon nc-app",
    layout: "/admin",
    hide: true,
  },
  // Edit path
  {
    path: "/edit-vehicles-inspection",
    name: "Edit Vehicles",
    component: EditVehiclesInspection,
    icon: "nc-icon nc-app",
    layout: "/admin",
    hide: true,
  },
  {
    path: "/edit-vehicles",
    name: "Edit Vehicles",
    component: EditVehicles,
    icon: "nc-icon nc-app",
    layout: "/admin",
    hide: true,
  },
  {
    path: "/edit-driver",
    name: "Edit Vehicles",
    component: EditDriver,
    icon: "nc-icon nc-app",
    layout: "/admin",
    hide: true,
  },
  {
    path: "/edit-vehicles-type",
    name: "Edit  Type",
    component: EditVehiclesType,
    icon: "nc-icon nc-app",
    layout: "/admin",
    hide: true,
  },
  {
    path: "/edit-vehicles-insurance",
    name: "Edit  Insurance",
    component: EditVehiclesInsurance,
    icon: "nc-icon nc-app",
    layout: "/admin",
    hide: true,
  },
  {
    path: "/edit-vehicles-purchase",
    name: "Edit Purchase",
    component: EditVehiclesPurchase,
    icon: "nc-icon nc-app",
    layout: "/admin",
    hide: true,
  },
  {
    path: "/edit-vehicles-assign-driver",
    name: "Edit Assign Driver",
    component: EditVehicleAssignDriver,
    icon: "nc-icon nc-app",
    layout: "/admin",
    hide: true,
  },
  {
    path: "/edit-group",

    component: EditGroup,
    layout: "/admin",
  },
];

export default dashboardRoutes;
