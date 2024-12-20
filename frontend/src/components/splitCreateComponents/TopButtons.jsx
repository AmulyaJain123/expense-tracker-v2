import RedButton from "../../UIComponents/RedButton";
import { Link } from "react-router-dom";

export default function TopButtons({ num }) {
  if (num === 0 || num === 1) {
    return (
      <div className="flex">
        <Link to={"/split"}>
          <RedButton text={"Discard"} />
        </Link>
      </div>
    );
  }
}
