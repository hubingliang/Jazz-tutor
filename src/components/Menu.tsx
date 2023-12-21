import { scoreState } from "@/atom/score";
import { ReactElement, useMemo } from "react";
import { useRecoilState } from "recoil";
import { Outlet, Link } from "react-router-dom";

export const Menu = ({ children }: { children: ReactElement }) => {
  const [score, setScore] = useRecoilState(scoreState);
  const pathname = useMemo(() => location.pathname, [location.pathname]);
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col h-screen">
        {/* Navbar */}
        <div className="w-full navbar bg-base-100 relative">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">Jazz Tutor</div>

          <div className="mr-4">{`${score.success}/${score.total}`}</div>

          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              <li>
                <a href={`/chord`} className={`active`}>
                  Chord
                </a>
              </li>
              <li>
                <a
                  href={`/scale`}
                  className={pathname === "/scale" ? `active` : ""}
                >
                  Scale
                </a>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          <li>
            <a href={`/`} className={pathname === "/" ? `active` : ""}>
              Home
            </a>
          </li>
          <li>
            <a
              href={`/chord`}
              className={pathname === "/chord" ? `active` : ""}
            >
              Chord
            </a>
          </li>
          <li>
            <a
              href={`/scale`}
              className={pathname === "/scale" ? `active` : ""}
            >
              Scale
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
