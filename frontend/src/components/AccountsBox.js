// import React from "react";
// import Twitter from "../../public/logos/twitter.png";
// import Discord from "../../public/logos/discord.png";
// import Gmail from "../../public/logos/gmail.png";
// import Twitch from "../../public/logos/twitch.png";
// import Tiktok from "../../public/logos/tiktok.png";
// import Github from "../../public/logos/github.png";
// import Instagram from "../../public/logos/instagram.png";
// import Linkedin from "../../public/logos/linkedin.png";
// import Facebook from "../../public/logos/facebook.png";
// import Spotify from "../../public/logos/spotify.png";
// import Netflix from "../../public/logos/netflix.png";
// import Telegram from "../../public/logos/telegram.png";

export const AccountsBox = () => {
  const res = [
    "instagram",
    "telegram",
    "facebook",
    "telegram",
    "telegram",
    "telegram",
    "telegram",
    "telegram",
  ];
  return (
    <div className="h-full w-full flex justify-center">
      <div className="rounded-[30px] justify-center bg-headerBg w-[763px] h-[422px] border-white border-2 mt-[40px] flex-col">
        <div className="mt-[73px] h-[47px] justify-center flex ">
          <p className=" items-center flex text-[40px] leading-[17px] font-normal text-white">
            Linked Acoounts
          </p>
        </div>
        <div className="justify-center flex flex-wrap items-center bg-headerBg h-[75px] mt-[35px] px-[75px] rounded-[30px] mx-11 gap-7">
          {res.map((image) => (
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
