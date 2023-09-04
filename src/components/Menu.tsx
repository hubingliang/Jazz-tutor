import { scoreState } from "@/atom/score";
import { ReactElement } from "react";
import { useRecoilState } from "recoil";

export const Menu = ({ children }: { children: ReactElement }) => {
  const [score, setScore] = useRecoilState(scoreState);
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
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {score.success}/{score.total}
          </div> */}
          <span
            className="countdown absolute top-1/2 lg:left-1/2 right-1 lg:right-auto transform -translate-x-1/2 -translate-y-1/2"
            onClick={() => setScore({ total: 0, success: 0 })}
          >
            <span style={{ "--value": score.success }}></span>/
            <span style={{ "--value": score.total }}></span>
          </span>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <a href={`/chord`} className={`active`}>
                  Chord
                </a>
              </li>
              <li>
                <a>Setting</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <a href={`/chord`} className={`active`}>
              Chord
            </a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
