import RedButton from "../../UIComponents/RedButton";
import NiceButton from "../../UIComponents/NiceButton";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { splitCreateActions } from "../../store/main";

export default function BottomButtons({ num }) {
  const dispatch = useDispatch();
  const friends = useSelector((state) => state.splitCreate.friends);
  const splitInfo = useSelector((state) => state.splitCreate.splitInfo);

  if (num === 0) {
    return (
      <div className="flex flex-grow justify-end">
        <button
          onClick={() => dispatch(splitCreateActions.changeStage(1))}
          className="disabled:pointer-events-none disabled:opacity-50"
          disabled={friends.length != 2 || splitInfo.splitName === ""}
        >
          <NiceButton text={"Continue"} />
        </button>
      </div>
    );
  }
}
