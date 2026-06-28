// Link;
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="font-Inder flex h-screen flex-col items-center justify-center gap-2 bg-gray-100 px-2">
      <h1 className="to-red bg-linear-to-r from-red-600 via-blue-700 bg-clip-text text-[10vw] text-transparent sm:text-5xl lg:text-7xl">
        NOT FOUND (404)
      </h1>
      <article className="flex w-full flex-col items-center justify-center gap-5">
        <span className="text-[4vw] text-black/70 sm:text-lg">
          No internet connection or wrong path!
        </span>
        <div className="grid w-full grid-cols-3 divide-x divide-black/30 rounded-sm bg-gray-400 py-1.5 sm:w-75 sm:divide-x-2 sm:py-3">
          <Link
            to="/Home"
            className="text-center text-[4vw] text-black/80 sm:text-base"
          >
            Home
          </Link>
          <Link
            to="/Upcoming"
            className="text-center text-[4vw] text-black/80 sm:text-base"
          >
            Upcoming
          </Link>
          <Link
            to="/Today"
            className="text-center text-[4vw] text-black/80 sm:text-base"
          >
            Today
          </Link>
        </div>
      </article>
    </div>
  );
};
