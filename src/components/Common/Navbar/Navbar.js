import React, {
  useState,
  useEffect,
} from "react";
import { Link } from "react-scroll";
import {
  Dropdown,
  Image,
  Icon,
  Segment,
} from "semantic-ui-react";
import Button from "@material-ui/core/Button";
import { NavbarItems } from "../Lists/NavbarItems";
import styles from "./styles.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import LDProfilePicture from "../Images/ProfilePictureFull.png";

function Navbar() {
  const [openDropdownList, setOpenDropdownList] =
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
  function handleDropdownList() {
    if (openDropdownList === true) {
      setOpenDropdownList(false);
    } else {
      setOpenDropdownList(true);
    }
  }

  useEffect(() => {
    function handleClickOutside(e) {
      console.log(e, "event");
      if (
        openDropdownList === true &&
        !document
          .getElementById("navbarDropdown")
          .contains(e.target)
      ) {
        setOpenDropdownList(false);
      }
    }
    // Bind the event listener
    document.addEventListener(
      "mousedown",
      handleClickOutside
    );
    return (
      () => {
        // Unbind the event listener on clean up
        document.removeEventListener(
          "mousedown",
          handleClickOutside
        );
      },
      [document.getElementById("navbarDropdown")]
    );
  });
  return (
    <div className={styles.NavbarMain}>
      {/* large screen */}
      <div className={styles.NavbarSecondary}>
        <div className={styles.NavbarHolder}>
          <span>{null}</span>
        </div>
        <div className={styles.NavbarHolder}>
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
        <div className={styles.AvatarDiv}>
          <a href="https://www.linkedin.com/in/joseph-lai-466891204/">
            <Icon
              name="linkedin"
              size="big"
              color="blue"
            />
          </a>
          <div
            className={styles.TelegramContainer}
          >
            <Icon
              name="telegram"
              size="big"
              color="blue"
            />
            @josephlailai
          </div>

          <Image
            src={LDProfilePicture}
            className={styles.ProfilePicture}
          />
        </div>
      </div>
      {/* small screen */}
      <div
        className={
          styles.NavbarSecondarySmallScreen
        }
      >
        <div className={styles.HamburgerDiv}>
          <Dropdown
            id="navbarDropdown"
            trigger={SmallScreenDropdownTrigger}
            className={styles.NavbarDropdownList}
            open={openDropdownList}
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
                        onClick={
                          handleDropdownList
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

        <div className={styles.AvatarDiv}>
          <Icon
            name="linkedin"
            size="big"
            color="blue"
          />
          <Image
            src={LDProfilePicture}
            className={styles.ProfilePicture}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
