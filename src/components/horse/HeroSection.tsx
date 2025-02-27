import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col relative min-h-[906px] w-full max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/68115e5e2695193371db72ac09d41963466417a62d29c84a77f4ff1d3dd35f0f?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Hero background"
      />
      <div className="flex flex-col relative z-10 min-h-[1082px] w-full -mb-44 px-20 max-md:max-w-full max-md:mb-2.5 max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/c32257a02e042dbdfb3a070131024efa84fb834af330154d32fdf89f5572ef4e?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt="Hero overlay"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/891d5358b61ff21b32324561505d4454dbebd8a36d502d5eea498c4c09714b96?placeholderIfAbsent=true"
          className="aspect-[0.81] object-contain w-[413px] max-w-full ml-[26px] rounded-[0px_0px_200px_200px] max-md:ml-2.5"
          alt="Horse"
        />
        <div className="relative text-white text-lg font-[75] leading-7 ml-[26px] mt-6 max-md:max-w-full">
          Lorem ipsum dolor sit amet consectetur. Eget eget accumsan eget
          facilisis vitae ante ut. Quam vestibulum fermentum sed arcu eget morbi
          nunc pretium sem. Neque vulputate non phasellus leo. Aliquet nullam
          aliquam laoreet commodo gravida quam aliquet at.{" "}
        </div>
        <div className="relative flex items-stretch gap-5 ml-[26px] mt-[23px] max-md:ml-2.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/98a529b73f885a0739dff935df95d88cfade61543f89fd4e9b1b4fab9df6a9e2?placeholderIfAbsent=true"
            className="aspect-[0.99] object-contain w-[78px] shrink-0 rounded-[50%]"
            alt="Riding lessons icon"
          />
          <div className="flex flex-col items-stretch my-auto">
            <div className="text-white text-[22px] font-[135] leading-none">
              Riding Lessons
            </div>
            <div className="text-[rgba(242,214,0,1)] text-lg font-[105] leading-loose mt-2.5">
              Contact Us
            </div>
          </div>
        </div>
        <div className="relative text-[rgba(35,35,35,1)] text-[70px] font-[160] mt-[220px] max-md:text-[40px] max-md:mt-10">
          Horse
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
