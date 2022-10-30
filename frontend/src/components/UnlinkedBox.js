export const UnlinkedBox = () => {
  const res = [
    "instagram",
    "telegram",
    "facebook",
    "telegram",
    "telegram",
    "telegram",
    "gmail",
    "netflix",
  ];

  return (
    <div className="h-full w-full flex justify-center">
      <div className="rounded-[30px] justify-center bg-headerBg w-[763px] h-[422px] border-white border-2 mt-[40px] flex-col">
        <div className="mt-[73px] h-[47px] justify-center flex ">
          <p className=" items-center flex text-[40px] leading-[17px] font-normal text-white">
            Link your account with your wallet
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
