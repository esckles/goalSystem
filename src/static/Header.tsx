import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const nav = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "Read",
  },
  {
    id: 3,
    titleS: <button className="">Sign in</button>,
  },
  {
    id: 4,
    title: (
      <input
        type="text"
        placeholder="Search in priorities"
        className="bg-transparent border-b border-[black] w-[80%] h-[] outline-none text-black "
      />
    ),
  },
  {
    id: 5,
    title1: (
      <div className="flex justify-center items-center mb-7">
        <div className=" justify-center items-center  w-[50px] h-[50px]  flex rounded-[360%]  animate-pulse bg-stone-200">
          <div className=" justify-center items-center  w-[40px] h-[40px]  flex rounded-[360%]  animate-pulse bg-green-100">
            <div className=" justify-center items-center  w-[30px] h-[30px]  flex rounded-[360%]  animate-pulse bg-yellow-100">
              {" "}
              <MdSearch size={30} className="" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
];
const Header = () => {
  const navigate = useNavigate();
  const handleSignin = () => {
    navigate("/auth");
  };
  return (
    <div className="w-full h-[120px] flex justify-center items-center font-serif">
      <div className="w-[90%] h-[100%] bg-slate-300 items-center justify-between flex cursor-pointer">
        <div></div>
        <div className="flex gap-5 font-semibold text-[20px] h-[100%] w-[50%] items-center justify-center ">
          {nav.map((el) => (
            <div>
              {el.title} <button onClick={handleSignin}> {el.titleS}</button>
              <div className="">{el.title1}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
