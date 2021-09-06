import React, { useState } from "react";
import {
  Link,
  animateScroll as scroll,
} from "react-scroll";
import { Dropdown } from "semantic-ui-react";
import Button from "@material-ui/core/Button";
import { NavbarItems } from "../Lists/NavbarItems";
import styles from "./styles.module.css";
import MenuIcon from "@material-ui/icons/Menu";

function Navbar() {
  const options = NavbarItems;
  const SmallScreenDropdownTrigger = (
    <Button className={styles.DropdownButton}>
      <MenuIcon />
    </Button>
  );
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
