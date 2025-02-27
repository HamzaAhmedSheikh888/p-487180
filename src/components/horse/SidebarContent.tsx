import React from "react";

const SidebarContent: React.FC = () => {
  return (
    <div className="flex w-full flex-col mt-[30px] max-md:max-w-full max-md:mt-10">
      <div className="self-stretch flex items-stretch gap-[40px_79px] text-lg text-[rgba(35,35,35,1)] font-[105] ml-2.5 max-md:max-w-full">
        <div className="grow shrink w-[311px] basis-auto my-auto">
          Home Ownership Events
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/f03c66fe45e64a1d82491f433d2a9df1cb15e303232e4c4b49204b0594986fe6?placeholderIfAbsent=true"
          className="aspect-[1.97] object-contain w-[71px] shadow-[0px_4px_15px_rgba(0,0,0,0.15)] shrink-0 rounded-[50px]"
          alt="Event icon"
        />
      </div>

      <div className="w-[412px] max-w-full mt-[143px] max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[72%] max-md:w-full max-md:ml-0">
            <div className="text-[rgba(35,35,35,1)] text-[100px] font-[160] max-md:text-[40px] max-md:mt-3.5">
              Horse
            </div>
          </div>
          <div className="w-[28%] ml-5 max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/8c1fb38b2764f08b26a6f710969a89fc2de33acbfcb9ea6a734ab9e025e41bc3?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[111px] shrink-0 max-w-full self-stretch my-auto max-md:mt-[19px]"
              alt="Horse icon"
            />
          </div>
        </div>
      </div>

      <div className="w-[455px] max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[31%] max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/6be2376bcabd948a3c628b80e8886fbfd29cf748e541697be992e58d6c0196f5?placeholderIfAbsent=true"
              className="aspect-[2.35] object-contain w-[141px] shrink-0 max-w-full self-stretch my-auto rounded-[100px] max-md:mt-10"
              alt="Riding icon"
            />
          </div>
          <div className="w-[69%] ml-5 max-md:w-full max-md:ml-0">
            <div className="text-[rgba(35,35,35,1)] text-[100px] font-[160] max-md:text-[40px] max-md:mt-[7px]">
              Riding
            </div>
          </div>
        </div>
      </div>

      <div className="text-[rgba(35,35,35,1)] text-lg font-[75] leading-7 mt-5">
        Whether you have never sat on a Horse before, we are the club for you
      </div>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/312d07d8026c62c63c24ccf51aa6d6cdc62acc7e1fd01c2d4a97e837d0f5eef9?placeholderIfAbsent=true"
        className="aspect-[0.74] object-contain w-[450px] max-w-full mt-[60px] rounded-[300px] max-md:mt-10"
        alt="Horse riding"
      />
    </div>
  );
};

export default SidebarContent;
