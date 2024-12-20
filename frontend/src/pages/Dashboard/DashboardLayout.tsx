import { Outlet } from "react-router-dom";
import DashboardSidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex gap-4 flex-col md:flex-row">
      <DashboardSidebar />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
