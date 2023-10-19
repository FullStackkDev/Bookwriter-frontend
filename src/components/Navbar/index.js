import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../Redux/store/userSlice";
import Design from "./design";
import { useLocation } from "react-router";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDrawer, setIsDrawer] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.user.user);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const updateIsDrawer = () => {
    setIsDrawer(window.innerWidth < 480);
  };

  const handleLogout = () => {
    dispatch(userActions.logoutUser());
  };

  const isSelected = (pagePath) => {
    return location.pathname === pagePath;
  };

  useEffect(() => {
    window.addEventListener("resize", updateIsDrawer);
    updateIsDrawer();
    return () => {
      window.removeEventListener("resize", updateIsDrawer);
    };
  }, []);

  return (
    <Design
      mobileOpen={mobileOpen}
      isDrawer={isDrawer}
      handleDrawerToggle={handleDrawerToggle}
      user={user}
      handleLogout={handleLogout}
      isSelected={isSelected}
    />
  );
}

export default Navbar;
