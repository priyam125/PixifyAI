import React from "react";
// import "../global.css"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="auth">{children}</main>;
};

export default Layout;
