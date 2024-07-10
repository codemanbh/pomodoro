import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

function SideBar({ children, showSideBar }) {
  return (
    <Sidebar collapsed={showSideBar} collapsedWidth={0}>
      {/* <Menu></Menu> */}
      {children}
    </Sidebar>
  );
}

export default SideBar;
