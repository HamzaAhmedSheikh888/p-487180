import React from "react";

interface HorseCardProps {
  imageSrc: string;
  title: string;
  sire: string;
  dam: string;
  type: string;
  location: string;
  status: string;
  price: string;
  horseType: string;
  date: string;
}

const HorseCard: React.FC<HorseCardProps> = ({
  imageSrc,
  title,
  sire,
  dam,
  type,
  location,
  status,
  price,
  horseType,
  date,
}) => {
  return (
    <div className="border grow pb-[34px] rounded-[20px] border-[rgba(102,102,102,0.3)] border-solid max-md:mt-5">
      <img
        src={imageSrc}
        className="aspect-[1.43] object-contain w-full rounded-[20px]"
        alt={title}
      />
      <div className="flex w-full flex-col mt-5 px-5">
        <div className="text-[rgba(35,35,35,1)] text-xl font-[105]">
          {title}
        </div>
        <div className="flex items-stretch gap-2 whitespace-nowrap mt-5">
          <div className="text-[#666666] text-sm font-[55]">S</div>
          <div className="text-[rgba(102,102,102,1)] text-base font-[75]">
            {sire}
          </div>
        </div>
        <div className="flex items-stretch gap-[7px] mt-2.5">
          <div className="text-[#666666] text-sm font-[55]">D</div>
          <div className="text-[rgba(102,102,102,1)] text-base font-[75] basis-auto">
            {dam}
          </div>
        </div>
        <div className="self-stretch flex items-stretch gap-5 justify-between mt-2.5">
          <div className="flex flex-col text-base text-[rgba(102,102,102,1)] font-[75]">
            <div>{type}</div>
            <div className="self-stretch mt-2.5">{location}</div>
            <div className="text-[#666666] text-sm font-[55] mt-2.5">
              {status}
            </div>
            <div className="text-[rgba(35,35,35,1)] text-xl font-[105] mt-2.5">
              {price}
            </div>
          </div>
          <div>
            <div className="flex flex-col pl-[22px] max-md:pl-5">
              <div className="text-[rgba(102,102,102,1)] text-base font-[75]">
                {horseType}
              </div>
              <div className="text-[#666666] text-sm font-[55] mt-[39px]">
                Closed
              </div>
            </div>
            <div className="text-[rgba(35,35,35,1)] text-xl font-[75] mt-2.5">
              {date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorseCard;
