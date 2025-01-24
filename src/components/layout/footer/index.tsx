import React from "react";
import Brand from "./Brand";
import SocialMedia from "./SocialMedia";
import Links from "./Links";
import CopyRight from "./CopyRight";

const Footer: React.FC = () => {
  return (
    <>
      {/* 手機版 Footer */}
      <footer className="sm:hidden w-full bg-gray-100 border-t border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4 py-8">
          <div className="flex justify-center mb-4">
            <Brand />
          </div>
          <Links mode="mobile" />
          <div className="flex flex-col items-center gap-4 mt-8">
            <SocialMedia className="flex gap-4" />
            <CopyRight className="text-sm text-gray-500" />
          </div>
        </div>
      </footer>

      {/* 桌機版 Footer */}
      <footer className="hidden sm:block w-full h-[230px] bg-gray-100 border-t border-gray-200">
        <div className="w-[1200px] h-full mx-auto flex justify-between items-stretch">
          <div className="w-[300px] h-full flex items-start justify-start pl-6 pt-10">
            <Brand />
          </div>
          <div className="w-[550px] h-full flex items-start justify-center pt-10 pl-10">
            <Links mode="desktop" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center p-2" />
          </div>
          <div className="w-[350px] h-full flex flex-col justify-between">
            <div className="h-[130px] flex justify-end pr-8 pt-8">
              <SocialMedia className="flex gap-4" />
            </div>
            <div className="h-[130px] flex items-end justify-end pr-4 pb-4">
              <CopyRight className="text-sm text-gray-500" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
