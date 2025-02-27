import React from "react";

const ExperienceSection: React.FC = () => {
  return (
    <section className="experience-section">
      <div className="self-center w-full max-w-[1260px] mt-[149px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[58%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col self-stretch items-stretch text-lg text-[rgba(102,102,102,1)] font-[75] my-auto max-md:max-w-full max-md:mt-10">
              <h2 className="text-[rgba(35,35,35,1)] text-[70px] font-[160] max-md:max-w-full max-md:text-[40px]">
                Get Your Experience
              </h2>
              <p className="leading-7 mt-5 max-md:max-w-full">
                Lorem ipsum dolor sit amet consectetur. Eget eget accumsan eget
                facilisis vitae ante ut. Quam vestibulum fermentum sed arcu eget
                morbi nunc pretium sem. Neque vulputate non phasellus leo.
                Aliquet nullam aliquam laoreet commodo gravida quam aliquet at.{" "}
              </p>
              <p className="leading-7 mt-5 max-md:max-w-full">
                Lorem ipsum dolor sit amet consectetur. Eget eget accumsan eget
                facilisis vitae ante ut. Quam vestibulum fermentum sed arcu eget
                morbi nunc pretium sem. Neque vulputate non phasellus leo.
                Aliquet nullam aliquam laoreet commodo gravida quam aliquet at.{" "}
              </p>
              <button className="bg-[rgba(243,189,12,1)] text-black leading-loose mt-[21px] px-[43px] py-[13px] rounded-[50px] max-md:px-5 w-fit">
                Join With Us
              </button>
            </div>
          </div>
          <div className="w-[42%] ml-5 max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/d34e7bb4547e04879d0b1726af30bb2b73505c3a163df9fcf4addd8189958c31?placeholderIfAbsent=true"
              className="aspect-[0.91] object-contain w-full grow rounded-[20px] max-md:max-w-full max-md:mt-10"
              alt="Horse experience"
            />
          </div>
        </div>
      </div>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/9fd3a4e3c4cc468ab1f66c14a83a31599f3c512828f8ab965840718f5f8148db?placeholderIfAbsent=true"
        className="aspect-[6.8] object-contain w-full mt-[150px] max-md:max-w-full max-md:mt-10"
        alt="Divider"
      />
    </section>
  );
};

export default ExperienceSection;
