import React, { useState } from "react";

export const CustomBox = () => {

    const HomeBox = () => {
        return (
            <div className="h-full w-full flex justify-center">
                <div className="mt-[40px] w-[981px] h-[542px] rounded-[30px] border-white border-2 items-center flex px-4 gap-x-9 py-6 bg-headerBg">
                    <div className="grid flex gap-10 ">
                        <button className="h-[129px] font-normal text-3xl w-[369px] rounded-[30px] border-white border-2 row-span-1 text-white">Click "Connect Your Wallet1</button>
                        <button className="h-[129px] font-normal text-3xl w-[369px] rounded-[30px] border-white border-2 row-span-1 text-white">Click "Connect Your Wallet2</button>
                        <button className="h-[129px] font-normal text-3xl w-[369px] rounded-[30px] border-white border-2 row-span-1 text-white">Click "Connect Your Wallet3</button>
                    </div>
                    <div className="w-[558px] h-[522px] bg-box-pattern rounded-[30px]">

                    </div>
                </div>
            </div>
        );
    }

    const Accounts = () => {
        return (
            <div className="h-full w-full flex justify-center">
                <div className="rounded-[30px] justify-center flex bg-headerBg w-[763px] h-[422px] border-white border-2 mt-[40px]">
                    <div className=" flex mt-[73px] h-[47px] ">
                        <p className=" items-center flex text-[40px] leading-[17px] font-normal text-white">Social Media Accounts</p>
                    </div>
                    <div className="flex mt-12">
                        <img />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Accounts />
    )
}

