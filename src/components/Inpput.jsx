export const Input = ({ placeholder, type }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="focus:ring-green-100 accent-green-100 w-full rounded-[7px] border border-black/60 px-2 py-1 outline-0 focus:border-transparent focus:ring-2 focus:outline-none"
    />
  );
};
