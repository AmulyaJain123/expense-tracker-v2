import { styling } from "../util/styling";
import styled from "styled-components";
import { NavLink, useLocation, Link } from "react-router-dom";

const Main = styled.div`
  background-color: ${styling.navColor};

  &:hover {
    background-color: ${styling.pageTileHover};
  }
`;

const Iframe = styled.i`
  margin-right: 30px;
`;

function setActive(location, name, path) {
  if (name === "Home") {
    if (location.pathname === "/") {
      return true;
    }
    return false;
  } else if (location.pathname.includes("/" + path)) {
    return true;
  }
  return false;
}

export default function PageTile({ details, dev }) {
  const { name, path, iconClass, iconClassBold } = details;
  const location = useLocation();
  const active = setActive(location, name, path);

  if (dev) {
    return (
      <div className="">
        <div className="opacity-50 pointer-events-none ">
          <Main className="py-3 mb-2 pl-4 w-[220px] flex items-center rounded-r-lg">
            <img
              src={iconClass}
              className="flex justify-center items-center w-[25px] mr-5 h-[25px]"
              alt=""
            />
            <span className="text-sm lg:text-base">{name}</span>
          </Main>
        </div>
      </div>
    );
  } else {
    return (
      <div className="">
        <NavLink
          to={path}
          className={({ isActive }) => {
            return isActive ? "active" : undefined;
          }}
        >
          <Main className="py-3 mb-2 pl-4 w-[220px] flex items-center rounded-r-lg">
            <img
              src={!active ? iconClass : iconClassBold}
              className="flex justify-center items-center w-[25px] mr-5 h-[25px]"
              alt=""
            />
            <span className="text-sm lg:text-base">{name}</span>
          </Main>
        </NavLink>
      </div>
    );
  }
}
