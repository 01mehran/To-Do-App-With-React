
export const NotFound = () => {
  return (
    <div className="bg-gray-100 font-Inder flex h-screen flex-col items-center justify-center gap-2 px-2">
      <h1 className="to-red bg-gradient-to-r from-red-600 via-blue-700 bg-clip-text text-[10vw] text-transparent sm:text-5xl lg:text-7xl">
        NOT FOUND (404)
      </h1>
      <article className="flex w-full flex-col items-center justify-center gap-5">
        <span className="text-[4vw] text-black/70 sm:text-lg">
          No internet connection or wrong path!
        </span>
        <div className="bg-gray-400 grid w-full grid-cols-3 divide-x-[1px] divide-black/30 rounded-sm py-1.5 sm:w-[300px] sm:divide-x-[2px] sm:py-3">
          <a href="/home" className="text-center text-[4vw] text-black/80 sm:text-base">
            Home
          </a>
          <a href="/upComingPage" className="text-center text-[4vw] text-black/80 sm:text-base">
            Upcoming
          </a>
          <a href="/todayPage"  className="text-center text-[4vw] text-black/80 sm:text-base">
            Today
          </a>
        </div>
      </article>
    </div>
  );
};