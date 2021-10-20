export const currentPage = (path) => {
  console.log(path);
  if (path === "/admin/vehicles-type") return "Vehicles Type";
  else if (path === "/admin/manage-vehicle-group")
    return "Manage Vehicle group";
  else if (path === "/admin/vehicle-inspection") return "Vehicle Inspection";
  else if (path === "/admin/driver-logs") return "Driver Logs";
  else if (path === "/admin/driver") return "Driver";
  else if (path === "/admin/add-vehicles-type") return "Add Vehicles Type";
  else if (path === "/admin/add-vehicles") return "Add Vehicles";
  else if (path === "/admin/add-driver") return "Add Driver";
  else if (path === "/admin/edit-vehicles") return "Edit Vehicles";
  else if (path === "/admin/edit-vehicles-type") return "Edit Vehicles Type";
  else if (path === "/admin/edit-vehicles-insurance")
    return "Edit Vehicles Insurance";
  else if (path === "/admin/edit-vehicles-assign-driver")
    return "Edit Vehicles Assign Driver";
  else if (path === "/admin/add-group") return "Add Group";
  else if (path === "/admin/edit-group") return "Edit Group";
  else if (path === "/admin/edit-vehicles-purchase")
    return "Edit Vehicle Purchase";
};
