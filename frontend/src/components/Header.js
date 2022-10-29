import { useConnectModal, useDisconnect } from "@web3modal/react";
import React, { useEffect, useState } from "react";
import Logo from "../images/logo.png";
import Menu from "../images/Menu.png";
import { useAccount } from "@web3modal/react";

export const Header = () => {
  const { isOpen, open, close } = useConnectModal();
  const { account, isReady } = useAccount();
  const [isCn, setIsCn] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const disconnect = useDisconnect();

  console.log(isMenu);

  useEffect(() => {
    if (account.isConnected) {
      setIsCn(true);
    } else {
      setIsCn(false);
    }
  }, [account.isConnected]);

  const handleDisconnect = () => {
    disconnect();
    setIsMenu(false);
  };

  return (
    <header className="items-center ">
      <div className="relative items-center flex bg-headerBg h-24 mt-[20px] border-white border-2 rounded-[30px] mx-11 justify-between">
        <a href="#" className="pl-11">
          <img alt="logo" src={Logo} className="h-[31px]" />
        </a>
        {!isCn ? (
          <button
            onClick={open}
            className="font-normal bg-headerBg text-white h-[59px] mr-[5px] border-white border-2 rounded-[30px] w-[200px] "
          >
            CONNECT YOUR WALLET
          </button>
        ) : (
          <div
            role="button"
            onClick={() => setIsMenu(!isMenu)}
            className="pr-9"
          >
            <img alt="Menu" src={Menu} />
          </div>
        )}
        {isMenu ? (
          <div className="absolute -bottom-[138px] right-0 grid  w-[214px] bg-headerBg">
            <button className=" btn-menu">Linked Accounts</button>
            <button className=" btn-menu">Unlinked Accounts</button>
            <button onClick={handleDisconnect} className="btn-menu">
              Disconnect
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};
