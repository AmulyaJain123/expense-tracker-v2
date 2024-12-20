import { useState } from "react";
import right from "../../assets/right.png";
import left from "../../assets/left.png";

export default function Activity({ data }) {
  const [selectedYear, setSelectedYear] = useState(
    data.list[data.list.length - 1].year
  );
  const [ind, setInd] = useState(data.list.length - 1);
  const [selectedData, setSelectedData] = useState(
    data.list[data.list.length - 1].calendar
  );

  console.log(data);

  function rightClick() {
    const newYear = selectedYear + 1;
    const newInd = ind + 1;
    setSelectedYear(newYear);
    setSelectedData(data.list[newInd].calendar);
    setInd(newInd);
  }

  function leftClick() {
    const newYear = selectedYear - 1;
    const newInd = ind - 1;
    setSelectedYear(newYear);
    setSelectedData(data.list[newInd].calendar);
    setInd(newInd);
  }

  return (
    <div className="p-24 w-[80%] px-16 pt-6 bg-neutral-100 rounded-lg">
      <div className="flex justify-between text-sm">
        <div className="flex space-x-8">
          <div className="flex space-x-3">
            <span>Total Active Days: </span>
            <span>{data.totalActiveDays}</span>
          </div>
          <div className="flex space-x-3">
            <span>
              Total Active Days in{" "}
              <span className="font-medium">{selectedYear}</span> :{" "}
            </span>
            <span>{data.list[ind].totalActiveDays}</span>
          </div>
          <div className="flex space-x-3">
            <span>Max Streak: </span>
            <span>{data.maxStreak}</span>
          </div>
        </div>
        <div className="text-base flex items-center space-x-4">
          <button
            className="disabled:pointer-events-none disabled:opacity-50"
            disabled={selectedYear === data.list[0].year}
            onClick={leftClick}
          >
            <img
              src={left}
              className="w-[25px] h-[25px] flex justify-center items-center"
              alt=""
            />
          </button>
          <span className="w-[40px] text-center">{selectedYear}</span>
          <button
            className="disabled:pointer-events-none disabled:opacity-50"
            disabled={selectedYear === data.list[data.list.length - 1].year}
            onClick={rightClick}
          >
            <img
              src={right}
              className="w-[25px] h-[25px] flex justify-center items-center"
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="flex  pt-28 justify-center flex-wrap gap-x-6 gap-y-16">
        <div className="flex relative flex-col items-start text-xs text-neutral-500 mr-2 rounded-sm flex-wrap h-[140px] gap-1">
          <div className=" h-[15px]">Mon</div>
          <div className=" h-[15px]">Tue</div>
          <div className=" h-[15px]">Wed</div>
          <div className=" h-[15px]">Thu</div>
          <div className=" h-[15px]">Fri</div>
          <div className=" h-[15px]">Sat</div>
          <div className=" h-[15px]">Sun</div>
        </div>
        {selectedData.map((month) => {
          return (
            <div className="relative">
              <div className="flex  flex-col flex-wrap h-[140px] gap-1">
                {month.map((day) => {
                  if (day === null) {
                    return <div className="w-[15px] h-[15px]"></div>;
                  } else {
                    return (
                      <div
                        style={{
                          backgroundColor:
                            day.active === true ? "#9F21E3" : "#d4d4d4",
                        }}
                        className="w-[15px] h-[15px] rounded-[4px]"
                      ></div>
                    );
                  }
                })}
              </div>
              <span className="absolute top-[-40px] right-[50%] text-sm translate-x-[50%] text-neutral-500">
                {month[month.length - 1]?.monthName}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
