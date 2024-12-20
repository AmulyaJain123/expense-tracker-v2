import ManageTags from "../components/tagComponents/ManageTags";
import RedButton from "../UIComponents/RedButton";
import { Link } from "react-router-dom";

export default function Tags() {
  return (
    <div className="h-full w-full bg-white whiteScr overflow-auto pb-[80px] rounded-r-xl lg:rounded-r-none rounded-l-xl">
      <div className="flex my-12 mx-16">
        <Link to={"/vault"}>
          <RedButton text={"Go Back To Vault"} />
        </Link>
      </div>
      <ManageTags />
    </div>
  );
}
