import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import SingleBook from "./pages/SingleBook";
import MyFooter from "./components/MyFooter/MyFooter";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import UploadBook from "./pages/Dashboard/UploadBook";
import ManageBooks from "./pages/Dashboard/ManageBooks";
import EditBooks from "./pages/Dashboard/EditBooks";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Logout from "./components/Logout/Logout";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<SingleBook />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/admin/dashboard" element={<DashboardLayout />}>
            <Route index element={<PrivateRoute> <Dashboard /></PrivateRoute>} />
            <Route path="/admin/dashboard/upload" element={<UploadBook />} />
            <Route path="/admin/dashboard/manage" element={<ManageBooks />} />
            <Route path="/admin/dashboard/edit-books/:id" element={<EditBooks />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>

      <MyFooter />
    </>
  );
};

export default App;
