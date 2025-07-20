
export const ErrorMessage = ({error}) => {
  return (
    <span className={`absolute bottom-[-21px] left-0 font-inder transform text-sm text-red-600 opacity-0 ${error && "transition duration-300 opacity-100"}`}>{error}</span>
  );
};
