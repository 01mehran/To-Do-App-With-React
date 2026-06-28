export const ErrorMessage = ({ error }) => {
  return (
    <span
      className={`font-inder absolute -bottom-5.25 left-0 transform text-sm text-red-600 opacity-0 ${error && "opacity-100 transition duration-300"}`}
    >
      {error}
    </span>
  );
};
