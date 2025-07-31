import { useState } from "react";
import { FormInput } from "../reusables/FormInput";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdOutlineHistory } from "react-icons/md";
import { LuUserRoundCheck } from "react-icons/lu";
import { LuSquareMenu } from "react-icons/lu";
import ImageCarousel from "./ImageCarousel";
import Title from "./Title";
import Footer from "./Footer";

type ListMenu = {
  id: number;
  name: string;
  icon: React.ReactElement;
};

const listMenu: ListMenu[] = [
  {
    id: 1,
    name: "Favourite",
    icon: <CiHeart />,
  },
  {
    id: 2,
    name: "History",
    icon: <MdOutlineHistory />,
  },
  {
    id: 3,
    name: "Following",
    icon: <LuUserRoundCheck />,
  },
  {
    id: 4,
    name: "Orders",
    icon: <LuSquareMenu />,
  },
];

const Home: React.FC = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div>
        <FormInput
          name="search"
          onChange={handleChange}
          value={search}
          placeholder="Search"
        >
          <CiSearch
            className="text-[#828282] text-2xl flex gap-2"
            strokeWidth={1}
          />
        </FormInput>
      </div>
      <div className="mt-5 overflow-x-auto md:justify-center md:flex sm:overflow-x-auto md:overflow-x-visible scrollbar-hide">
        <div className="flex gap-3 flex-nowrap md:flex-wrap md:justify-start px-2">
          {listMenu.map((list) => {
            const { name, icon, id } = list;
            return (
              <div
                key={id}
                className="flex gap-2 items-center border border-[#1A1A1A] px-3 py-2 w-[calc(100vw/3.2)] md:w-[160px] justify-center rounded-md shrink-0 md:shrink md:grow-0"
              >
                <span className="text-lg font-bold">{icon}</span>
                <span className="text-sm font-semibold font-Roboto">
                  {name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <ImageCarousel />
      <Title />
      <Footer />
    </>
  );
};

export default Home;
