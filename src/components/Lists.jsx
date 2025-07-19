// Icons;
import plusIcon from "@icons/plusIcon.svg";

export const Lists = () => {
  return (
    <section>
      <div>
        <h3 className="font-oswald text-[15px] font-semibold">Lists</h3>

        <div className="mt-2 flex flex-col gap-3 px-2">
          {/* Work */}
          <article className="bg-gray-600 flex items-center space-x-2.5 rounded-full px-1 py-1.5">
            <span className="bg-red h-4 w-6 rounded-full"></span>
            <p className="font-notoSans text-sm font-medium text-black/70">
              Work
            </p>
          </article>

          {/* Personal */}
          <article className="bg-gray-600 flex items-center space-x-2.5 rounded-full px-1 py-1.5">
            <span className="bg-green-200 h-4 w-6 rounded-full"></span>
            <p className="font-notoSans text-sm font-medium text-black/70">
              Personal
            </p>
          </article>

          {/* Study */}
          <article className="bg-gray-600 flex items-center space-x-2.5 rounded-full px-1 py-1.5">
            <span className="bg-blue h-4 w-6 rounded-full"></span>
            <p className="font-notoSans text-sm font-medium text-black/70">
              Study
            </p>
          </article>

          {/* Add new  list */}
          <article className="flex cursor-pointer items-center space-x-2.5 rounded-full px-1 py-1.5 hover:shadow-sm">
            <img src={plusIcon} alt="plusicon" className="w-[1rem]" />
            <p className="font-notoSans text-[ 13px] font-light text-black/70 ">
              Add new list
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
