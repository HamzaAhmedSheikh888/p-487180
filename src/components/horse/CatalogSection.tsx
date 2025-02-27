import React from "react";
import HorseCard from "./HorseCard";

const CatalogSection: React.FC = () => {
  const horses = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/4bedfbdfa9c025af2195319932cbf2e8ea1a6d907aa4050a04c0dabfa065df20?placeholderIfAbsent=true",
      title: "Tourist - Romantic Song",
      sire: "Tourist",
      dam: "Romantic Song",
      type: "Weanling",
      location: "Charlotte Mall, Maryland",
      status: "RNA",
      price: "$8,500",
      horseType: "4M Filly",
      date: "01/01/2025",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/71b4e1e2617ff1dca4efd935cf1bd4a8076465c81280d155b4eb11258081950f?placeholderIfAbsent=true",
      title: "Midnight Storm - My Sweet Revenge",
      sire: "Midnight Storm",
      dam: "My Sweet Revenge",
      type: "Weanling",
      location: "Charlotte Mall, Maryland",
      status: "RNA",
      price: "$14,500",
      horseType: "5M Filly",
      date: "01/01/2025",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/cfe1e2163e8d6990cc0a617b20b87526bc1290b5cfd6691bd5894842d75bc79d?placeholderIfAbsent=true",
      title: "Imagining - Taylor Jagger",
      sire: "Imagining",
      dam: "Taylor Jagger",
      type: "Yearly",
      location: "Port Deposit, Maryland",
      status: "Sold For",
      price: "$34,500",
      horseType: "5M Filly",
      date: "01/01/2025",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/d7d68265af97fa91c72009c6d4b9951dedd867884212a380e923e50ed5fc4a59?placeholderIfAbsent=true",
      title: "Holy Boss - Little Inkling",
      sire: "Holy Boss",
      dam: "Little Inkling",
      type: "Yearling",
      location: "Port Deposit, Maryland",
      status: "",
      price: "$3,500",
      horseType: "1Y Filly",
      date: "01/01/2025",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/db68ac905280b45e083872d9e651170dc2829053378ca262bd291c87249899ec?placeholderIfAbsent=true",
      title: "Mamba Twenty Four",
      sire: "Hard Spun",
      dam: "Desire to Excel",
      type: "Racing",
      location: "Nicholasville, Kentucky",
      status: "",
      price: "$45,500",
      horseType: "3Y Colt",
      date: "01/01/2025",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/d59949cf6f4a4ebab46f207837884b84/d225b13c8eb3719bc0463abe9d0653b21483bc41877ffb24ab0519883084a4fa?placeholderIfAbsent=true",
      title: "Little Bella",
      sire: "Paddy O'Prado",
      dam: "Little Hazel",
      type: "Racing",
      location: "Lexington, KY",
      status: "",
      price: "$55,500",
      horseType: "3Y Colt",
      date: "01/01/2025",
    },
  ];

  return (
    <section className="catalog-section">
      <div className="self-center text-[rgba(35,35,35,1)] text-[70px] font-[160] mt-[257px] max-md:text-[40px] max-md:mt-10">
        Catalog
      </div>

      <div className="self-center w-full max-w-[1261px] mt-[25px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {horses.slice(0, 3).map((horse, index) => (
            <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
              <HorseCard {...horse} />
            </div>
          ))}
        </div>
      </div>

      <div className="self-center w-full max-w-[1261px] mt-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {horses.slice(3, 6).map((horse, index) => (
            <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
              <HorseCard {...horse} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
