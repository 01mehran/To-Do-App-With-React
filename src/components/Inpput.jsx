import { ErrorMessage } from "./ErrorMessage";

export const Input = ({ placeholder, type, value, onHandleChange, name, error }) => {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onHandleChange}
        name={name}
        className="w-full rounded-[7px] border border-black/60 px-2 py-1 accent-green-100 outline-0 focus:border-transparent focus:ring-2 focus:ring-green-100 focus:outline-none"
      />
      <ErrorMessage error={error}/>
    </div>
  );
};
