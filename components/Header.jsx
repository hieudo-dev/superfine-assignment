export default function Header() {
  return (
    <header className="sticky w-full top-0 px-4 lg:px-9 py-6 z-10 flex justify-between items-center bg-bluegray">
      <div className="flex basis-1/3 items-center">
        <h1 className="text-2xl text-gray-200 font-extrabold">GAMEJAM</h1>
        <a href="#" className="ml-9 hidden lg:block">
          BROWSE GAMES
        </a>
      </div>

      <div className="basis-1/3 hidden lg:flex gap-12 justify-center items-center flex-1">
        <a href="#">UPLOAD GAME</a>
        <a href="#">COMMUNITY</a>
        <a href="#">SUPPORT</a>
      </div>

      <div className="basis-1/3 hidden lg:flex justify-end">
        <button className="mr-16 ">Sign up</button>
        <button>Log in</button>
      </div>

      <div className="flex lg:hidden drawer drawer-end justify-end">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label className="btn bg-gradient" htmlFor="my-drawer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full text-lg bg-bluegray">
            <li>
              <a>BROWSE GAMES</a>
            </li>
            <li>
              <a>UPLOAD GAMES</a>
            </li>
            <li>
              <a>COMMUNITY</a>
            </li>
            <li>
              <a>SUPPORT</a>
            </li>
            <hr className="my-2 opacity-40" />
            <li>
              <a>Sign up</a>
            </li>
            <li>
              <a>Log in</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
