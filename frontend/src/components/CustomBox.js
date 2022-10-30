import {
  useAccount,
  useConnectModal,
  useContract,
  useContractRead,
  useDisconnect,
  useFeeData,
  useSignMessage,
} from "@web3modal/react";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../images/logo.png";
import Menu from "../images/Menu.png";
import deauthabi from "../deauthabi.json";
import { useLockContract } from "../hooks/Contract";
import LogosBox from "../images/logos.png";
import ConnectBox from "../images/connect your wallet.png";
import SafeBox from "../images/Your password are safe.png";

const socialmedias = [
  "instagram",
  "telegram",
  "facebook",
  "spotify",
  "github",
  "linkedin",
  "gmail",
  "netflix",
  "discord",
  "twitter",
  "twitch",
  "discord",
];

export const CustomBox = () => {
  const { contract } = useContract({
    address: "0xd8e795d1e3F2Ac2Cc70fb21821f2019a777e2f9f",
    abi: deauthabi.abi,
  });

  // const message = "Hello Web3Modal";

  const [message, setMessage] = useState("");
  useEffect(() => {}, [message]);
  const { data, error, isLoading, signMessage } = useSignMessage({ message });

  // const lockContract = useLockContract();
  // console.log(lockContract);

  const [page, setPage] = useState(1);

  const { isOpen, open, close } = useConnectModal();
  const { account, isReady } = useAccount();
  const [isCn, setIsCn] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const disconnect = useDisconnect();
  const [datas, setDatas] = useState([]);
  const [UnlinkedMedias, setUnlinkedMedias] = useState(socialmedias);

  const getDatas = async () => {
    if (!contract) return;
    const res = await contract?.getConnectedSocialMedias("metamask");
    setDatas(res);
  };

  useEffect(() => {
    getDatas();
  }, []);
  console.log(datas);

  const [refButton, setRefButton] = useState(0);

  useEffect(() => {}, [page]);
  const ref = useRef();

  useEffect(() => {
    if (account.isConnected) {
      setIsCn(true);
    } else {
      setPage(1);
      setIsCn(false);
    }
  }, [account.isConnected]);

  const handleDisconnect = () => {
    disconnect();
    setIsMenu(false);
    setPage(1);
  };

  const handleOpen = async () => {
    open();
    const tmp = await contract?.functions.getConnectedSocialMedias(
      account.connector.chains.name
    );
    setDatas(tmp);
    setUnlinkedMedias(UnlinkedMedias.filter((n) => !datas.includes(n)));
    setPage(2);
  };

  useEffect(() => {
    if (isOpen) {
      setPage(1);
    } else {
      setPage(2);
    }
  }, [isOpen]);

  useEffect(() => {
    let images = ref.current.querySelectorAll("img"),
      current = 0;
    const imageSlider = () => {
      images[current].classList.add("opacity-0");
      current = refButton;
      images[current].classList.remove("opacity-0");
    };
    imageSlider();
  }, [refButton]);

  console.log(data);

  const Header = () => {
    return (
      <header className="items-center ">
        <div className="relative items-center flex bg-headerBg h-24 mt-[20px] border-white border-2 rounded-[30px] mx-11 justify-between">
          <a href="#" className="pl-11">
            <img alt="logo" src={Logo} className="h-[31px]" />
          </a>
          {!isCn ? (
            <button
              onClick={handleOpen}
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
              <button onClick={() => setPage(3)} className=" btn-menu">
                Linked Accounts
              </button>
              <button onClick={() => setPage(2)} className=" btn-menu">
                Unlinked Accounts
              </button>
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

  const HomeBox = () => {
    return (
      <>
        <div className="h-full w-full flex justify-center">
          <div className="mt-[40px] w-[981px] h-[542px] rounded-[30px] border-white border-2 items-center flex px-4 gap-x-9 py-6 bg-headerBg">
            <div className="grid flex gap-10">
              <button className="btn-homebox " onClick={() => setRefButton(0)}>
                ‘Connect Wallet’
              </button>
              <button className="btn-homebox" onClick={() => setRefButton(1)}>
                ‘Link Your Account’
              </button>
              <button className="btn-homebox" onClick={() => setRefButton(2)}>
                ‘Your password are safe’
              </button>
            </div>
            <div className="w-[558px] h-[522px] bg-boxPattern rounded-[30px] items-center justify-center flex ">
              <div
                ref={ref}
                className="w-[399px] h-[270px] bg-headerBg rounded-[30px] opacity-80 items-center justify-center flex relative"
              >
                <img alt="" className="absolute " src={ConnectBox}></img>
                <img alt="" className="opacity-0 absolute" src={LogosBox}></img>
                <img alt="" className="opacity-0 absolute" src={SafeBox}></img>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center flex flex-wrap items-center bg-headerBg h-[75px] mt-[20px] rounded-[30px] mx-11 gap-7">
          <img
            className="logos-footer"
            alt="twitter"
            src="/logos/twitter.png"
          />
          <img
            className="logos-footer"
            alt="discord"
            src="/logos/discord.png"
          />
          <img className="logos-footer" alt="github" src="/logos/github.png" />
          <img
            className="logos-footer"
            alt="Linkedin"
            src="/logos/linkedin.png"
          />
          <img
            className="logos-footer"
            alt="Facebook"
            src="/logos/facebook.png"
          />
          <img
            className="h-[36px] w-[37px]"
            alt="Instagram"
            src="/logos/twitter.png"
          />
          <img
            className="logos-footer"
            alt="Spotify"
            src="/logos/spotify.png"
          />
          <img
            className="logos-footer"
            alt="Netflix"
            src="/logos/netflix.png"
          />
          <img
            className="logos-footer"
            alt="Telegram"
            src="/logos/telegram.png"
          />
          <img
            className="h-[26px] w-[36px]"
            alt="gmail"
            src="/logos/gmail.png"
          />
          <img
            className="h-[27px] w-[42px]"
            alt="twitch"
            src="/logos/twitch.png"
          />
          <img
            className="h-[46px] w-[36px]"
            alt="tiktok"
            src="/logos/tiktok.png"
          />
        </div>
      </>
    );
  };

  const Unlinked = () => {
    return (
      <div className="h-full w-full flex justify-center">
        <div className="rounded-[30px] justify-center bg-headerBg w-[763px] h-[422px] border-white border-2 mt-[40px] flex-col">
          <div className="mt-[73px] h-[47px] justify-center flex ">
            <p className=" items-center flex text-[40px] leading-[17px] font-normal text-white">
              Link your account with your wallet
            </p>
          </div>
          <div className="justify-center flex flex-wrap items-center bg-headerBg h-[75px] mt-[35px] px-[75px] rounded-[30px] mx-11 gap-7">
            {UnlinkedMedias.map((image) => (
              <div
                className="cursor-pointer"
                onClick={async () => {
                  setMessage(image);
                  await signMessage();
                  const res = await Promise.contract?.connectNewSocialMedia(
                    "instagram",
                    "metamask"
                  );
                  console.log(res);
                }}
              >
                <img
                  className="h-[70px] w-[70px]"
                  alt="images"
                  src={`/logos/${image}.png`}
                />
              </div>
            ))}
          </div>
          {/* <div className="grid">
          <div className="justify-center flex items-center gap-2 h-[94px] w-[609px] gap-4">
            <img
              className="h-[70px] w-[70px]"
              alt="Telegram"
              src="/logos/telegram.png"
            />
          </div>
        </div> */}
        </div>
      </div>
    );
  };

  const Linked = () => {
    return (
      <div className="h-full w-full flex justify-center">
        <div className="rounded-[30px] justify-center bg-headerBg w-[763px] h-[422px] border-white border-2 mt-[40px] flex-col">
          <div className="mt-[73px] h-[47px] justify-center flex ">
            <p className=" items-center flex text-[40px] leading-[17px] font-normal text-white">
              Linked Accounts
            </p>
          </div>
          <div className="justify-center flex flex-wrap items-center bg-headerBg h-[75px] mt-[35px] px-[75px] rounded-[30px] mx-11 gap-7">
            {datas.map((image) => (
              <img
                className="h-[70px] w-[70px]"
                alt="images"
                src={`/logos/${image}.png`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  if (page === 1) {
    return (
      <>
        <Header />
        <HomeBox />
      </>
    );
  } else if (page === 2) {
    return (
      <>
        <Header />
        <Unlinked />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <Linked />
      </>
    );
  }
};
