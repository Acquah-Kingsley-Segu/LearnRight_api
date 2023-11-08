import DashboardNavs from "./SubComponent/DashboardNavs";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <DashboardNavs />
      <main className="bg-green-400 flex-1">hi</main>
    </div>
  );
};

export default Dashboard;
