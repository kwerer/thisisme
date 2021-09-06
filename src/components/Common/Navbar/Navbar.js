import React, {
  useState,
  useEffect,
  createRef,
} from "react";
import { Link } from "react-scroll";
import { Dropdown } from "semantic-ui-react";
import Button from "@material-ui/core/Button";
import { NavbarItems } from "../Lists/NavbarItems";
import styles from "./styles.module.css";
import MenuIcon from "@material-ui/icons/Menu";

function Navbar() {
  const [openDropdownList, setDropdownList] =
    useState(false);
  const options = NavbarItems;
  const SmallScreenDropdownTrigger = (
    <Button
      className={styles.DropdownButton}
      onClick={handleDropdownList}
    >
      <MenuIcon />
    </Button>
  );
  // const dropdownMenu = createRef();
  // function handleDropdownList() {
  //   if (openDropdownList === true) {
  //     setDropdownList(false);
  //   } else {
  //     setDropdownList(true);
  //   }
  // }

  // useEffect((e) => {
  //   function handleClickOutside(e) {
  //     console.log(e, "event");
  //     if (
  //       document.getElementById("navbarDropdown")
  //     ) {
  //       setDropdownList(false);
  //     }
  //   }
  //   // Bind the event listener
  //   document.addEventListener(
  //     "mousedown",
  //     handleClickOutside(e)
  //   );
  //   return () => {
  //     // Unbind the event listener on clean up
  //     document.removeEventListener(
  //       "mousedown",
  //       handleClickOutside(e)
  //     );
  //   };
  // });
  return (
    <div className={styles.NavbarMain}>
      {/* large screen */}
      <div className={styles.NavbarSecondary}>
        {options.map((item) => {
          return (
            <Link
              to={item.title}
              spy={true}
              smooth={true}
              duration={700}
              offset={-50}
            >
              <Button
                className={styles.NavItemIndiv}
              >
                {item.title}
              </Button>
            </Link>
          );
        })}
      </div>
      {/* small screen */}
      <div
        className={
          styles.NavbarSecondarySmallScreen
        }
      >
        <Dropdown
          id="navbarDropdown"
          trigger={SmallScreenDropdownTrigger}
          className={styles.NavbarDropdownList}
          open={openDropdownList}
          ref={dropdownMenu}
        >
          <Dropdown.Menu
            className={styles.DropdownMenu}
          >
            {options.map((item) => {
              return (
                <Link
                  to={item.title}
                  spy={true}
                  smooth={true}
                  duration={700}
                  offset={-50}
                >
                  <Dropdown.Item
                    className={
                      styles.DropdownItem
                    }
                  >
                    <Button
                      className={
                        styles.DropdownItemButton
                      }
                      onClick={handleDropdownList}
                    >
                      {item.title}
                    </Button>
                  </Dropdown.Item>
                </Link>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default Navbar;
