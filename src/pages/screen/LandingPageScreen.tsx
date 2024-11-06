import { MdKeyboardArrowDown } from "react-icons/md";
import pic from "../../assets/Screenshot 2024-11-05 104842.png";

const LandingPageScreen = () => {
  return (
    <div>
      <div className="h-[120vh] w-full bg-white flex flex-col items-center justify-start">
        <div className="w-full h-[17vh] bg-black flex ">
          <div className="w-[20%] h-full flex justify-center items-center gap-5 text-white font-semibold text-[30px]  hover:underline  border bg-black font-serif ">
            {" "}
            Contents <MdKeyboardArrowDown />
          </div>
          <div className="w-[60%] h-full bg-[#444444] font-semibold text-[30px] items-center justify-center flex text-white cursor-pointer hover:underline  border  font-serif ">
            Codelab
          </div>
          <div className="w-[20%] h-full bg-black "></div>
        </div>
        <div className="w-[60%] h-[25vh] ">
          <div className="w-[100%]  border-b border-[black] mt-[70px] h-[] font-semibold ">
            <p className="ml-1 text-[30px] font-serif"> Goals and Priority</p>
          </div>
        </div>
        <div className="w-[60%] h-[20vh]  flex gap-3 font-semibold text-[20px] font-serif">
          <p>Peter Oti</p>
          <p>and</p>
          <p>Ogunyemi samuel</p>
        </div>
        <div className="w-[60%] h-[50vh] flex gap-3 font-semibold text-[20px] font-serif items-center justify-center">
          <img src={pic} alt="" className="w-[100%] h-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default LandingPageScreen;
