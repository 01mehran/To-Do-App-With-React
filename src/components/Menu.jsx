// State;
import { useState } from "react";

//Components;
import { MobileMenu } from "./MobileMenu";
import { DesktopMenu } from "./DesktopMenu";

export const Menu = ({ num, num2 }) => {
  // States;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuCollapse, setIsMenuCollapse] = useState(true);

  // Functions;
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMenuCollapse = () => {
    setIsMenuCollapse(!isMenuCollapse);
  };
  return (
    <div className="relative">
      {isMenuOpen && (
        <div
          className="bg-opacity-40 fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      {/* Mobile Menu */}
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Desktop Menu */}
      <DesktopMenu
        num={num}
        num2={num2}
        isMenuCollapse={isMenuCollapse}
        toggleMenuCollapse={toggleMenuCollapse}
      />
    </div>
  );
};
