// State;
import { useState } from "react";

//Components;
import { MobileMenu } from "./MobileMenu";
import { DesktopMenu } from "./DesktopMenu";

export const Menu = () => {
  // States;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuCollapse, setIsMenuCollapse] = useState(true);

  // Functions;
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMenuCollapse = () => {
    setIsMenuCollapse(!isMenuCollapse)
  }
  return (
    <div className="relative">
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 bg-opacity-40 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      {/* Mobile Menu */}
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Desktop Menu */}
      <DesktopMenu isMenuCollapse={isMenuCollapse} toggleMenuCollapse={toggleMenuCollapse} />
    </div>
  );
};
