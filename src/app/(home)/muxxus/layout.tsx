import React from "react";
import navigation from "@/config/navigation.json";
import ScrollSmootherComponent from "@/components/tools/ScrollSmoother";
import MuxxusFooter from "@/components/footer/MuxxusFooter";
import MuxxusNewsletter from "@/components/newsletter/MuxxusNewsletter";
import ToolsComponent from "@/components/tools";
import ScrollTop from "@/components/tools/ScrollTop";
import DesignStudioHeader from "@/components/headers/DesignStudioHeader";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="beatrice-kanit root-layout" theme-setting="style-3">
      <ScrollSmootherComponent />
      <ToolsComponent />
      <ScrollTop />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          
          <div>{children}</div>
          
          {/* Newsletter Section */}
          <MuxxusNewsletter />
          
          {/* MuxxusFooter - Footer personnalisé */}
          <MuxxusFooter footerNav={navigation.footer1} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
