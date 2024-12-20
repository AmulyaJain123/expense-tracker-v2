import NewSplitBox from "./NewSplitBox";
import SavedSplits from "./SavedSplits";
import { Link } from "react-router-dom";
import add from "../../assets/add.png";

export default function Splits() {
  return (
    <div className="flex flex-col mt-[150px]">
      <div className="flex justify-between items-center p-3 px-6 rounded-xl bg-slate-100 mx-[50px] sm:mx-[100px]">
        <span className="text-[25px] sm:text-[30px] lg:text-[40px] ml-[10px] sm:ml-[20px] font-bold">
          Latest SPLITS
        </span>
      </div>
      <div className="flex mt-[20px] p-8 rounded-xl pb-16 space-x-8 bg-slate-100 mx-[50px] sm:mx-[100px]">
        <Link
          to={"create"}
          className="rounded-2xl sm:rounded-3xl border-2 group border-[white] hover:border-stone-600  w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] hover:shadow-xl duration-500  hover:scale-105  flex justify-center text-center items-center p-4 striped"
        >
          <div className="w-[30px] sm:w-[40px] rounded-full h-[30px] sm:h-[40px] bg-white flex items-center justify-center">
            <img
              src={add}
              className="w-[30px] sm:w-[40px] h-[30px] sm:h-[40px]"
              alt=""
            />
          </div>
        </Link>
        <Link
          to={"protected/view/warranty"}
          className="bg-black w-[200px] p-4 rounded-xl h-[200px] text-white group hover:text-black hover:bg-white border-2 border-black hover:scale-110 duration-500 hover:shadow-lg"
        >
          <span className=" font-semibold text-2xl ">
            Go To
            <br /> Saved SPLITS
          </span>
          <div className="mt-3 border border-white group-hover:border-black duration-500 rounded-full"></div>
        </Link>
      </div>
    </div>
  );
}
