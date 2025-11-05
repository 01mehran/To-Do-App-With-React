// State;
import { useState } from "react";

//Components;
import { MobileMenu } from "./MobileMenu";
import { DesktopMenu } from "./DesktopMenu";
import { useNavigate } from "react-router-dom";
import { showErrorToast } from "./Toast";

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
  const navigate = useNavigate();

  const handleLogOut = () => {
    
    if (window.confirm) {
      alert("Are you sure to LogOut? ");
    }
    localStorage.clear();

    showErrorToast("You Logged out!");
    setTimeout(() => navigate("/signUp"), 1500);
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
      <MobileMenu
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        onLogOut={handleLogOut}
      />

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
