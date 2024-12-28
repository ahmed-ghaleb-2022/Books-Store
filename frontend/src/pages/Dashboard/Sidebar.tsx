import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import userImg from "../../assets/books_cover/profile.jpg";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";


const DashboardSidebar = () => {
  

  const authContext = useContext(AuthContext);
  
    if (!authContext) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
  
    const { user } = authContext;

    const disabled = "text-gray-400 [&>svg]:text-gray-400 ";
    
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo
        href="/admin/dashboard"
        img={ user?.photoURL || userImg}
        imgAlt="Flowbite logo"
        className="[&>img]:rounded-full"
      >
        {user?.displayName || "Admin" } 
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item
            href="/admin/dashboard/upload"
            icon={HiOutlineCloudUpload}
          >
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="#" className={disabled} icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" className={disabled} icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
            <Sidebar.Item className={disabled} href="#" icon={HiChartPie}>
              Upgrade to Pro
            </Sidebar.Item>
          <Sidebar.Item href="#" className={disabled} icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" className={disabled} icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashboardSidebar;
