import { createContext, useState } from "react";

export const PassShowHideContext = createContext();

export const PassShowHideProvider = ({ children }) => {
  const [isShow, setIsShow] = useState(true);

  const showHideHander = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <PassShowHideContext.Provider value={{ isShow, showHideHander }}>
      {children}
    </PassShowHideContext.Provider>
  );
};
