import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import Avatar from "./Avatar";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <header className={`header ${className}`}>
      <div className="brand-container-parent">
        <div className="brand-container">
          <img
            className="bihouse-door-icon1"
            loading="lazy"
            alt=""
            src="/bihousedoor.svg"
          />
        </div>
        <div className="adama-homes">Adama Homes</div>
      </div>
      <div className="navigation">
        <div className="nav-items">
          <div className="home-link">
            <Button className="home" variant="outline-primary" size="sm">
              Home
            </Button>
          </div>
          <div className="home-link">
            <Button className="about-us" variant="outline-primary" size="sm">
              About Us
            </Button>
          </div>
          <div className="user-actions">
            <DropdownButton
              title="List Your Home"
              as={ButtonGroup}
              size="sm"
              style={{ width: "131", height: "24" }}
            >
              <Dropdown.Item>BUY</Dropdown.Item>
              <Dropdown.Item>RENT</Dropdown.Item>
            </DropdownButton>
          </div>
          <Avatar
            avatarAlignSelf="unset"
            initialsAlignSelf="unset"
            initialsDisplay="inline-block"
            initialsHeight="0px"
            avatarHeight="unset"
          />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
