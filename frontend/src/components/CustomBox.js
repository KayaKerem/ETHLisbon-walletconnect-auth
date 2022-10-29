import React from "react";

export const CustomBox = () => {
  return (
    <>
      <div className="h-full w-full flex justify-center">
        <div className="mt-[40px] w-[981px] h-[542px] rounded-[30px] border-white border-2 items-center flex px-4 gap-x-9 py-6 bg-headerBg">
          <div className="grid flex gap-10 ">
            <button className="btn-homebox">‘Connect Wallet’</button>
            <button className="btn-homebox">‘Link Your Account’</button>
            <button className="btn-homebox">‘Your password are safe’</button>
          </div>
          <div className="w-[558px] h-[522px] bg-box-pattern rounded-[30px]"></div>
        </div>
      </div>
      <div className="justify-center flex flex-wrap items-center bg-headerBg h-[75px] mt-[20px] rounded-[30px] mx-11 gap-7">
        <img className="logos-footer" alt="twitter" src="/logos/twitter.png" />
        <img className="logos-footer" alt="discord" src="/logos/discord.png" />
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
        <img className="logos-footer" alt="Spotify" src="/logos/spotify.png" />
        <img className="logos-footer" alt="Netflix" src="/logos/netflix.png" />
        <img
          className="logos-footer"
          alt="Telegram"
          src="/logos/telegram.png"
        />
        <img className="h-[26px] w-[36px]" alt="gmail" src="/logos/gmail.png" />
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
