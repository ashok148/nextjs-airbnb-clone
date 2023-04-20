"use client";

import React, { useState } from "react";
import { VscGlobe } from "react-icons/vsc";
import { IoIosMenu } from "react-icons/io";
import { Avatar } from "../Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

const UserMenu = () => {
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="text-sm font-semibold rounded-full py-3 px-4 hover:bg-neutral-100 transition cursor-pointer hidden md:block"
        >
          Airbnb your home
        </div>
        {/* <VscGlobe size={20} /> */}
        <div
          onClick={() => handleOpen()}
          className="flex md:py-1 md:px-2 rounded-full p-4 border-[1px] border-neutral-200 gap-3 cursor-pointer items-center transition hover:shadow-md"
        >
          <IoIosMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={loginModal.onOpen} label={"Login"} />
              <MenuItem onClick={registerModal.onOpen} label={"Sign up"} />
            </>
          </div>
        </div>
      )}
    </div>
  );
};
export default UserMenu;
