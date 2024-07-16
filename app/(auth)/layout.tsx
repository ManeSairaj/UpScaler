import React from "react";

const Layout = ({ childern }: { childern: React.ReactNode }) => {
  return <main className="auth">{childern}</main>;
};

export default Layout;
