import React from "react";

const HorseDetails: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="text-[rgba(35,35,35,1)] text-[70px] font-[160] self-center mt-44 max-md:text-[40px] max-md:mt-10">
        Details
      </div>

      <div className="z-10 flex w-[938px] max-w-full flex-col items-stretch mr-[89px] mt-[188px] max-md:mr-2.5 max-md:mt-10 self-end">
        <div className="w-[690px] max-w-full ml-[67px]">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[24%] max-md:w-full max-md:ml-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/b32ace1a950afc2901ef1b391562aaf8ebd723ab7f70d53bcb17c083c1bb66e0?placeholderIfAbsent=true"
                className="aspect-[1.79] object-contain w-[138px] shrink-0 max-w-full mt-7 max-md:mt-10"
                alt="Horse detail icon"
              />
            </div>
            <div className="w-[76%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col max-md:max-w-full max-md:mt-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/f0f45d206a39cdea555298f54f6ee694870d2c0ff49f88bc115ab5f3c72c06f6?placeholderIfAbsent=true"
                  className="aspect-[2.25] object-contain w-[133px] max-w-full"
                  alt="Horse detail decoration"
                />
                <div className="flex w-[241px] max-w-full flex-col mt-11 max-md:mt-10">
                  <div className="flex">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/2e7e9a619bde02400f19169a71db432bcb177a69211cef03a7af9eae5d2d69a2?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-[39px] shrink-0 rounded-[50%]"
                      alt="Horse detail icon"
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/967fcdf2a5404f140af2338634d573bb7d6b8af00f0df30d7f3663ce858f29a4?placeholderIfAbsent=true"
                      className="aspect-[2.42] object-contain w-[104px] shrink-0 max-w-full mt-[18px]"
                      alt="Horse detail decoration"
                    />
                  </div>
                  <div className="text-[rgba(35,35,35,1)] text-lg font-[135] leading-loose mr-[57px] max-md:mr-2.5">
                    17hh
                  </div>
                  <div className="text-[rgba(35,35,35,1)] text-lg font-[135] leading-loose mt-[47px] max-md:mt-10">
                    453 ib
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mr-[227px] max-md:mr-2.5">
          <div className="bg-[rgba(255,255,255,0.5)] flex flex-col items-center justify-center w-10 h-10 mt-3.5 px-1 rounded-[50%]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/8746ef6388de4906aefaca595544ae32b6aa4bb2f6d8a7ccbbbb58792d5c1881?placeholderIfAbsent=true"
              className="aspect-[1.03] object-contain w-[31px] rounded-[50%]"
              alt="Detail icon"
            />
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/6dc06184df41759578631d433d4a47587acd7c79c89fc9e0ce1a73e87f33d99e?placeholderIfAbsent=true"
            className="aspect-[2.98] object-contain w-[110px] shrink-0 max-w-full"
            alt="Detail decoration"
          />
        </div>
        <div className="flex w-full items-stretch gap-5 flex-wrap justify-between max-md:max-w-full">
          <div className="flex">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/20175ff36d61cbf80510e44f3fd432c1093bf3e64b4afb8010832890ae5e15bb?placeholderIfAbsent=true"
              className="aspect-[3.82] object-contain w-[122px] z-10 shrink-0 max-w-full max-md:mr-[-3px]"
              alt="Detail decoration"
            />
            <div className="bg-[rgba(255,255,255,0.5)] flex flex-col items-center justify-center w-10 h-10 mt-2.5 px-[5px] rounded-[50%]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/dcf6506477a3f366c278a669e05c223ac493441319388331629947b7733db312?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[30px] rounded-[50%]"
                alt="Detail icon"
              />
            </div>
          </div>
          <div className="flex items-stretch gap-4 my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/f95f296a656fdf16c60665ca9ef6c0643ddbf44a59d9d8c3e5222c3f5108a627?placeholderIfAbsent=true"
              className="aspect-[1.39] object-contain w-[18px] shrink-0"
              alt="Navigation arrow"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/280a1ecd38197bb0b1709bdbf5368a469726a52cc227903fa232d447d459be73?placeholderIfAbsent=true"
              className="aspect-[1.39] object-contain w-[18px] shrink-0"
              alt="Navigation arrow"
            />
          </div>
        </div>
      </div>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/1a75ac17f765e241964e506b05831011492a38c496143d53a7ee64290036615f?placeholderIfAbsent=true"
        className="aspect-[6.8] object-contain w-full z-10 mt-[-7px] max-md:max-w-full"
        alt="Divider"
      />

      <div className="bg-black flex w-full gap-5 flex-wrap justify-between -mt-1.5 px-[79px] py-[76px] max-md:max-w-full max-md:px-5">
        <div className="flex">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/067649586f74fbfaa68bd2c7def8e4f2decc502c6053b5be102f563982aaac09?placeholderIfAbsent=true"
            className="aspect-[0.9] object-contain w-[37px] shrink-0"
            alt="Icon"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/fc331f3b28ee3d667e2356556882432138755b21b50af24b716f8648157fe67e?placeholderIfAbsent=true"
            className="aspect-[2.06] object-contain w-[107px] shrink-0 max-w-full mt-[35px] rounded-[50px]"
            alt="Decoration"
          />
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/9a9272837c03b6d9513df92328444cc34c6a85437ce2272c63699b9d28386df5?placeholderIfAbsent=true"
          className="aspect-[0.95] object-contain w-[107px] shrink-0 max-w-full mt-[5px] rounded-[50px_50px_0px_0px]"
          alt="Decoration"
        />
      </div>

      <div className="self-center z-10 flex mt-[-89px] w-full max-w-[991px] flex-col text-[70px] font-[160] ml-9 max-md:max-w-full max-md:text-[40px]">
        <div className="text-white leading-[90px] text-center ml-[49px] max-md:max-w-full max-md:text-[40px] max-md:leading-[57px]">
          The most deriable place for horse purchasing
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/b35fa28362976ef7fb124ca831794667d3aff81fd25912d7119fe9c128c32bd0?placeholderIfAbsent=true"
          className="aspect-[1.05] object-contain w-[42px] mt-[19px]"
          alt="Decoration"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/e24836be2d255d2ce3a7b104941e97a86da86861a31b9c360671edb40df35be1?placeholderIfAbsent=true"
          className="aspect-[0.96] object-contain w-[92px] rounded-[0px_0px_50px_50px]"
          alt="Decoration"
        />
      </div>
    </div>
  );
};

export default HorseDetails;
