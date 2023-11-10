import { Outlet } from "react-router-dom";
import DashboardNavs from "./SubComponent/DashboardNavs";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <DashboardNavs />
      <main className="flex-1 border m-1 rounded-lg mr-2">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
