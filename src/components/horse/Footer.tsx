import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black w-full text-white max-md:max-w-full">
      <div className="flex flex-col relative min-h-[417px] w-full pt-[77px] pb-[30px] px-20 max-md:max-w-full max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/0b4986bdcdaf70e3df3a0a4f1633452fb26f45d249e3050809bd76ba10f75479?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt="Footer background"
        />
        <div className="relative z-10 flex w-full max-w-[1067px] items-stretch gap-[40px_90px] flex-wrap max-md:max-w-full">
          <div className="flex flex-col items-stretch text-[70px] font-[160] leading-none grow shrink-0 basis-0 w-fit mt-[15px] max-md:max-w-full max-md:text-[40px]">
            <div className="flex items-stretch gap-4 flex-wrap max-md:text-[40px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/81a87983c1416580a2ad935bb96985e4562436dbd305a8d256ffebd859e94516?placeholderIfAbsent=true"
                className="aspect-[2.39] object-contain w-[141px] shrink-0 max-w-full my-auto rounded-[100px]"
                alt="Horse logo"
              />
              <h2 className="basis-auto grow shrink max-md:max-w-full max-md:text-[40px]">
                Stay Connected
              </h2>
            </div>
            <div className="mt-2.5 max-md:max-w-full max-md:text-[40px]">
              With Horsey Community
            </div>
          </div>
          <nav className="flex items-stretch gap-[37px] text-lg font-[105] leading-loose">
            <div className="border w-px shrink-0 h-[262px] border-[rgba(255,255,255,0.3)] border-solid" />
            <div className="flex flex-col">
              <div className="text-3xl font-[160] leading-loose self-stretch">
                Horsey
              </div>
              <a
                href="#"
                className="mt-5 hover:text-gray-300 transition-colors"
              >
                Overview
              </a>
              <a
                href="#"
                className="mt-2.5 hover:text-gray-300 transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="mt-2.5 hover:text-gray-300 transition-colors"
              >
                Events
              </a>
            </div>
          </nav>
        </div>
        <div className="relative border self-stretch w-full shrink-0 h-px border-[rgba(255,255,255,0.3)] border-solid mt-auto" />
        <div className="relative text-lg font-[75] mt-[26px]">
          Copyright © 2025 Horsing, All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
